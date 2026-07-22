import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Cpu, Zap, Network, Building2, Sparkles } from 'lucide-react';
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';

const innovations = [
  { icon: Brain, title: 'Intelligence Artificielle', desc: "Modèles prédictifs, vision par ordinateur, NLP, IA générative. Nous industrialisons l'IA pour des décisions plus rapides et plus justes.", stats: [['20+', 'modèles en production'], ['6', 'data scientists']] },
  { icon: Cloud, title: 'Cloud & DevSecOps', desc: "Architectures cloud-native, conteneurisation, CI/CD sécurisé. Vos applications scalent à la demande, en toute sérénité.", stats: [['99.9%', 'disponibilité'], ['15+', 'migrations cloud']] },
  { icon: Cpu, title: 'IoT & Edge Computing', desc: "Capteurs, passerelles, edge analytics. Nous connectons le monde physique au numérique pour des opérations plus intelligentes.", stats: [['50k+', 'devices gérés'], ['12', 'projets IoT']] },
  { icon: Zap, title: 'Automatisation & RPA', desc: "Automatisation des processus métiers, bots intelligents, orchestration. Libérez vos équipes des tâches répétitives.", stats: [['40%', 'gain de temps'], ['200+', 'processus auto']] },
  { icon: Building2, title: 'Smart City', desc: "Éclairage intelligent, mobilité, gestion des flux, sécurité urbaine. Nous digitalisons les territoires.", stats: [['3', 'villes pilotes'], ['1.2M', 'habitants touchés']] },
  { icon: Network, title: 'Transformation Numérique', desc: "Schéma directeur digital, conduite du changement, platforms unifiées. Une transformation qui prend, durablement.", stats: [['45+', 'organisations'], ['92%', 'réussite transformation']] },
];

export function Innovation() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title={<>Le futur se construit <span className="text-brand-gradient">au présent</span></>}
        description="Nous investissons massivement dans la R&D pour offrir à nos clients une longueur d&apos;avance. IA, cloud, IoT, smart city : nous transformons les technologies émergentes en valeur business."
      />

      <section className="section-pad">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[{ v: 38, s: '%', l: 'Croissance R&D / an' }, { v: 25, s: '+', l: 'Brevets & IP' }, { v: 60, s: '+', l: 'Chercheurs & experts' }, { v: 15, s: 'M$', l: 'Investissement R&D' }].map((x, i) => (
              <Reveal key={x.l} delay={i * 0.08}>
                <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <p className="font-display text-3xl font-bold text-brand-gradient lg:text-4xl"><Counter to={x.v} suffix={x.s} /></p>
                  <p className="mt-2 text-xs uppercase tracking-premium text-anthracite-500 dark:text-anthracite-300">{x.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {innovations.map((inn) => (
              <StaggerItem key={inn.title}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-premium transition-all hover:-translate-y-1 hover:shadow-float dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <inn.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-anthracite-900 dark:text-white">{inn.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{inn.desc}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-black/5 pt-5 dark:border-white/10">
                    {inn.stats.map(([v, l]) => (
                      <div key={l}>
                        <p className="font-display text-lg font-bold text-brand-gradient">{v}</p>
                        <p className="text-[11px] text-anthracite-400">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-anthracite-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/15 blur-[120px]" />
        <div className="container-premium relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Laboratoire d'innovation" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-float" />
          </Reveal>
          <div>
            <span className="eyebrow text-brand-400"><Sparkles className="h-4 w-4" /> Phenix Lab</span>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">Notre laboratoire d&apos;innovation</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg text-anthracite-300">
                Phenix Lab est notre cellule R&D dédiée à l&apos;exploration des technologies émergentes. Une équipe pluridisciplinaire qui prototype, teste et industrialise les solutions de demain.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-6 space-y-3">
                {['Prototypage rapide (PoC en 4 semaines)', 'Veille technologique permanente', 'Partenariats académiques', 'Publications & contributions open source'].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-anthracite-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <CTABand
            title="Innover avec nous"
            description="Une idée disruptive ? Un défi technique ? Notre lab vous accompagne."
            primary={<Link to="/contact" className="btn-brand text-base">Parler à notre lab <ArrowRight className="h-4 w-4" /></Link>}
          />
        </div>
      </section>
    </>
  );
}
