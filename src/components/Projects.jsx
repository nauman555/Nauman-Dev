import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink text-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div>
            <p className="text-clay text-base tracking-wide mb-4">
              {projects.eyebrow}
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
              {projects.heading}
            </h2>
          </div>
        </div>
        <p className="text-base md:text-lg text-cream/80 italic mb-12 max-w-2xl leading-relaxed">
          {projects.note}
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="border border-cream/10 bg-moss/95 p-8 rounded-lg shadow-sm"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-3 text-cream">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-cream/85 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full border border-cream/20 bg-cream/5 text-cream/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
