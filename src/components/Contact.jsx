import { contact, profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center border-t border-b border-ink/10 py-14">
          <div>
            <p className="text-clay text-sm tracking-wide mb-4">{contact.eyebrow}</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">{contact.heading}</h2>
            <p className="text-stone max-w-md leading-relaxed">{contact.body}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-ink text-cream text-sm font-medium px-7 py-3.5 rounded-full hover:brightness-110 transition w-fit"
            >
              {contact.cta}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-sm text-stone">{profile.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
