import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Processo', href: '#processo' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className="header" style={scrolled ? { borderBottomColor: 'rgba(0,0,0,0.08)' } : undefined}>
        <div className="header__inner">
          <a href="#" className="header__logo">
            Helena <span>Albuquerque</span>
          </a>

          <nav className="header__nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="header__cta">
            Agendar consulta
          </a>

          <button
            className="header__mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div className={`header__mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
        <a href="#contato" className="btn btn--primary" style={{ marginTop: '1rem', justifyContent: 'center' }} onClick={handleNavClick}>
          Agendar consulta
        </a>
      </div>
    </>
  );
}
