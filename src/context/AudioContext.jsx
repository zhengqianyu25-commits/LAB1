import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import articles from '../data/articles';

const audioArticles = articles.filter(a => a.media?.audio);
const MediaCtx = createContext();

export function AudioProvider({ children }) {
  const [episode, setEpisode] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [video, setVideo] = useState(null);
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
      setEpisode(null);
      setPlaying(false);
    };
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onTime);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, [episode]);

  const playAudio = useCallback((index) => {
    const ep = audioArticles[index];
    if (!ep) return;
    const audio = audioRef.current;
    if (!audio) return;
    setVideo(null);
    if (episode?.number === ep.number) {
      if (audio.paused) { audio.play().catch(() => {}); setPlaying(true); } else { audio.pause(); setPlaying(false); }
      return;
    }
    setEpisode(ep);
    audio.src = ep.media.audio.src;
    audio.play().catch(() => {});
    setPlaying(true);
  }, [episode]);

  const pause = () => { audioRef.current?.pause(); setPlaying(false); };
  const stop = () => { audioRef.current?.pause(); setEpisode(null); setPlaying(false); setVideo(null); };
  const seek = (t) => { if (audioRef.current) audioRef.current.currentTime = t; };
  const prev = () => {
    if (!episode) return;
    const idx = audioArticles.indexOf(episode);
    playAudio((idx - 1 + audioArticles.length) % audioArticles.length);
  };
  const next = () => {
    if (!episode) return;
    const idx = audioArticles.indexOf(episode);
    playAudio((idx + 1) % audioArticles.length);
  };
  const toggleLike = () => {
    if (!episode) return;
    setLiked(l => l.includes(episode.slug) ? l.filter(s => s !== episode.slug) : [...l, episode.slug]);
  };
  const isLiked = episode ? liked.includes(episode.slug) : false;
  const playAll = () => {
    setQueue(audioArticles.map(a => ({ number: a.number, title: a.titleEn, slug: a.slug })));
    playAudio(0);
  };
  const addToQueue = () => {
    if (!episode) return;
    setQueue(q => {
      if (q.find(e => e.slug === episode.slug)) return q;
      return [...q, { number: episode.number, title: episode.titleEn, slug: episode.slug }];
    });
  };
  const removeFromQueue = (slug) => setQueue(q => q.filter(e => e.slug !== slug));

  const playVideo = (v) => {
    if (audioRef.current) { audioRef.current.pause(); setPlaying(false); }
    setVideo(v);
  };
  const closeVideo = () => setVideo(null);

  return (
    <MediaCtx.Provider value={{ episode, playing, currentTime, duration, play: playAudio, pause, stop, seek, prev, next, liked: isLiked, toggleLike, queue, addToQueue, removeFromQueue, playAll, video, playVideo, closeVideo }}>
      <audio ref={audioRef} id="global-audio" className="hidden" />
      {children}
    </MediaCtx.Provider>
  );
}

export function useAudio() {
  return useContext(MediaCtx);
}

export { audioArticles };
