import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/governance', label: t('nav.governance') },
    { to: '/tournaments', label: t('nav.tournaments') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand" onClick={() => setOpen(false)}>
          <img src="/images/umb-logo.png" alt="UMB" className="site-brand-logo" />
          <span className="site-brand-text">
            <span className="site-brand-main">UMB</span>
            <span className="site-brand-sub">{t('nav.tagline')}</span>
          </span>
        </Link>

        <nav className={`site-nav ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `site-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/app" className="site-nav-cta" onClick={() => setOpen(false)}>
            ⛳ {t('nav.scorecard')}
          </Link>
        </nav>

        <div className="site-header-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label="Toggle language"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
