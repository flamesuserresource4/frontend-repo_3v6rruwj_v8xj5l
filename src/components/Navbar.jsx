import { useState } from 'react';
import { Menu, X, Crown } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#destinations', label: 'Destinations' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#990000] text-white">
            <Crown size={18} />
          </span>
          <span className="font-semibold tracking-wide text-gray-900">Mzansi Luxe</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-[#990000] hover:brightness-110 transition"
          >
            Plan a Journey
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md border border-gray-200 text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full px-4 py-2 text-sm font-medium text-white bg-[#990000]"
            >
              Plan a Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
