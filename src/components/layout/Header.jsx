import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import SearchModal from '../common/SearchModal';
import { useFontSize } from '../../context/FontContext';
import Clock from '../common/Clock';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/stories', label: 'Stories' },
  { to: '/lab-notes', label: 'Lab Notes' },
  { to: '/frequency', label: 'Frequency' },
  { to: '/about', label: 'About' },
];

const navStyle = (isActive) => ({
  color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
  borderColor: isActive ? '#fff' : 'transparent',
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cycle, label } = useFontSize();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/20 transition-colors duration-300" style={{ background: '#C68600' }}>
        <div className="container-main flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-baseline gap-1 shrink-0">
            <span className="text-lg md:text-xl font-display font-semibold tracking-tight text-white">
              No Filter<span className="opacity-80"> Lab</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === '/'}
                  className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200"
                  style={({ isActive }) => navStyle(isActive)}
                >{link.label}</NavLink>
              ))}
            </nav>

            <Clock />

            <button onClick={() => setSearchOpen(true)} className="p-1.5 text-white/70 hover:text-white transition-colors" aria-label="Search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            <button onClick={cycle} className="text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border transition-colors hover:text-[var(--color-accent)]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }} aria-label="Font size" title="Font size">{label}</button>
            <ThemeToggle />

            <button onClick={() => setMenuOpen(true)} className="md:hidden p-1" aria-label="Menu">
              <span className="block w-5 h-0.5 bg-white mb-1" />
              <span className="block w-5 h-0.5 bg-white mb-1" />
              <span className="block w-3 h-0.5 bg-white" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 p-8 pt-20 z-10 border-l border-white/20" style={{ background: '#C68600' }}>
              <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-2xl text-white/70" aria-label="Close">&times;</button>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold tracking-widest uppercase transition-colors"
                    style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255,255,255,0.65)' })}
                  >{link.label}</NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
