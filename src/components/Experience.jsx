import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="bg-ink text-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-clay text-sm tracking-wide mb-4">{experience.eyebrow}</p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl mb-10">{experience.heading}</h2>
            <ol className="space-y-9">
              {experience.jobs.map((job) => (
                <li key={job.role + job.period} className="relative pl-6 border-l border-moss">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-clay" />
                  <p className="text-xs text-clay tracking-wide mb-1">{job.period}</p>
                  <h3 className="font-display text-lg mb-0.5">{job.role}</h3>
                  <p className="text-sm text-cream/60 mb-2">{job.org}</p>
                  <p className="text-sm text-cream/75 leading-relaxed">{job.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-10">{experience.eduHeading}</h2>
            <ol className="space-y-9 mb-14">
              {experience.education.map((edu) => (
                <li key={edu.degree} className="relative pl-6 border-l border-moss">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-clay" />
                  <p className="text-xs text-clay tracking-wide mb-1">{edu.period}</p>
                  <h3 className="font-display text-lg mb-0.5">{edu.degree}</h3>
                  <p className="text-sm text-cream/60 mb-2">{edu.org}</p>
                  <p className="text-sm text-cream/75 leading-relaxed">{edu.description}</p>
                </li>
              ))}
            </ol>

            <blockquote className="border-t border-moss pt-8">
              <p className="font-display italic text-xl text-cream/90 leading-relaxed">
                "{experience.quote}"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
