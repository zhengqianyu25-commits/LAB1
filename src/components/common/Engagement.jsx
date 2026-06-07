import { useState } from 'react';

export default function Engagement({ slug }) {
  const key = `nf_${slug}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(`${key}_like`) === 'true');
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`${key}_count`);
    return saved ? parseInt(saved, 10) : Math.floor(Math.random() * 42) + 8;
  });
  const [comments, setComments] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`${key}_comments`) || '[]'); } catch { return []; }
  });
  const [input, setInput] = useState('');

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    const newCount = newLiked ? likes + 1 : likes - 1;
    setLikes(newCount);
    localStorage.setItem(`${key}_like`, newLiked);
    localStorage.setItem(`${key}_count`, newCount);
  };

  const addComment = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const newComments = [{ id: Date.now(), text, time: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }, ...comments];
    setComments(newComments);
    setInput('');
    localStorage.setItem(`${key}_comments`, JSON.stringify(newComments));
  };

  const deleteComment = (id) => {
    const updated = comments.filter(c => c.id !== id);
    setComments(updated);
    localStorage.setItem(`${key}_comments`, JSON.stringify(updated));
  };

  return (
    <section className="container-main py-8 animate-in" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="article-width">
        {/* Like */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={toggleLike}
            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: liked ? 'var(--color-accent)' : 'var(--color-border)',
              background: liked ? 'var(--color-accent)' : 'transparent',
              color: liked ? '#fff' : 'var(--color-text-secondary)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? 'white' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider">{likes}</span>
          </button>
          <span className="text-xs opacity-40" style={{ color: 'var(--color-text-muted)' }}>
            {liked ? 'You liked this' : 'Like this story'}
          </span>
        </div>

        {/* Comments */}
        <div>
          <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase opacity-40 mb-4 block" style={{ color: 'var(--color-text-muted)' }}>
            Comments ({comments.length})
          </span>

          <form onSubmit={addComment} className="flex gap-3 mb-6">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Add a comment..."
              maxLength={280}
              className="flex-1 px-4 py-2.5 text-sm border rounded-sm outline-none transition-colors focus:border-[var(--color-accent)]"
              style={{ background: '#1E1E1C', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 disabled:opacity-30"
              style={{ background: 'var(--color-accent)', color: '#fff' }}
            >
              Post
            </button>
          </form>

          {comments.length === 0 && (
            <p className="text-xs opacity-30 italic" style={{ color: 'var(--color-text-muted)' }}>No comments yet. Be the first.</p>
          )}

          <div className="space-y-3">
            {comments.slice(0, 10).map(c => (
              <div key={c.id} className="flex gap-3 group">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>
                  {String.fromCharCode(65 + (c.id % 26))}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>Reader</span>
                    <span className="text-[0.6rem] opacity-40" style={{ color: 'var(--color-text-muted)' }}>{c.time}</span>
                  </div>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>{c.text}</p>
                </div>
                <button
                  onClick={() => deleteComment(c.id)}
                  className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity text-lg leading-none mt-0.5"
                  style={{ color: 'var(--color-warn)' }}
                  aria-label="Delete comment"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
