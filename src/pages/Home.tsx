import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, Sparkles, ChevronRight, Quote, TrendingUp, Award, MapPin,
  Brain, Cloud, Cpu, Zap, ShieldCheck, Rocket, Phone, Mail, Building2,
} from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { SectionHeading, CTABand } from '../components/ui/Section';
import { subsidiaries, services, keyStats, testimonials, partners, whyChooseUs, companyInfo } from '../data/content';
import phenixLogo from "../assets/images/phenix.jpeg";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden" style={{ background: 'linear-gradient(160deg,#0E0D0C 0%,#1C1A18 60%,#2C2925 100%)' }}>
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -5%,rgba(123,82,9,0.22),transparent)' }} />
          <div className="absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(123,82,9,0.15)' }} />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full blur-[100px]" style={{ background: 'rgba(123,82,9,0.10)' }} />
        </motion.div>

        {/* Floating logo */}
        <motion.div style={{ scale: markScale }} className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block">
          <img src="/images/phenix.jpeg" alt="" className="h-[560px] w-[560px] rounded-3xl object-cover" />
        </motion.div>

        <motion.div
  style={{ opacity: heroOpacity }}
  className="container-premium relative z-10 pt-28"
>
  <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

    {/* ================= LEFT ================= */}
    <div>
      <Reveal>
        <span
          className="eyebrow"
          style={{ color: "#DFC060" }}
        >
          <Sparkles className="h-4 w-4" />
          Groupe sénégalais multisectoriel · Depuis 2020
        </span>
      </Reveal>

      <Reveal delay={0.12}>
        <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          Bâtir l&apos;excellence,
          <br />
          <span className="text-brand-gradient animate-brand-text">
            innover sans relâche
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.24}>
        <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-anthracite-300 sm:text-xl">
          Conseil, transformation numérique, BTP, commerce
          international, énergie, agriculture, sécurité
          électronique et innovation.
          Le GROUPE PHÉNIX accompagne les entreprises,
          institutions et États dans leurs projets
          stratégiques de développement.
        </p>
      </Reveal>

      <Reveal delay={0.36}>
        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            to="/groupe"
            className="btn-brand group"
          >
            Découvrir le Groupe
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="btn-outline-brand group"
            style={{
              color: "#DFC060",
              borderColor: "rgba(223,192,96,.4)"
            }}
          >
            Nous contacter
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </Reveal>
    </div>

    {/* ================= RIGHT ================= */}

    <Reveal delay={0.45}>

      <div className="glass-card rounded-3xl p-8 backdrop-blur-xl">

        <div className="mb-8 flex items-center gap-4">

          <img
            src={phenixLogo}
            className="h-16 w-16 rounded-2xl h-20 w-20 object-contain"
            alt=""
          />

          <div>

            <p className="text-lg font-bold text-white">
              GROUPE PHÉNIX
            </p>

            <p className="text-sm text-anthracite-300">
              Idées innovantes en action
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          {keyStats.slice(0,4).map((s) => (

            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >

              <p className="text-3xl font-bold text-brand-gradient">

                <Counter
                  to={s.value}
                  suffix={s.suffix}
                />

              </p>

              <p className="mt-2 text-xs uppercase tracking-widest text-anthracite-300">

                {s.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </Reveal>

  </div>
</motion.div>

        {/* Scroll cue */}
        <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/25 p-1.5">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-2 w-1 rounded-full" style={{ background: '#C9A02A' }} />
          </div>
        </motion.div>
      </section>

      {/* ===== KEY STATS ===== */}
      

      {/* ===== INTRO ===== */}
      <section className="section-pad">
        <div className="container-premium grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Qui sommes-nous"
              title={<>Un groupe, <span className="text-brand-gradient">trois pôles</span>, une ambition panafricaine</>}
              description="Fondé en 2010 par Maodo THIAM, le GROUPE PHÉNIX réunit sous une même bannière l&apos;expertise en conseil et technologies, la maîtrise des flux internationaux et l&apos;ingénierie de la construction. Une intégration unique au service du développement économique."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-xl bg-ivory-100 p-4 dark:bg-anthracite-800/40">
                  <Building2 className="h-5 w-5" style={{ color: '#7B5209' }} />
                  <div>
                    <p className="text-sm font-bold text-anthracite-900 dark:text-white">3 Filiales</p>
                    <p className="text-xs text-anthracite-400">complémentaires</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-ivory-100 p-4 dark:bg-anthracite-800/40">
                  <MapPin className="h-5 w-5" style={{ color: '#7B5209' }} />
                  <div>
                    <p className="text-sm font-bold text-anthracite-900 dark:text-white">8 Pays</p>
                    <p className="text-xs text-anthracite-400">présence africaine</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/groupe" className="btn-ghost-brand group mt-8 !px-0">
                En savoir plus sur le Groupe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} x={40}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'rgba(123,82,9,0.12)' }} />
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Équipe GROUPE PHÉNIX"
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-float"
              />
              <div className="glass-card absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl p-5 shadow-premium-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'linear-gradient(135deg,#C9A02A,#7B5209)' }}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-anthracite-900 dark:text-white">15+</p>
                  <p className="text-xs text-anthracite-500 dark:text-anthracite-300">ans d&apos;excellence</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-pad bg-ivory-50 dark:bg-anthracite-900/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title={<>Le GROUPE PHÉNIX, <span className="text-brand-gradient">votre partenaire de confiance</span></>}
            description="Six raisons concrètes qui font de nous le partenaire privilégié des entreprises, institutions et collectivités au Sénégal et en Afrique de l&apos;Ouest."
          />
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <StaggerItem key={w.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border bg-white p-7 card-hover dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: 'rgba(123,82,9,0.10)', opacity: 0.1 }} />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white" style={{ background: 'rgba(123,82,9,0.08)', color: '#7B5209' }}>
                    <w.icon className="h-6 w-6 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-anthracite-900 dark:text-white">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{w.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== FILIALES ===== */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Nos filiales"
            title={<>Trois pôles d&apos;excellence, <span className="text-brand-gradient">une synergie unique</span></>}
            description="Chaque filiale est une championne de son domaine. Ensemble, elles offrent une couverture intégrée des besoins de nos clients."
          />
          <StaggerGroup className="mt-16 grid gap-8 md:grid-cols-3">
            {subsidiaries.map((sub) => (
              <StaggerItem key={sub.slug}>
                <Link to={`/filiales/${sub.slug}`} className="group block">
                  <div className="relative h-full overflow-hidden rounded-3xl border bg-white p-8 card-hover dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25" style={{ background: sub.gradient }} />
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: sub.gradient }}>
                      <sub.icon className="h-7 w-7" />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-premium" style={{ color: sub.color }}>{sub.tagline}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-anthracite-900 dark:text-white">{sub.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{sub.description}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t pt-5" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                      {sub.stats.slice(0, 2).map((st) => (
                        <div key={st.label}>
                          <p className="font-display text-xl font-bold text-brand-gradient"><Counter to={st.value} suffix={st.suffix} /></p>
                          <p className="text-[11px] text-anthracite-400">{st.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: sub.color }}>
                      Explorer la filiale
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section-pad bg-ivory-50 dark:bg-anthracite-900/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Nos services"
            title={<>Une expertise <span className="text-brand-gradient">transversale</span>, de bout en bout</>}
            description="Du conseil stratégique au déploiement terrain, nous couvrons l&apos;ensemble de la chaîne de valeur de nos clients."
          />
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border bg-white p-7 transition-all duration-400 hover:shadow-premium-lg dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: 'linear-gradient(90deg,#C9A02A,#7B5209)' }} />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white" style={{ background: 'rgba(123,82,9,0.08)', color: '#7B5209' }}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-anthracite-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{s.short}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#7B5209' }}>
                    En savoir plus <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-12 text-center">
            <Link to="/services" className="btn-outline-brand">Voir tous les services <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== INNOVATION BAND ===== */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(160deg,#0E0D0C 0%,#1C1A18 60%,#2C2925 100%)' }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(123,82,9,0.15)' }} />
        <div className="container-premium relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow" style={{ color: '#DFC060' }}><Rocket className="h-4 w-4" /> Innovation</span>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Le futur se construit <span className="text-brand-gradient">maintenant</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-[1.75] text-anthracite-300">
                Intelligence artificielle, cloud, IoT, robotique, smart city. Nous investissons massivement dans les technologies de demain pour garder une longueur d&apos;avance à nos clients.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[Brain, Cloud, Cpu, Zap, ShieldCheck].map((Icon, i) => (
                  <div key={i} className="glass flex h-12 w-12 items-center justify-center rounded-xl" style={{ color: '#DFC060' }}>
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/innovation" className="btn-brand mt-9">Explorer notre vision <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <Reveal delay={0.2} x={40}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Centre de données et innovation"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-float"
              />
              <div className="glass-card absolute -right-5 top-8 flex items-center gap-3 rounded-2xl p-4">
                <TrendingUp className="h-8 w-8" style={{ color: '#C9A02A' }} />
                <div>
                  <p className="font-display text-lg font-bold text-white">+38%</p>
                  <p className="text-xs text-anthracite-300">croissance R&D / an</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Témoignages"
            title={<>La confiance de <span className="text-brand-gradient">grands donneurs d&apos;ordre</span></>}
            description="Banques, ministères, groupes industriels : ils nous confient leurs projets les plus stratégiques."
          />
          <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative h-full rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                  <Quote className="h-9 w-9" style={{ color: 'rgba(123,82,9,0.25)' }} />
                  <p className="mt-4 text-lg leading-relaxed text-anthracite-700 dark:text-anthracite-200">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-4 border-t pt-5" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold text-white" style={{ background: 'linear-gradient(135deg,#C9A02A,#7B5209)' }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-anthracite-900 dark:text-white">{t.name}</p>
                      <p className="text-sm text-anthracite-500 dark:text-anthracite-300">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ===== INSTITUTIONAL INFO ===== */}
      <section className="section-pad bg-ivory-50 dark:bg-anthracite-900/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Le Groupe en bref"
            title={<>Une institution <span className="text-brand-gradient">ancrée au Sénégal</span></>}
            description="Dirigé par Maodo THIAM, le GROUPE PHÉNIX est un acteur économique majeur, partenaire des grandes institutions sénégalaises et internationales."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {/* PDG card */}
            <Reveal>
              <Link to="/direction" className="group block h-full overflow-hidden rounded-3xl border bg-white p-8 card-hover dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-brand">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" alt={companyInfo.pdg} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>Président Directeur Général</p>
                    <p className="mt-1 font-display text-lg font-bold text-anthracite-900 dark:text-white">{companyInfo.pdg}</p>
                    <p className="text-sm text-anthracite-400">Fondateur & Visionnaire</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">
                  Entrepreneur sénégalais reconnu, Maodo THIAM a bâti en 15 ans un groupe multisectoriel de référence, présent dans 8 pays.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#7B5209' }}>
                  Découvrir la direction <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>

            {/* Contact card */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border bg-white p-8 dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'rgba(123,82,9,0.08)' }}>
                  <MapPin className="h-6 w-6" style={{ color: '#7B5209' }} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-anthracite-900 dark:text-white">Siège social</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="text-anthracite-500 dark:text-anthracite-300">{companyInfo.address}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" style={{ color: '#7B5209' }} />
                    <a href={`tel:${companyInfo.phone}`} className="text-anthracite-600 dark:text-anthracite-300 hover:text-brand-600">{companyInfo.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" style={{ color: '#7B5209' }} />
                    <a href={`mailto:${companyInfo.email}`} className="text-anthracite-600 dark:text-anthracite-300 hover:text-brand-600">{companyInfo.email}</a>
                  </div>
                </div>
                <Link to="/contact" className="btn-outline-brand mt-6 w-full text-center justify-center">Nous contacter <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Reveal>

            {/* Stats card */}
            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(160deg,#0E0D0C 0%,#1C1A18 50%,#2C2925 100%)' }}>
                <div className="absolute inset-0 bg-grid opacity-20 rounded-3xl" />
                <div className="relative">
                  <h3 className="font-display text-lg font-bold">Impact en chiffres</h3>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-display text-3xl font-bold text-brand-gradient"><Counter to={850} suffix="+" /></p>
                      <p className="text-xs text-anthracite-300">Collaborateurs</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-brand-gradient"><Counter to={320} suffix="+" /></p>
                      <p className="text-xs text-anthracite-300">Projets livrés</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-brand-gradient"><Counter to={8} /></p>
                      <p className="text-xs text-anthracite-300">Pays</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-brand-gradient"><Counter to={45} suffix="+" /></p>
                      <p className="text-xs text-anthracite-300">Partenaires</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="py-20">
        <div className="container-premium">
          <Reveal className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-ultra text-anthracite-400">Ils nous font confiance</p>
          </Reveal>
          <div className="relative overflow-hidden mask-fade-r">
            <div className="flex animate-marquee gap-16 whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="font-display text-2xl font-bold text-anthracite-300 dark:text-anthracite-600">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-pad">
        <div className="container-premium">
          <CTABand
            title="Un projet, une ambition ?"
            description="Parlons-en. Nos experts vous répondent sous 24h avec une approche sur mesure."
            primary={<Link to="/devis" className="btn-brand text-base">Demander un devis <ArrowRight className="h-4 w-4" /></Link>}
            secondary={<Link to="/contact" className="btn-outline-brand text-base" style={{ color: '#DFC060', borderColor: 'rgba(223,192,96,0.4)' }}>Nous contacter</Link>}
          />
        </div>
      </section>
    </>
  );
}
