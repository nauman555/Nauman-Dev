import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="bg-paper text-ink py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-clay text-sm tracking-wide mb-4">{skills.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl">{skills.heading}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/10 border border-ink/10">
          {skills.items.map((item) => (
            <div key={item.title} className="bg-paper p-7 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full border border-clay/40 flex items-center justify-center text-clay font-display">
                {item.title.charAt(0)}
              </div>
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="text-sm text-stone leading-relaxed flex-1">{item.description}</p>
              <p className="text-xs uppercase tracking-wide text-stone/70">{item.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
