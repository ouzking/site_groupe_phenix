import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { subsidiaries } from '../data/content';

export function Filiales() {
  return (
    <>
      <PageHero
        eyebrow="Nos filiales"
        title={<>Trois pôles, <span className="text-brand-gradient">une synergie</span> inégalée</>}
        description="Chaque filiale est leader de son domaine. Ensemble, elles forment un groupe intégré capable de répondre aux besoins les plus complexes."
      />
      <section className="section-pad">
        <div className="container-premium space-y-8">
          {subsidiaries.map((sub, idx) => (
            <Reveal key={sub.slug} delay={idx * 0.05}>
              <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-premium transition-all hover:shadow-float dark:border-white/10 dark:bg-anthracite-800/60 lg:p-12">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-10 blur-3xl" style={{ background: sub.gradient }} />
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div className={idx % 2 ? 'lg:order-2' : ''}>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-anthracite-900" style={{ background: sub.gradient }}>
                      <sub.icon className="h-8 w-8" />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-premium" style={{ color: sub.color }}>{sub.tagline}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-anthracite-900 dark:text-white">{sub.name}</h2>
                    <p className="mt-4 text-base leading-relaxed text-anthracite-500 dark:text-anthracite-300">{sub.description}</p>
                    <div className="mt-8 grid grid-cols-4 gap-4">
                      {sub.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-display text-2xl font-bold text-brand-gradient"><Counter to={s.value} suffix={s.suffix} /></p>
                          <p className="mt-1 text-[11px] uppercase tracking-premium text-anthracite-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/filiales/${sub.slug}`} className="btn-brand mt-8">Découvrir la filiale <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                  <div className={idx % 2 ? 'lg:order-1' : ''}>
                    <div className="grid grid-cols-2 gap-3">
                      {sub.domains.slice(0, 6).map((d) => (
                        <div key={d.label} className="rounded-xl border border-black/5 bg-anthracite-50/50 p-4 dark:border-white/10 dark:bg-anthracite-900/40">
                          <d.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                          <p className="mt-2 text-sm font-semibold text-anthracite-900 dark:text-white">{d.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="container-premium">
          <CTABand
            title="Collaborons sur votre prochain projet"
            description="Nos filiales peuvent intervenir séparément ou conjointement pour une solution intégrée."
            primary={<Link to="/devis" className="btn-brand text-base">Demander un devis <ArrowRight className="h-4 w-4" /></Link>}
          />
        </div>
      </section>
    </>
  );
}

export function FilialeDetail() {
  const { slug } = useParams();
  const sub = subsidiaries.find((s) => s.slug === slug);
  if (!sub) {
    return (
      <div className="container-premium py-40 text-center">
        <h1 className="text-2xl font-bold">Filiale introuvable</h1>
        <Link to="/filiales" className="btn-ghost mt-4">← Retour aux filiales</Link>
      </div>
    );
  }
  return (
    <>
      <section className="relative overflow-hidden bg-anthracite-950 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full blur-[100px]" style={{ background: sub.gradient, opacity: 0.15 }} />
        <div className="container-premium relative">
          <Link to="/filiales" className="inline-flex items-center gap-1.5 text-sm text-anthracite-300 hover:text-brand-400">
            <ArrowLeft className="h-4 w-4" /> Toutes les filiales
          </Link>
          <Reveal delay={0.1}>
            <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-3xl text-anthracite-900" style={{ background: sub.gradient }}>
              <sub.icon className="h-10 w-10" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xs font-bold uppercase tracking-premium" style={{ color: sub.color }}>{sub.tagline}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="mt-2 text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{sub.name}</h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl text-lg text-anthracite-300">{sub.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {sub.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <p className="font-display text-3xl font-bold text-brand-gradient lg:text-4xl"><Counter to={s.value} suffix={s.suffix} /></p>
                  <p className="mt-2 text-xs uppercase tracking-premium text-anthracite-500 dark:text-anthracite-300">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <h2 className="font-display text-3xl font-bold text-anthracite-900 dark:text-white">Nos domaines d&apos;expertise</h2>
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sub.domains.map((d) => (
              <StaggerItem key={d.label}>
                <div className="group h-full rounded-2xl border border-black/5 bg-white p-7 transition-all hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-anthracite-900 dark:text-white">{d.label}</h3>
                  <p className="mt-2 text-sm text-anthracite-500 dark:text-anthracite-300">{d.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <div className="rounded-3xl bg-anthracite-50 p-8 dark:bg-anthracite-900/40 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-anthracite-900 dark:text-white">Pourquoi nous choisir</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Expertise certifiée', 'Équipe senior', 'Approche sur mesure', 'Support continu'].map((b) => (
                <div key={b} className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-anthracite-800/60">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-anthracite-900">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-anthracite-900 dark:text-white">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <CTABand
            title={`Travaillons avec ${sub.name}`}
            description="Nos experts vous accompagnent de l&apos;idéation à la réalisation."
            primary={<Link to="/devis" className="btn-brand text-base">Demander un devis <ArrowRight className="h-4 w-4" /></Link>}
            secondary={<Link to="/contact" className="btn-outline-brand !text-brand-400">Nous contacter</Link>}
          />
        </div>
      </section>
    </>
  );
}
