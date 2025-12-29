import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#About' },
    { label: 'Certificates', href: '#Certificate' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Resume', href: '#Resume' },
    { label: 'Contact', href: '#Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-5 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold text-white tracking-wide"
          >
            <span className="text-secondary">A</span>bdul <span className="text-secondary">A</span>rsath
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-white hover:text-secondary font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setToggleMenu(!toggleMenu)}
            className="md:hidden text-white"
          >
            {toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {toggleMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={() => setToggleMenu(false)}
                    className="block text-white hover:text-secondary py-2 px-3 rounded hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}