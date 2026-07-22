import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Phone, X, ArrowRight, Award } from 'lucide-react';
import { FaLinkedinIn } from "react-icons/fa6";
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { teamMembers, type TeamMember } from '../data/content';

export function Equipe() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('Tous');
  const [subFilter, setSubFilter] = useState('Tous');
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const departments = useMemo(() => ['Tous', ...Array.from(new Set(teamMembers.map((m) => m.department)))], []);
  const subsidiaries = useMemo(() => ['Tous', ...Array.from(new Set(teamMembers.map((m) => m.subsidiary)))], []);

  const filtered = useMemo(() => {
    return teamMembers.filter((m) => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()) || m.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchDept = deptFilter === 'Tous' || m.department === deptFilter;
      const matchSub = subFilter === 'Tous' || m.subsidiary === subFilter;
      return matchSearch && matchDept && matchSub;
    });
  }, [search, deptFilter, subFilter]);

  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        badge="Talents & Expertise"
        title={<>Les talents qui font <span className="text-brand-gradient">l&apos;excellence PHÉNIX</span></>}
        description="Ingénieurs, consultants, directeurs et techniciens : une équipe pluridisciplinaire, certifiée et engagée. Découvrez les femmes et les hommes qui portent notre ambition au quotidien."
      />

      {/* Stats */}
      <section className="section-pad-sm">
        <div className="container-premium grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Collaborateurs', value: '850+' },
            { label: 'Certifications', value: '50+' },
            { label: 'Pays', value: '8' },
            { label: "Femmes managers", value: '40%' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl border bg-white p-6 text-center shadow-premium dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                <p className="font-display text-3xl font-bold text-brand-gradient">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-premium text-anthracite-500 dark:text-anthracite-300">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-pad pt-0">
        <div className="container-premium">
          {/* Search + Filters */}
          <Reveal className="mb-10 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: '#7B5209' }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher par nom, fonction, compétence..."
                className="premium-input !pl-11"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-ultra text-anthracite-400">Département</p>
                <div className="flex flex-wrap gap-2">
                  {departments.map((d) => (
                    <button key={d} onClick={() => setDeptFilter(d)} className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${deptFilter === d ? 'text-white' : 'border border-black/10 text-anthracite-600 hover:border-brand-500 dark:border-white/15 dark:text-anthracite-300'}`} style={deptFilter === d ? { background: 'linear-gradient(135deg,#C9A02A,#7B5209)' } : {}}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-ultra text-anthracite-400">Filiale</p>
                <div className="flex flex-wrap gap-2">
                  {subsidiaries.map((s) => (
                    <button key={s} onClick={() => setSubFilter(s)} className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${subFilter === s ? 'text-white' : 'border border-black/10 text-anthracite-600 hover:border-brand-500 dark:border-white/15 dark:text-anthracite-300'}`} style={subFilter === s ? { background: 'linear-gradient(135deg,#C9A02A,#7B5209)' } : {}}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((m) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <button onClick={() => setSelected(m)} className="group block w-full text-left">
                    <div className="overflow-hidden rounded-2xl border bg-white shadow-premium transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium-lg dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4">
                          <p className="text-[10px] font-bold uppercase tracking-premium" style={{ color: '#DFC060' }}>{m.subsidiary}</p>
                          <h3 className="font-display text-base font-bold text-white">{m.name}</h3>
                          <p className="text-xs text-anthracite-200">{m.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <span className="text-xs text-anthracite-400">{m.department}</span>
                        <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#7B5209' }}>
                          <Award className="h-3.5 w-3.5" /> {m.certifications.length} cert.
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-anthracite-400">Aucun membre ne correspond à votre recherche.</p>
              <button onClick={() => { setSearch(''); setDeptFilter('Tous'); setSubFilter('Tous'); }} className="btn-ghost-brand mt-4">Réinitialiser</button>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-anthracite-950/80 p-4 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative grid max-h-[90vh] w-full max-w-3xl gap-0 overflow-hidden rounded-3xl bg-white shadow-float dark:bg-anthracite-800 md:grid-cols-[0.8fr_1.2fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/40">
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-64 overflow-hidden md:h-full">
                <img src={selected.photo} alt={selected.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/50 to-transparent" />
              </div>
              <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-ultra" style={{ color: '#7B5209' }}>{selected.subsidiary}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-anthracite-900 dark:text-white">{selected.name}</h2>
                <p className="text-sm text-anthracite-500 dark:text-anthracite-300">{selected.role}</p>
                <p className="mt-1 text-xs text-anthracite-400">{selected.department}</p>

                <div className="my-5 sep-brand" />

                <p className="text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">{selected.bio}</p>

                {/* Skills */}
                <h4 className="mt-6 text-[11px] font-bold uppercase tracking-ultra" style={{ color: '#7B5209' }}>Compétences</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.skills.map((s) => (
                    <span key={s} className="rounded-md px-2.5 py-1 text-xs font-medium" style={{ background: 'rgba(123,82,9,0.08)', color: '#7B5209' }}>{s}</span>
                  ))}
                </div>

                {/* Certifications */}
                <h4 className="mt-5 text-[11px] font-bold uppercase tracking-ultra" style={{ color: '#7B5209' }}>Certifications</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.certifications.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs" style={{ borderColor: 'rgba(123,82,9,0.2)', color: '#7B5209' }}>
                      <Award className="h-3 w-3" /> {c}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <a href={`mailto:${selected.email}`} className="flex items-center justify-center gap-1.5 rounded-xl border p-3 text-xs transition-colors hover:bg-brand-50 dark:hover:bg-white/5" style={{ borderColor: 'rgba(14,13,12,0.1)' }}>
                    <Mail className="h-4 w-4" style={{ color: '#7B5209' }} /> Email
                  </a>
                  <a href={`tel:${selected.phone}`} className="flex items-center justify-center gap-1.5 rounded-xl border p-3 text-xs transition-colors hover:bg-brand-50 dark:hover:bg-white/5" style={{ borderColor: 'rgba(14,13,12,0.1)' }}>
                    <Phone className="h-4 w-4" style={{ color: '#7B5209' }} /> Tel
                  </a>
                  <a href={selected.linkedin} className="flex items-center justify-center gap-1.5 rounded-xl border p-3 text-xs transition-colors hover:bg-brand-50 dark:hover:bg-white/5" style={{ borderColor: 'rgba(14,13,12,0.1)' }}>
                    <FaLinkedinIn className="h-4 w-4" style={{ color: '#7B5209' }} /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <CTABand
            title="Rejoignez nos équipes"
            description="Nous recrutons en continu les meilleurs talents. Consultez nos offres."
            primary={<Link to="/carrieres" className="btn-brand text-base">Voir les offres <ArrowRight className="h-4 w-4" /></Link>}
          />
        </div>
      </section>
    </>
  );
}
