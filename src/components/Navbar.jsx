import { useState } from 'react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-cream">
          <span className="w-9 h-9 rounded-full border border-cream/40 flex items-center justify-center font-display text-sm">
            NA
          </span>
          <span className="font-display text-lg tracking-wide">Nauman Ali</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/80 hover:text-cream transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-clay text-ink text-sm font-medium px-5 py-2.5 rounded-full hover:brightness-110 transition"
        >
          Let's Talk
        </a>

        <button
          className="md:hidden text-cream"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-moss px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center gap-2 bg-clay text-ink text-sm font-medium px-5 py-2.5 rounded-full"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
