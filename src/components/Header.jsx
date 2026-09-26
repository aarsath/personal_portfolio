import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Resume', href: '/resume' }
];

export default function Header({ theme, setTheme }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const links = navItems.map((item) => (
    <li key={item.label}><NavLink to={item.href} end onClick={() => setToggleMenu(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{item.label}</NavLink></li>
  ));

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="flex justify-between items-center">
          <Link to="/" className="brand" onClick={() => setToggleMenu(false)}>Abdul Arsath</Link>
          <nav className="desktop-nav" aria-label="Main navigation"><ul>{links}</ul></nav>
          <div className="header-actions">
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">{theme === 'dark' ? 'light' : 'dark'}</button>
            <Link className="admin-link" to="/admin">admin</Link>
            <button onClick={() => setToggleMenu(!toggleMenu)} className="menu-toggle" aria-label={toggleMenu ? 'Close menu' : 'Open menu'} aria-expanded={toggleMenu}>
              {toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {toggleMenu && <nav className="mobile-menu" aria-label="Mobile navigation"><ul>{links}</ul></nav>}
      </div>
    </header>
  );
}
