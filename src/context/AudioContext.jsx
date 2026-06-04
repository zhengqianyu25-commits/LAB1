import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import articles from '../data/articles';

const audioArticles = articles.filter(a => a.media?.audio);
const AudioCtx = createContext();

export function AudioProvider({ children }) {
  const [episode, setEpisode] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nf_liked') || '[]'); } catch { return []; }
  });
  const [queue, setQueue] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nf_queue') || '[]'); } catch { return []; }
  });
  const audioRef = useRef(null);

  useEffect(() => { localStorage.setItem('nf_queue', JSON.stringify(queue)); }, [queue]);
  useEffect(() => { localStorage.setItem('nf_liked', JSON.stringify(liked)); }, [liked]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => { setCurrentTime(audio.currentTime); setDuration(audio.duration || 0); };
    const onEnded = () => {
      setPlaying(false);
      // If queue has items, play next in queue
      const q = JSON.parse(localStorage.getItem('nf_queue') || '[]');
      const curSlug = episode?.slug;
      const curQIdx = q.findIndex(e => e.slug === curSlug);
      if (curQIdx >= 0 && curQIdx < q.length - 1) {
        const nextQ = q[curQIdx + 1];
        const nextEp = audioArticles.find(a => a.slug === nextQ.slug);
        if (nextEp) {
          setEpisode(nextEp);
          audio.src = nextEp.media.audio.src;
          setTimeout(() => audio.play().catch(() => {}), 500);
          return;
        }
      }
      // Otherwise stop and close
      setEpisode(null);
      setPlaying(false);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onTime);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onTime);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [episode]);

  const play = useCallback((index) => {
    const ep = audioArticles[index];
    if (!ep) return;
    const audio = audioRef.current;
    if (!audio) return;
    if (episode?.number === ep.number) {
      if (audio.paused) { audio.play().catch(() => {}); } else { audio.pause(); }
      return;
    }
    setEpisode(ep);
    audio.src = ep.media.audio.src;
    audio.play().catch(() => {});
  }, [episode]);

  const pause = () => audioRef.current?.pause();
  const stop = () => { audioRef.current?.pause(); setEpisode(null); setPlaying(false); };
  const seek = (t) => { if (audioRef.current) audioRef.current.currentTime = t; };
  const prev = () => {
    if (!episode) return;
    const idx = audioArticles.indexOf(episode);
    play((idx - 1 + audioArticles.length) % audioArticles.length);
  };
  const next = () => {
    if (!episode) return;
    const idx = audioArticles.indexOf(episode);
    play((idx + 1) % audioArticles.length);
  };
  const toggleLike = () => {
    if (!episode) return;
    setLiked(l => l.includes(episode.slug) ? l.filter(s => s !== episode.slug) : [...l, episode.slug]);
  };
  const isLiked = episode ? liked.includes(episode.slug) : false;

  const playAll = () => {
    setQueue(audioArticles.map(a => ({ number: a.number, title: a.titleEn, slug: a.slug })));
    play(0);
  };

  const addToQueue = () => {
    if (!episode) return;
    setQueue(q => {
      if (q.find(e => e.slug === episode.slug)) return q;
      return [...q, { number: episode.number, title: episode.titleEn, slug: episode.slug }];
    });
  };

  const removeFromQueue = (slug) => {
    setQueue(q => q.filter(e => e.slug !== slug));
  };

  return (
    <AudioCtx.Provider value={{ episode, playing, currentTime, duration, play, pause, stop, seek, prev, next, liked: isLiked, toggleLike, queue, addToQueue, removeFromQueue, playAll }}>
      <audio ref={audioRef} id="global-audio" className="hidden" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}

export { audioArticles };
