import { useState } from 'react';

function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:text-paper-accent transition-colors w-10 h-10 flex items-center justify-center"
        onClick={onClose}
      >
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
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
          <p className="text-sm text-paper-text-muted mb-6 font-mono tracking-wide uppercase">
            {caption}
          </p>
        )}

        {video && (
          <div className="mb-8 rounded-xl overflow-hidden border border-paper-border">
            <video
              controls
              className="w-full"
              poster={video.poster}
              preload="metadata"
            >
              <source src={video.src} type={video.type || 'video/mp4'} />
              Your browser does not support video playback.
            </video>
            {video.caption && (
              <p className="px-4 py-2 text-xs text-paper-text-muted bg-paper-bg-secondary border-t border-paper-border">
                {video.caption}
              </p>
            )}
          </div>
        )}

        {audio && (
          <div className="mb-8 p-5 border border-paper-border rounded-xl bg-paper-bg-secondary/50">
            <div className="flex items-center gap-3 mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-paper-accent shrink-0"
              >
                <path
                  d="M8 1v14M3 5v6M13 3v10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs font-mono text-paper-accent tracking-wider uppercase">
                Audio Story
              </span>
            </div>
            <audio controls className="w-full" preload="metadata">
              <source src={audio.src} type={audio.type || 'audio/mpeg'} />
              Your browser does not support audio playback.
            </audio>
            {audio.caption && (
              <p className="mt-2 text-xs text-paper-text-muted">{audio.caption}</p>
            )}
          </div>
        )}

        {images && images.length > 0 && (
          <div className="mb-8">
            <span className="block text-xs font-mono text-paper-accent tracking-wider uppercase mb-4">
              Gallery ({images.length} images)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="border border-paper-border rounded-xl overflow-hidden cursor-pointer hover:border-paper-accent/30 transition-all duration-200 group"
                  onClick={() => setLightbox(img)}
                >
                  <div className="aspect-video bg-paper-bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt || `Image ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  {img.caption && (
                    <p className="px-3 py-2 text-xs text-paper-text-muted">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
