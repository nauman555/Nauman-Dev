import { credentials, testimonial } from '../data/content'

export default function Testimonials() {
  return (
    <section className="bg-cream text-ink py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-clay text-sm tracking-wide mb-4">{credentials.eyebrow}</p>
        <h2 className="font-display text-3xl mb-12">{credentials.heading}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-ink/10">
          {credentials.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-stone">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-clay text-sm tracking-wide mb-4">{testimonial.eyebrow}</p>
        <h2 className="font-display text-3xl mb-8">{testimonial.heading}</h2>

        <figure className="max-w-2xl border border-dashed border-stone/40 rounded-lg p-8">
          <blockquote>
            <p className="font-display italic text-lg text-stone leading-relaxed">
              "{testimonial.quote}"
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm text-stone/70">
            — {testimonial.name}, {testimonial.role}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
