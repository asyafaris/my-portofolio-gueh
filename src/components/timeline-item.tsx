import type { ExperienceItem } from '@/lib/portfolio-data';

export function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative pl-10">
      <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-accent/50 bg-accent shadow-[0_0_0_6px_rgba(61,125,255,0.12)]" />
      <div className="surface-card flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-foreground/70">
              {item.role}
            </p>
            <h3 className="text-xl font-semibold text-foreground">{item.company}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
          </div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary-foreground">
            {item.duration}
          </span>
        </div>

        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          {item.impact.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

