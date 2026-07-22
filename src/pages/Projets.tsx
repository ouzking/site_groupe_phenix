import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, DollarSign, CheckCircle2, Clock, Plane } from 'lucide-react';
import { PageHero, CTABand } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';

type Project = { title: string; category: string; status: 'Terminé' | 'En cours' | 'Planifié'; location: string; budget: string; duration: string; image: string };

const projects: Project[] = [
  { title: 'Digitalisation Banque Nationale', category: 'Conseil & Digital', status: 'Terminé', location: 'Dakar', budget: '2.5M €', duration: '14 mois', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Tour Almadies Business', category: 'BTP', status: 'En cours', location: 'Dakar', budget: '18M €', duration: '24 mois', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Système de Vidéosurveillance Urbaine', category: 'Sécurité', status: 'Terminé', location: 'Thiès', budget: '1.2M €', duration: '8 mois', image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Plateforme IA Logistique', category: 'IA & Software', status: 'En cours', location: 'Abidjan', budget: '900k €', duration: '10 mois', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Centrale Solaire 20MW', category: 'Énergie', status: 'Planifié', location: 'Touba', budget: '25M €', duration: '18 mois', image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Aménagement Périmètre Agricole', category: 'Agriculture', status: 'Terminé', location: 'Saint-Louis', budget: '3.4M €', duration: '12 mois', image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Data Center Tier III', category: 'Infrastructure', status: 'En cours', location: 'Dakar', budget: '6.5M €', duration: '16 mois', image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Refonte ERP Ministère', category: 'Conseil & Digital', status: 'Planifié', location: 'Dakar', budget: '1.8M €', duration: '20 mois', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const categories = ['Tous', ...Array.from(new Set(projects.map((p) => p.category)))];
const statusColor: Record<Project['status'], string> = {
  'Terminé': 'text-emerald-500 bg-emerald-500/10',
  'En cours': 'text-brand-600 bg-brand-500/10 dark:text-brand-400',
  'Planifié': 'text-blue-500 bg-blue-500/10',
};

export function Projets() {
  const [filter, setFilter] = useState('Tous');
  const filtered = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Réalisations & Projets"
        title={<>Des projets qui <span className="text-brand-gradient">transforment</span> le territoire</>}
        description="Plus de 320 projets livrés, du système d&apos;information bancaire à la centrale solaire. Découvrez nos chantiers en cours et à venir."
      />

      <section className="section-pad">
        <div className="container-premium">
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === c ? 'bg-brand-gradient text-anthracite-900 shadow-brand' : 'border border-black/10 text-anthracite-600 hover:border-brand-500 dark:border-white/15 dark:text-anthracite-300'}`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-premium transition-all hover:shadow-float dark:border-white/10 dark:bg-anthracite-800/60">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/60 to-transparent" />
                      <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusColor[p.status]}`}>
                        {p.status === 'Terminé' ? <CheckCircle2 className="h-3.5 w-3.5" /> : p.status === 'En cours' ? <Clock className="h-3.5 w-3.5" /> : <Plane className="h-3.5 w-3.5" />}
                        {p.status}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-premium text-brand-600 dark:text-brand-400">{p.category}</p>
                      <h3 className="mt-2 font-display text-lg font-bold text-anthracite-900 dark:text-white">{p.title}</h3>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                        <div className="flex items-center gap-1.5 text-anthracite-500 dark:text-anthracite-300"><MapPin className="h-3.5 w-3.5 text-brand-500" /> {p.location}</div>
                        <div className="flex items-center gap-1.5 text-anthracite-500 dark:text-anthracite-300"><DollarSign className="h-3.5 w-3.5 text-brand-500" /> {p.budget}</div>
                        <div className="flex items-center gap-1.5 text-anthracite-500 dark:text-anthracite-300"><Calendar className="h-3.5 w-3.5 text-brand-500" /> {p.duration}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-premium">
          <CTABand
            title="Votre projet mérite le meilleur"
            description="Confiez-nous votre prochain défi. Nous avons prouvé que nous pouvons le relever."
            primary={<Link to="/devis" className="btn-brand text-base">Démarrer un projet <ArrowRight className="h-4 w-4" /></Link>}
          />
        </div>
      </section>
    </>
  );
}

export function Realisations() {
  const [filter, setFilter] = useState('Tous');
  const galleryCats = ['Tous', 'BTP', 'Digital', 'Énergie', 'Sécurité', 'Logistique'];
  const gallery = [
    { cat: 'BTP', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Tour Almadies' },
    { cat: 'Digital', image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Data Center Tier III' },
    { cat: 'Énergie', image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Centrale Solaire' },
    { cat: 'Sécurité', image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Vidéosurveillance Urbaine' },
    { cat: 'Logistique', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Hub Logistique' },
    { cat: 'BTP', image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Pont sur la Saloum' },
    { cat: 'Digital', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'ERP Ministériel' },
    { cat: 'Énergie', image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Réseau Électrique' },
    { cat: 'Sécurité', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800', title: "Contrôle d'Accès" },
  ];
  const filtered = filter === 'Tous' ? gallery : gallery.filter((g) => g.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Galerie & Réalisations"
        title={<>L&apos;excellence en <span className="text-brand-gradient">images</span></>}
        description="Un panorama de nos chantiers et livrables, témoins de notre exigence et de notre savoir-faire."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {galleryCats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === c ? 'bg-brand-gradient text-anthracite-900 shadow-brand' : 'border border-black/10 text-anthracite-600 hover:border-brand-500 dark:border-white/15 dark:text-anthracite-300'}`}>{c}</button>
            ))}
          </Reveal>
          <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((g) => (
                <motion.div key={g.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-5 break-inside-avoid">
                  <div className="group relative overflow-hidden rounded-2xl shadow-premium">
                    <img src={g.image} alt={g.title} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-anthracite-950/80 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-bold uppercase tracking-premium text-brand-400">{g.cat}</span>
                      <p className="font-display text-lg font-bold text-white">{g.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
