import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className={`max-w-3xl space-y-4 ${align === 'center' ? 'mx-auto' : ''}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}

