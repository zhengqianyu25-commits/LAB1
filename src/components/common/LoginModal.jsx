import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LoginModal({ open, onClose }) {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
  }, [open]);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      login(name.trim(), email.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-sm p-8 border shadow-2xl animate-in rounded-sm" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-xl opacity-40 hover:opacity-80" style={{ color: 'var(--color-text-muted)' }}>&times;</button>

        {user ? (
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-white mb-4" style={{ background: 'var(--color-accent)' }}>
              {user.name[0].toUpperCase()}
            </div>
            <h3 className="text-lg font-display font-medium mb-1" style={{ color: 'var(--color-text)' }}>{user.name}</h3>
            <p className="text-xs mb-6 opacity-50" style={{ color: 'var(--color-text-muted)' }}>{user.email}</p>
            <button
              onClick={() => { logout(); onClose(); }}
              className="px-6 py-2 text-xs font-semibold tracking-wider uppercase border rounded-sm transition-colors hover:border-[var(--color-warn)] hover:text-[var(--color-warn)]"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-display font-medium mb-6 text-center" style={{ color: 'var(--color-text)' }}>Sign In</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-2.5 text-sm border rounded-sm outline-none transition-colors focus:border-[var(--color-accent)]"
                style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="px-4 py-2.5 text-sm border rounded-sm outline-none transition-colors focus:border-[var(--color-accent)]"
                style={{ background: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
              <button
                type="submit"
                disabled={!name.trim() || !email.trim()}
                className="mt-2 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 disabled:opacity-40"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
              >
                Sign In
              </button>
            </form>
            <p className="mt-4 text-[0.6rem] text-center opacity-40" style={{ color: 'var(--color-text-muted)' }}>
              No password required. Just your name and email.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
