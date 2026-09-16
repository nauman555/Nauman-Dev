import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="bg-cream text-ink py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-clay text-sm tracking-wide mb-4">{about.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-6 max-w-lg">
            {about.heading}
          </h2>
          {about.body.map((p, i) => (
            <p key={i} className="text-stone leading-relaxed mb-4 max-w-lg">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid sm:grid-cols-2 gap-8 pt-2 md:pt-24">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-clay/50 pl-4">
              <dt className="text-xs uppercase tracking-wide text-stone mb-1">{fact.label}</dt>
              <dd className="font-display text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
