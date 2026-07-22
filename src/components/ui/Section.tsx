import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <div className={`mb-4 flex ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="eyebrow">
            <span className="h-px w-8 block" style={{ background: 'linear-gradient(90deg,#7B5209,#C9A02A)' }} />
            {eyebrow}
            <span className="h-px w-8 block" style={{ background: 'linear-gradient(90deg,#C9A02A,transparent)' }} />
          </span>
        </div>
      )}
      <h2 className={`text-balance text-3xl font-bold sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-anthracite-900 dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-[1.75] sm:text-lg ${light ? 'text-anthracite-300' : 'text-anthracite-500 dark:text-anthracite-300'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function CTABand({ title, description, primary, secondary }: { title: string; description: string; primary: ReactNode; secondary?: ReactNode }) {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl p-10 text-center shadow-float lg:px-20 lg:py-20" style={{ background: 'linear-gradient(135deg,#0E0D0C 0%,#1C1A18 50%,#2C2925 100%)' }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% -5%,rgba(123,82,9,0.20),transparent)' }} />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(123,82,9,0.12)' }} />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(123,82,9,0.10)' }} />
      <div className="relative">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-anthracite-300 sm:text-lg">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primary}
          {secondary}
        </div>
      </div>
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, description, badge }: { eyebrow: string; title: ReactNode; description: string; badge?: string }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28" style={{ background: 'linear-gradient(160deg,#0E0D0C 0%,#1C1A18 60%,#2C2925 100%)' }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -5%,rgba(123,82,9,0.22),transparent)' }} />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full blur-[100px]" style={{ background: 'rgba(123,82,9,0.12)' }} />
      <div className="container-premium relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 block" style={{ background: 'linear-gradient(90deg,#7B5209,#C9A02A)' }} />
            {eyebrow}
          </span>
        </Reveal>
        {badge && (
          <Reveal delay={0.05}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold" style={{ borderColor: 'rgba(201,160,42,0.25)', color: '#DFC060', background: 'rgba(123,82,9,0.10)' }}>
              {badge}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-[1.75] text-anthracite-300">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function BackHome() {
  return (
    <Link to="/" className="btn-ghost-brand">
      ← Retour à l&apos;accueil
    </Link>
  );
}

export function StatCard({ value, label, sub }: { value: ReactNode; label: string; sub?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white p-6 text-center dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: 'linear-gradient(90deg,transparent,rgba(123,82,9,0.4),transparent)' }} />
      <p className="font-display text-3xl font-bold lg:text-4xl text-brand-gradient">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-premium text-anthracite-500 dark:text-anthracite-300">{label}</p>
      {sub && <p className="mt-1 text-xs text-anthracite-400 dark:text-anthracite-500">{sub}</p>}
    </div>
  );
}
