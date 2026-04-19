import Link from 'next/link';

import type { ProjectItem } from '@/lib/portfolio-data';

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group surface-card flex h-full flex-col justify-between gap-6 p-6">
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-foreground/70">
              {project.role}
            </p>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          </div>
          <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Open
          </span>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
      </div>

      <div className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform duration-200 group-hover:translate-x-1"
        >
          Open project reference <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
