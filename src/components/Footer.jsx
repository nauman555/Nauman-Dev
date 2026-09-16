import { profile, nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg text-cream mb-2">{profile.name}</p>
          <p className="text-sm leading-relaxed max-w-xs">
            AI Automation Engineer crafting intelligent, secure software.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-cream/50 mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-cream transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-cream/50 mb-4">Let's Connect</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-cream transition-colors">
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-moss">
        <p className="mx-auto max-w-7xl px-6 md:px-10 py-5 text-xs text-cream/40">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
