import { useAudio } from '../../context/AudioContext';

export default function VideoModal() {
  const { video, closeVideo } = useAudio();
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.85)' }} onClick={closeVideo}>
      <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
        <button onClick={closeVideo} className="absolute -top-10 right-0 text-white text-sm font-semibold tracking-wider uppercase opacity-70 hover:opacity-100">&times; Close</button>
        <iframe
          src={`https://www.youtube.com/embed/${video.src}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
          className="w-full h-full rounded-sm"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={video.caption || 'Video'}
        />
        {video.caption && <p className="mt-2 text-xs text-white/60">{video.caption}</p>}
      </div>
    </div>
  );
}
