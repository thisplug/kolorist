import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#services', label: 'Услуги' },
  { href: '#training', label: 'Обучение' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-display text-2xl tracking-wide text-charcoal">
          Алёна <span className="text-gold">Михайлова</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-warm-gray transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://vk.com/mikhailova__hair"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-5 py-2 text-sm text-cream transition-colors hover:bg-gold"
          >
            Записаться
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-rose-light/30 bg-cream/95 px-6 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-warm-gray"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://vk.com/mikhailova__hair"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-charcoal px-5 py-2 text-center text-sm text-cream"
            >
              Записаться
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
