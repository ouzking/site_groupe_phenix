import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Upload, Send, GraduationCap, Plane, Users } from 'lucide-react';
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { useToast } from '../components/ui/Toast';

const jobs = [
  { title: 'Ingénieur IA / ML Senior', type: 'CDI', location: 'Dakar', team: 'Phenix Consulting', tags: ['Python', 'PyTorch', 'MLOps'] },
  { title: 'Chef de Projet BTP', type: 'CDI', location: 'Dakar', team: 'Phenix Corporation', tags: ['Génie civil', 'MS Project', '10 ans exp.'] },
  { title: 'Responsable Logistique & Transit', type: 'CDI', location: 'Dakar', team: 'Phenix International', tags: ['Douane', 'Transit', 'Fret'] },
  { title: 'Développeur Full-Stack', type: 'CDI', location: 'Dakar', team: 'Phenix Consulting', tags: ['React', 'Node', 'PostgreSQL'] },
  { title: 'Stage — Data Analyst (6 mois)', type: 'Stage', location: 'Dakar', team: 'Phenix Consulting', tags: ['SQL', 'PowerBI', 'Bac+4'] },
  { title: 'Alternance — Ingénieur Cloud', type: 'Alternance', location: 'Dakar', team: 'Phenix Consulting', tags: ['AWS', 'Terraform', 'Bac+5'] },
  { title: 'Technicien Sécurité Électronique', type: 'CDI', location: 'Thiès', team: 'Phenix International', tags: ['Vidéosurveillance', 'Câblage', 'BTS'] },
  { title: 'Architecte Logiciel', type: 'CDI', location: 'Dakar', team: 'Phenix Consulting', tags: ['Architecture', 'Microservices', '8 ans exp.'] },
];

const typeColor: Record<string, string> = {
  CDI: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Stage: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Alternance: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
};

export function Carrieres() {
  const [filter, setFilter] = useState('Tous');
  const { notify } = useToast();
  const types = ['Tous', 'CDI', 'Stage', 'Alternance'];
  const filtered = filter === 'Tous' ? jobs : jobs.filter((j) => j.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title={<>Rejoignez l&apos;aventure <span className="text-brand-gradient">PHÉNIX</span></>}
        description="Nous recrutons les talents qui veulent construire l&apos;avenir de l&apos;Afrique. Plus de 850 collaborateurs partagent déjà cette ambition."
      />

      {/* Why join */}
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {[
              { icon: GraduationCap, title: 'Formation continue', desc: 'Académie interne, certifications financées, parcours de carrière personnalisés.' },
              { icon: Plane, title: 'Mobilité internationale', desc: 'Opportunités dans 8 pays, expatriation, échanges entre filiales.' },
              { icon: Users, title: "Culture d'excellence", desc: "Projets ambitieux, encadrement senior, esprit d'équipe fort." },
            ].map((b) => (
              <StaggerItem key={b.title}>
                <div className="group h-full rounded-3xl border border-black/5 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-anthracite-900 dark:text-white">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Job listings */}
      <section className="section-pad pt-0">
        <div className="container-premium">
          <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-anthracite-900 dark:text-white">Postes ouverts</h2>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button key={t} onClick={() => setFilter(t)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${filter === t ? 'bg-brand-gradient text-anthracite-900' : 'border border-black/10 text-anthracite-600 hover:border-brand-500 dark:border-white/15 dark:text-anthracite-300'}`}>{t}</button>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((j, i) => (
                <motion.div key={j.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: i * 0.04 }}>
                  <div className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 transition-all hover:border-brand-500/40 hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60 sm:flex-row sm:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-bold text-anthracite-900 dark:text-white">{j.title}</h3>
                        <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${typeColor[j.type]}`}>{j.type}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-anthracite-500 dark:text-anthracite-300">
                        <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-brand-500" /> {j.team}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-500" /> {j.location}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {j.tags.map((t) => <span key={t} className="rounded-md bg-anthracite-50 px-2.5 py-1 text-xs text-anthracite-600 dark:bg-anthracite-900/40 dark:text-anthracite-300">{t}</span>)}
                      </div>
                    </div>
                    <button onClick={() => notify({ title: 'Candidature initiée', description: `Postulation pour : ${j.title}` })} className="btn-outline-brand shrink-0 !py-2.5 text-xs">
                      Postuler <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CV submission */}
      <section className="section-pad bg-anthracite-50 dark:bg-anthracite-900/40">
        <div className="container-premium max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold text-anthracite-900 dark:text-white">Dépôt spontané de candidature</h2>
            <p className="mt-3 text-center text-sm text-anthracite-500 dark:text-anthracite-300">Aucun poste ne vous correspond ? Envoyez-nous votre CV, nous gardons votre profil en mémoire.</p>
          </Reveal>
          <form
            onSubmit={(e) => { e.preventDefault(); notify({ title: 'CV reçu', description: 'Merci, nous reviendrons vers vous si une opportunité se présente.' }); (e.currentTarget as HTMLFormElement).reset(); }}
            className="mt-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nom complet" className="premium-input" />
              <input required type="email" placeholder="Email" className="premium-input" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <select required className="premium-input"><option value="">Domaine d&apos;expertise</option><option>Digital & IA</option><option>BTP & Génie civil</option><option>Commerce & Logistique</option><option>Énergie</option><option>Sécurité</option></select>
              <input placeholder="Années d&apos;expérience" className="premium-input" />
            </div>
            <textarea rows={4} placeholder="Présentez-vous en quelques lignes..." className="premium-input" />
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-brand-500/30 bg-brand-50/50 px-6 py-8 text-sm text-anthracite-500 transition-colors hover:border-brand-500 dark:bg-brand-500/5 dark:text-anthracite-300">
              <Upload className="h-5 w-5 text-brand-500" />
              Déposez votre CV (PDF, 5 Mo max)
              <input type="file" className="hidden" accept=".pdf" />
            </label>
            <button type="submit" className="btn-brand w-full">Envoyer ma candidature <Send className="h-4 w-4" /></button>
          </form>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <CTABand title="Vous avez un talent ? Nous avons un terrain de jeu." description="Le GROUPE PHÉNIX recrute en continu les meilleurs profils." primary={<Link to="/contact" className="btn-brand text-base">Contact RH <ArrowRight className="h-4 w-4" /></Link>} />
        </div>
      </section>
    </>
  );
}
