import { NavLink } from 'react-router-dom';

export default function MobileNav({ open, onClose, links }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-paper-bg-secondary border-l border-paper-border p-8 pt-24 animate-[fadeInUp_0.3s_ease-out] z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-paper-text-secondary hover:text-paper-text transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          &times;
        </button>

        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `text-lg tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-paper-accent' : 'text-paper-text-secondary'
                }`
              }
            >
              <span className="block">{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
