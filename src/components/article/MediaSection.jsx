import { useState } from 'react';

function Lightbox({ src, alt, onClose }) {
  return (
    <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 cursor-pointer" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white text-3xl hover:text-paper-accent transition-colors w-10 h-10 flex items-center justify-center" onClick={onClose}>&times;</button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="block text-xs font-mono tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>
          Gallery ({images.length} images)
        </span>
        <div className="flex items-center gap-1">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === idx ? 'var(--color-accent)' : 'var(--color-border)' }}
              aria-label={`Image ${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="relative border overflow-hidden" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'var(--color-bg-secondary)' }}>
        <div className="aspect-[16/10] overflow-hidden">
          <img src={images[idx].src} alt={images[idx].alt} className="w-full h-full object-contain" />
        </div>

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(0,0,0,0.4)', color: '#fff' }} aria-label="Previous">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(0,0,0,0.4)', color: '#fff' }} aria-label="Next">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {images[idx].caption && (
          <p className="px-4 py-2.5 text-xs text-center leading-relaxed border-t" style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
            {images[idx].caption}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MediaSection({ media }) {
  const [lightbox, setLightbox] = useState(null);

  if (!media) return null;

  const { images, video, audio, caption } = media;

  return (
    <section className="container-main py-8">
      <div className="max-w-3xl mx-auto">
        {caption && (
          <p className="text-sm text-paper-text-muted mb-6 font-mono tracking-wide uppercase">{caption}</p>
        )}

        {video && (
          <div className="mb-8 rounded-xl overflow-hidden border border-paper-border">
            {video.type === 'youtube' ? (
              <div className="aspect-video" onClick={() => {
                // Pause global audio when user clicks to play YouTube
                const ga = document.getElementById('global-audio');
                if (ga) { ga.pause(); ga.dispatchEvent(new Event('pause')); }
              }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.src}?rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.caption || 'YouTube video'}
                />
              </div>
            ) : video.type === 'video/quicktime' ? (
              <div className="p-6 text-center" style={{ background: 'var(--color-bg-secondary)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{video.caption || 'Video'}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  This video is in QuickTime (.mov) format. <a href={video.src} download className="underline" style={{ color: 'var(--color-accent)' }}>Click here to download</a> and open with a media player.
                </p>
              </div>
            ) : (
              <video controls playsInline webkit-playsinline="true" className="w-full" poster={video.poster} preload="none">
                <source src={video.src} type={video.type || 'video/mp4'} />
                Your browser does not support video playback.
              </video>
            )}
            {video.caption && video.type !== 'video/quicktime' && video.type !== 'youtube' && (
              <p className="px-4 py-2 text-xs" style={{ color: 'var(--color-text-muted)', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>{video.caption}</p>
            )}
          </div>
        )}

        {images && images.length > 0 && (
          <ImageCarousel images={images} />
        )}
      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </section>
  );
}
