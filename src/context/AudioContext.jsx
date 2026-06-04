import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import articles from '../data/articles';

const audioArticles = articles.filter(a => a.media?.audio);
const AudioCtx = createContext();

export function AudioProvider({ children }) {
  const [episode, setEpisode] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [queue, setQueue] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nf_queue') || '[]'); } catch { return []; }
  });
  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('nf_queue', JSON.stringify(queue));
  }, [queue]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      // Auto-play next in queue
      const curIdx = episode ? audioArticles.indexOf(episode) : -1;
      const next = (curIdx + 1) % audioArticles.length;
      const ep = audioArticles[next];
      setEpisode(ep);
      audio.src = ep.media.audio.src;
      setTimeout(() => audio.play().catch(() => {}), 500);
    };
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    return () => {
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

  const addToQueue = (ep) => {
    setQueue(q => {
      if (q.find(e => e.number === ep.number)) return q;
      return [...q, { number: ep.number, title: ep.titleEn, slug: ep.slug }];
    });
  };

  const removeFromQueue = (num) => {
    setQueue(q => q.filter(e => e.number !== num));
  };

  const playAll = () => play(0);

  return (
    <AudioCtx.Provider value={{ episode, playing, play, pause, queue, addToQueue, removeFromQueue, playAll }}>
      <audio ref={audioRef} id="global-audio" className="hidden" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}

export { audioArticles };
