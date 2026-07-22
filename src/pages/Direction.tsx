import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Award, Target, Eye, Compass, Mail, Phone } from 'lucide-react';
import { PageHero, CTABand, SectionHeading } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { teamMembers } from '../data/content';

export function Direction() {
  const pdg = teamMembers[0];
  const leadership = teamMembers.slice(1, 8);

  return (
    <>
      <PageHero
        eyebrow="Direction & Gouvernance"
        badge="Leadership"
        title={<>Une vision portée par <span className="text-brand-gradient">un leadership d&apos;exception</span></>}
        description="Le GROUPE PHÉNIX est dirigé par des femmes et des hommes d&apos;expérience, animés par l&apos;ambition de bâtir un champion national et panafricain."
      />

      {/* PDG Profile */}
      <section className="section-pad">
        <div className="container-premium grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'rgba(123,82,9,0.15)' }} />
              <div className="relative overflow-hidden rounded-3xl shadow-float">
                <img src={pdg.photo} alt={pdg.name} className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite-950/80 to-transparent p-6">
                  <p className="font-display text-xl font-bold text-white">{pdg.name}</p>
                  <p className="text-sm text-anthracite-300">{pdg.role}</p>
                </div>
              </div>
              <div className="glass-card absolute -right-4 top-8 rounded-2xl p-4 shadow-premium">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" style={{ color: '#C9A02A' }} />
                  <div>
                    <p className="text-xs font-bold text-anthracite-900 dark:text-white">Fondateur</p>
                    <p className="text-[10px] text-anthracite-400">Depuis 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Président Directeur Général"
              title={<>Maodo <span className="text-brand-gradient">THIAM</span></>}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-[1.8] text-anthracite-600 dark:text-anthracite-300">
                Entrepreneur sénégalais visionnaire, Maodo THIAM fonde le GROUPE PHÉNIX en 2010 avec une conviction : l&apos;Afrique de l&apos;Ouest mérite des champions nationaux capables de rivaliser avec les meilleurs groupes internationaux.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-base leading-[1.8] text-anthracite-600 dark:text-anthracite-300">
                En 15 ans, il a bâti un groupe multisectoriel de référence, passant de 3 à plus de 850 collaborateurs, présent dans 8 pays, avec trois filiales complémentaires. Son ambition : faire du GROUPE PHÉNIX un acteur incontournable du développement économique africain.
              </p>
            </Reveal>

            {/* Quote */}
            <Reveal delay={0.3}>
              <div className="mt-8 rounded-2xl border-l-4 bg-ivory-100 p-6 dark:bg-anthracite-800/40" style={{ borderColor: '#C9A02A' }}>
                <Quote className="h-7 w-7" style={{ color: 'rgba(123,82,9,0.3)' }} />
                <p className="mt-3 text-lg italic leading-relaxed text-anthracite-700 dark:text-anthracite-200">
                  &ldquo;Nous ne construisons pas seulement une entreprise. Nous bâtissons une institution qui servira le Sénégal et l&apos;Afrique pour les décennies à venir. L&apos;excellence n&apos;est pas une option, c&apos;est notre ADN.&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold" style={{ color: '#7B5209' }}>— Maodo THIAM, PDG</p>
              </div>
            </Reveal>

            {/* Quick info */}
            <Reveal delay={0.35}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-premium dark:bg-anthracite-800/60">
                  <Mail className="h-5 w-5" style={{ color: '#7B5209' }} />
                  <a href={`mailto:${pdg.email}`} className="text-sm text-anthracite-600 dark:text-anthracite-300 hover:text-brand-600">{pdg.email}</a>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-premium dark:bg-anthracite-800/60">
                  <Phone className="h-5 w-5" style={{ color: '#7B5209' }} />
                  <a href={`tel:${pdg.phone}`} className="text-sm text-anthracite-600 dark:text-anthracite-300 hover:text-brand-600">{pdg.phone}</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Parcours */}
      <section className="section-pad bg-ivory-50 dark:bg-anthracite-900/30">
        <div className="container-premium">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: 'Sa vision', text: "Faire du GROUPE PHÉNIX le leader panafricain du conseil, de la technologie et de la construction, et un partenaire de confiance pour les grandes institutions du continent." },
              { icon: Target, title: 'Sa mission', text: "Accompagner la transformation du Sénégal et de l&apos;Afrique en bâtissant des infrastructures et des solutions technologiques de classe mondiale." },
              { icon: Compass, title: 'Son ambition', text: "Inspirer la prochaine génération d&apos;entrepreneurs africains et prouver que l&apos;excellence n&apos;a pas de frontières." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: 'linear-gradient(135deg,#C9A02A,#7B5209)' }}>
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-anthracite-900 dark:text-white">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading eyebrow="Parcours" title={<>Une trajectoire de <span className="text-brand-gradient">bâtisseur</span></>} />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { year: '2005', title: 'Premières expériences', desc: "Formation en management et premières missions entrepreneuriales au Sénégal." },
              { year: '2010', title: 'Fondation du Groupe', desc: "Création du GROUPE PHÉNIX à Dakar. Vision multisectorielle dès le départ." },
              { year: '2016', title: 'Expansion internationale', desc: "Ouverture de PHÉNIX INTERNATIONAL. Réseau de partenaires dans 60+ pays." },
              { year: '2025', title: 'Leadership panafricain', desc: "850+ collaborateurs, 8 pays, 3 filiales. Ambition de leader régional confirmée." },
            ].map((s, i) => (
              <Reveal key={s.year} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg,#C9A02A,#7B5209)' }}>
                    {i + 1}
                  </div>
                  <p className="mt-4 font-display text-2xl font-bold text-brand-gradient">{s.year}</p>
                  <h3 className="mt-1 font-display text-base font-bold text-anthracite-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-anthracite-500 dark:text-anthracite-300">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-pad bg-ivory-50 dark:bg-anthracite-900/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Comité de direction"
            title={<>L&apos;équipe de <span className="text-brand-gradient">direction</span></>}
            description="Des professionnels d&apos;expérience au service d&apos;une ambition commune."
          />
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m) => (
              <StaggerItem key={m.id}>
                <div className="group h-full overflow-hidden rounded-2xl border bg-white shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium-lg dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>{m.subsidiary}</p>
                    <h3 className="mt-1 font-display text-base font-bold text-anthracite-900 dark:text-white">{m.name}</h3>
                    <p className="text-sm text-anthracite-500 dark:text-anthracite-300">{m.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-12 text-center">
            <Link to="/equipe" className="btn-outline-brand">Voir toute l&apos;équipe <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <CTABand
            title="Échangeons sur votre projet"
            description="Notre direction et nos experts sont à votre écoute."
            primary={<Link to="/contact" className="btn-brand text-base">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></Link>}
          />
        </div>
      </section>
    </>
  );
}
