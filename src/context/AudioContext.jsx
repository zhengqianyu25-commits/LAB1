import { createContext, useContext, useState, useRef, useEffect } from 'react';
import articles from '../data/articles';

const audioArticles = articles.filter(a => a.media?.audio);
const AudioCtx = createContext();

export function AudioProvider({ children }) {
  const [episode, setEpisode] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const play = (index) => {
    const ep = audioArticles[index];
    if (!ep) return;
    const audio = audioRef.current;
    if (!audio) return;
    if (episode?.number === ep.number) {
      if (audio.paused) { audio.play(); } else { audio.pause(); }
      return;
    }
    setEpisode(ep);
    audio.src = ep.media.audio.src;
    audio.play().catch(() => {});
  };

  const pause = () => audioRef.current?.pause();

  return (
    <AudioCtx.Provider value={{ episode, playing, play, pause }}>
      <audio ref={audioRef} id="global-audio" className="hidden" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}

export { audioArticles };
