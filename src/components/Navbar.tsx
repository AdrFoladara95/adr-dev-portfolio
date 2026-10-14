import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav
        className="nav-wrap container"
        aria-label="Main navigation"
      >
        <a
          className="brand"
          href="#home"
          onClick={close}
          aria-label="ADR.dev home"
        >
          ADR<span className='brand-dot'>.</span><span className='brand-dev'>dev</span>
        </a>

        <div
          className={`nav-links ${
            open ? 'nav-links-open' : ''
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              className={
                active === link.href.slice(1) ? 'active' : ''
              }
              href={link.href}
              onClick={close}
            >
              {link.label}
            </a>
          ))}

          <a
            className="nav-hire"
            href="#contact"
            onClick={close}
          >
            Hire Me <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}