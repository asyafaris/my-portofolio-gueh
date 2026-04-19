import Link from 'next/link';

import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { TimelineItem } from '@/components/timeline-item';
import {
  certifications,
  contactLinks,
  experienceItems,
  highlightItems,
  projectItems,
  skillGroups,
} from '@/lib/portfolio-data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="grid-shell" aria-hidden="true" />

        <section id="hero" className="px-6 pb-16 pt-14 sm:px-8 lg:px-12 lg:pt-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <Reveal>
              <div className="surface-card overflow-hidden p-8 sm:p-10 lg:p-14">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                  <div className="space-y-8">
                    <span className="eyebrow">Available for high-impact collaboration</span>
                    <div className="space-y-6">
                      <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
                        Asya Ismatullah Faris
                      </p>
                      <div className="space-y-4">
                        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                          IT Project Manager <span className="text-accent">|</span> Product Owner
                        </h1>
                        <p className="max-w-2xl text-balance text-lg leading-8 text-muted-foreground sm:text-xl">
                          Leading complex projects. Delivering real business outcomes.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_12px_28px_rgba(114,168,255,0.34)]"
                      >
                        View Projects
                      </Link>
                      <Link
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition duration-200 hover:border-accent/40 hover:bg-white/[0.08]"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {highlightItems.map((item, index) => (
                      <Reveal key={item.label} delay={0.05 * (index + 1)}>
                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                          <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.label}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Execution-first leadership with a strong product and business lens."
                description="I lead initiatives by turning complexity into structure, aligning stakeholders around outcomes, and keeping teams focused on delivery that actually matters. My approach blends project discipline, product thinking, and practical communication to move work forward with confidence."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="surface-card p-8">
                <p className="text-lg leading-8 text-secondary-foreground">
                  I focus on bringing order to high-stakes delivery environments, creating clarity across teams, and ensuring every milestone supports a measurable business objective.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="A delivery track record built across banking, digital services, and founder-led execution."
                description="From PMO coordination to product ownership and entrepreneurial delivery, each role sharpened my ability to lead across moving parts without losing sight of outcomes."
              />
            </Reveal>
            <div className="relative space-y-6 before:absolute before:left-[6px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-white/10">
              {experienceItems.map((item, index) => (
                <Reveal key={item.company} delay={0.06 * index}>
                  <TimelineItem item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Programs and initiatives that demonstrate planning rigor, product clarity, and delivery control."
                description="A concise view of the kind of work I lead: organized execution, cross-functional coordination, and business-focused delivery from planning through launch."
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {projectItems.map((project, index) => (
                <Reveal key={project.title} delay={0.05 * index} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Capabilities"
                title="Built to lead delivery, align people, and keep execution credible."
                description="A balanced toolkit spanning management discipline, technical fluency, and modern delivery operations."
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={0.05 * index}>
                  <div className="surface-card h-full p-6">
                    <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="surface-card h-full p-8">
                <SectionHeading
                  eyebrow="Certifications"
                  title="Credentials that reinforce disciplined, modern delivery practices."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  {certifications.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div id="contact" className="surface-card h-full p-8">
                <SectionHeading
                  eyebrow="Contact"
                  title="Open to conversations around project leadership, product ownership, and delivery transformation."
                  description="If you are looking for someone who can bring structure, communication, and momentum to complex work, let&apos;s connect."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {contactLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-200 hover:border-accent/40 hover:bg-white/[0.08]"
                    >
                      <p className="text-sm font-semibold text-foreground">{link.label}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{link.value}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Asya Ismatullah Faris</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}

