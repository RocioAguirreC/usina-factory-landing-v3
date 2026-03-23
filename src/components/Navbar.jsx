import { useState, useEffect } from 'react';
import s from './Navbar.module.scss';

const NAV = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Portfolio',   href: '#portfolio' },
  { label: 'Sobre USINA', href: '#nosotros' },
  { label: 'Ubicación',   href: '#ubicacion' },
];

const go = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <a href="#hero" className={s.brand} onClick={e => go(e, '#hero')}>
          <img src="/usina-factory-logo.png" alt="USINA" className={s.logo} />
          <span className={s.brandName}>USINA</span>
        </a>

        <ul className={`${s.links} ${open ? s.open : ''}`}>
          {NAV.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { go(e, l.href); setOpen(false); }}>
                {l.label}
              </a>
            </li>
          ))}
          <li className={s.ctaMobile}>
            <a href="#contacto" className={s.btnCta} onClick={e => { go(e, '#contacto'); setOpen(false); }}>
              Hablemos
            </a>
          </li>
        </ul>

        <a href="#contacto" className={`${s.btnCta} ${s.ctaDesk}`} onClick={e => go(e, '#contacto')}>
          Hablemos
        </a>

        <button className={`${s.burger} ${open ? s.active : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
