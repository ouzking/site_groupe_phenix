import { SectionHeading, PageHero, CTABand } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Compass } from 'lucide-react';
import { values, timeline, orgChart, keyStats } from '../data/content';
import groupe from "../assets/images/team/groupe2.png";
import groupe2 from "../assets/images/team/groupe3.png";
import groupe3 from "../assets/images/team/groupe4.png";
import groupe4 from "../assets/images/team/groupe5.png";
import groupe5 from "../assets/images/team/groupe7.png";



export function Groupe() {
  return (
    <>
      <PageHero
        eyebrow="Le Groupe"
        title={<>Une vision, <span className="text-brand-gradient">une trajectoire</span>, un ADN d&apos;excellence</>}
        description="Depuis 2020, le GROUPE PHÉNIX écrit une histoire singulière : celle d&apos;un champion sénégalais devenu référence multisectorielle, porté par l&apos;audace et la rigueur."
      />

      {/* Pitch */}
      <section className="section-pad">
        <div className="container-premium grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Notre histoire" title={<>Né à Dakar, <span className="text-brand-gradient">conçu pour grandir</span></>} />
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                Le GROUPE PHÉNIX a vu le jour en 2020, fondé par des entrepreneurs sénégalais animés par une conviction : l&apos;Afrique de l&apos;Ouest mérite des champions nationaux capables de rivaliser avec les meilleurs groupes internationaux.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-base leading-relaxed text-anthracite-600 dark:text-anthracite-300">
                De trois collaborateurs au départ, nous sommes aujourd&apos;hui plus d'une centaine de collaborateurs, répartis sur trois filiales complémentaires, présents dans 8 pays. Notre croissance s&apos;est toujours accompagnée d&apos;une exigence : la qualité sans compromis.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {keyStats.slice(0, 4).map((s) => (
                  <div key={s.label} className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-anthracite-800/60">
                    <p className="font-display text-2xl font-bold text-brand-gradient"><Counter to={s.value} suffix={s.suffix} /></p>
                    <p className="mt-1 text-xs uppercase tracking-premium text-anthracite-500 dark:text-anthracite-300">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} x={40}>
            <img src={groupe} />
          </Reveal>
        </div>
      </section>

      {/* ===== GALERIE CORPORATE ===== */}

<section className="section-pad bg-anthracite-50 dark:bg-anthracite-900/40">
  <div className="container-premium">

    <SectionHeading
      eyebrow="Notre équipe"
      title={
        <>
          Des femmes et des hommes au service de
          <span className="text-brand-gradient"> l'excellence</span>
        </>
      }
      description="Le GROUPE PHÉNIX s'appuie sur une équipe dynamique, multidisciplinaire et passionnée qui œuvre chaque jour pour offrir des solutions innovantes et créer de la valeur durable."
    />

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[groupe2, groupe3, groupe4, groupe5].map((image, index) => (

        <Reveal key={index} delay={index * 0.1}>

          <div className="group overflow-hidden rounded-3xl shadow-premium">

            <div className="relative h-[340px] overflow-hidden">

              <img
                src={image}
                alt={`Équipe Groupe PHÉNIX ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="font-display text-xl font-bold text-white">
                  GROUPE PHÉNIX
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Excellence • Innovation • Leadership
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      ))}

    </div>

  </div>
</section>

      {/* Vision / Mission / Valeurs */}
      <section id="vision" className="section-pad bg-anthracite-50 dark:bg-anthracite-900/40">
        <div className="container-premium">
          <SectionHeading eyebrow="Cap stratégique" title={<>Vision, mission & <span className="text-brand-gradient">ambition</span></>} />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: 'Vision', text: "Être le groupe sénégalais de référence, leader panafricain du conseil, de la technologie et de la construction, et un partenaire de confiance pour les grandes institutions." },
              { icon: Target, title: 'Mission', text: "Accompagner nos clients dans leurs transformations les plus ambitieuses, en combinant expertise locale et standards internationaux, pour créer une valeur durable." },
              { icon: Compass, title: 'Ambition', text: "Devenir un acteur incontournable du développement économique africain, en bâtissant des infrastructures et des solutions qui structurent le futur du continent." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gradient opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-anthracite-900">
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

      {/* Valeurs */}
      <section id="valeurs" className="section-pad">
        <div className="container-premium">
          <SectionHeading eyebrow="Nos valeurs" title={<>L&apos;ADN d&apos;un <span className="text-brand-gradient">champion national</span></>} description="Six valeurs cardinales guident chacune de nos décisions et de nos actions." />
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 transition-all hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-anthracite-900 dark:text-white">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{v.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section id="histoire" className="section-pad bg-anthracite-950">
        <div className="container-premium">
          <SectionHeading light eyebrow="Trajectoire" title={<>6 ans de <span className="text-brand-gradient">croissance maîtrisée</span></>} description="Chaque étape a consolidé notre positionnement et élargi notre champ d&apos;action." />
          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-500/0 via-brand-500/40 to-brand-500/0" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05} y={40}>
                  <div className={`relative flex items-center gap-8 ${i % 2 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient ring-4 ring-brand-500/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-anthracite-900" />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className={`glass-card rounded-2xl p-6 ${i % 2 ? 'mr-8' : 'ml-8'}`}>
                        <p className="font-display text-3xl font-bold text-brand-gradient">{t.year}</p>
                        <h3 className="mt-2 font-display text-lg font-bold text-white">{t.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-anthracite-300">{t.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section id="organigramme" className="section-pad">
        <div className="container-premium">
          <SectionHeading eyebrow="Gouvernance" title={<>Une structure <span className="text-brand-gradient">claire et scalable</span></>} description="Une organisation pyramidale qui combine direction stratégique et agilité opérationnelle." />
          <div className="mt-16 space-y-4">
            {orgChart.map((node, i) => (
              <Reveal key={node.role} delay={i * 0.05}>
                <div className="flex items-center gap-4" style={{ marginLeft: `${node.level * 32}px` }}>
                  <div className={`flex items-center gap-4 rounded-2xl border px-6 py-4 transition-all hover:shadow-premium ${node.level === 0 ? 'border-brand-500/40 bg-brand-gradient text-anthracite-900' : 'border-black/5 bg-white dark:border-white/10 dark:bg-anthracite-800/60'}`}>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${node.level === 0 ? 'bg-anthracite-900 text-brand-400' : 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <p className={`font-display text-sm font-bold ${node.level === 0 ? 'text-anthracite-900' : 'text-anthracite-900 dark:text-white'}`}>{node.role}</p>
                      <p className={`text-xs ${node.level === 0 ? 'text-anthracite-800' : 'text-anthracite-500 dark:text-anthracite-300'}`}>{node.name}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-premium">
          <CTABand
            title="Découvrez nos filiales"
            description="Trois pôles d&apos;excellence, une promesse commune : votre réussite."
            primary={<Link to="/filiales" className="btn-brand text-base">Explorer les filiales <ArrowRight className="h-4 w-4" /></Link>}
            secondary={<Link to="/services" className="btn-outline-brand !text-brand-400">Nos services</Link>}
          />
        </div>
      </section>
    </>
  );
}
