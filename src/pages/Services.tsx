import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Plus, Minus } from 'lucide-react';
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { services } from '../data/content';

const faqs = [
  { q: "Comment démarre une collaboration avec le GROUPE PHÉNIX ?", a: "Tout commence par un échange exploratoire pour comprendre vos enjeux. Nous proposons ensuite une approche sur mesure, un planning et un devis détaillé sous 72h." },
  { q: "Travaillez-vous avec les administrations publiques ?", a: "Oui. Nous accompagnons régulièrement ministères, agences et collectivités dans leurs projets de transformation et d'infrastructure, avec une parfaite maîtrise des procédures." },
  { q: "Quels sont vos délais moyens de livraison ?", a: "Cela dépend du périmètre. Une application métier : 8 à 16 semaines. Un chantier BTP : défini au devis. Nous nous engageons contractuellement sur les délais." },
  { q: "Proposez-vous de la maintenance après livraison ?", a: "Absolument. Nos contrats de maintenance et de support couvrent la TMA, l'infogérance et la facility management, avec des SLA garantis." },
  { q: "Vos solutions sont-elles conformes aux normes ?", a: "Toutes nos prestations respectent les normes internationales (ISO 9001, ISO 27001) et locales (OHADA, réglementation sénégalaise)." },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={<>Une expertise <span className="text-brand-gradient">intégrée</span>, de bout en bout</>}
        description="Du conseil stratégique au déploiement terrain, nous couvrons toute la chaîne de valeur. Chaque service suit un processus rigoureux et éprouvé."
      />

      {/* Services grid */}
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, i) => (
              <StaggerItem key={srv.title}>
                <button
                  onClick={() => { setActive(i); document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`group h-full w-full rounded-2xl border p-7 text-left transition-all ${active === i ? 'border-brand-500 bg-brand-50 shadow-brand dark:bg-brand-500/10' : 'border-black/5 bg-white hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60'}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${active === i ? 'bg-brand-gradient text-anthracite-900' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400'}`}>
                    <srv.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-anthracite-900 dark:text-white">{srv.title}</h3>
                  <p className="mt-2 text-sm text-anthracite-500 dark:text-anthracite-300">{srv.short}</p>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Active service detail */}
      <section id="detail" className="section-pad pt-0">
        <div className="container-premium">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-10 rounded-3xl border border-black/5 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-anthracite-800/60 lg:grid-cols-2 lg:p-12"
            >
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-anthracite-900">
                  <s.icon className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-anthracite-900 dark:text-white">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-anthracite-500 dark:text-anthracite-300">{s.description}</p>
                <h3 className="mt-8 text-xs font-bold uppercase tracking-premium text-brand-600 dark:text-brand-400">Avantages</h3>
                <ul className="mt-4 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-anthracite-900">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-anthracite-700 dark:text-anthracite-200">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-premium text-brand-600 dark:text-brand-400">Notre processus</h3>
                <div className="mt-5 space-y-4">
                  {s.process.map((step, i) => (
                    <Reveal key={step} delay={i * 0.1}>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-500/30 font-display text-sm font-bold text-brand-600 dark:text-brand-400">
                          {i + 1}
                        </div>
                        <div className="flex-1 rounded-xl bg-anthracite-50 px-5 py-3 dark:bg-anthracite-900/40">
                          <p className="text-sm font-semibold text-anthracite-900 dark:text-white">{step}</p>
                        </div>
                      </div>
                      {i < s.process.length - 1 && <div className="ml-5 h-4 w-px bg-brand-500/20" />}
                    </Reveal>
                  ))}
                </div>
                <Link to="/devis" className="btn-brand mt-8 w-full">
                  Demander un devis pour ce service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-anthracite-50 dark:bg-anthracite-900/40">
        <div className="container-premium max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold text-anthracite-900 dark:text-white">Questions fréquentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-anthracite-800/60">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-anthracite-900 dark:text-white">{f.q}</span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <CTABand
            title="Prêt à démarrer votre projet ?"
            description="Parlez-nous de votre ambition. Nous vous répondons sous 24h."
            primary={<Link to="/devis" className="btn-brand text-base">Demander un devis <ArrowRight className="h-4 w-4" /></Link>}
            secondary={<Link to="/contact" className="btn-outline-brand !text-brand-400">Nous contacter</Link>}
          />
        </div>
      </section>
    </>
  );
}
