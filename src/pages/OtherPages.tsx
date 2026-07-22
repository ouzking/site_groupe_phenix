import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, HelpCircle, Download, FileText, Shield, Leaf, TrendingUp } from 'lucide-react';
import { PageHero } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { partners, sectors } from '../data/content';

/* ===== ACTUALITÉS ===== */
const articles = [
  { title: 'Le GROUPE PHÉNIX signe un contrat de 18M€ pour la Tour Almadies', cat: 'Business', date: '12 Jan 2025', excerpt: 'Un nouveau chantier emblématique qui renforce notre position de leader du BTP sénégalais.', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: "Phenix Lab déploie son premier modèle d'IA générative en production", cat: 'Innovation', date: '05 Jan 2025', excerpt: 'Notre cellule R&D franchit une nouvelle étape avec un assistant IA métier pour nos clients.', img: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Inauguration du nouveau Data Center Tier III à Dakar', cat: 'Infrastructure', date: '20 Déc 2024', excerpt: 'Une infrastructure de classe mondiale pour la souveraineté numérique africaine.', img: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Partenariat stratégique avec un leader mondial du cloud', cat: 'Partenariat', date: '10 Déc 2024', excerpt: 'Une alliance qui accélère notre offre cloud-native pour les entreprises ouest-africaines.', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Le Groupe recrute 120 talents en 2025', cat: 'Ressources Humaines', date: '02 Déc 2024', excerpt: 'Une campagne de recrutement ambitieuse pour accompagner notre croissance.', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Certification ISO 27001 renouvelée pour 3 ans', cat: 'Qualité', date: '25 Nov 2024', excerpt: "Notre engagement sécurité de l'information une nouvelle fois reconnu au niveau international.", img: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export function Actualites() {
  return (
    <>
      <PageHero eyebrow="Actualités" title={<>Toute l&apos;actualité du <span className="text-brand-gradient">Groupe</span></>} description="Contrats, innovations, événements, recrutements : suivez la vie d&apos;un groupe en constante croissance." />
      <section className="section-pad">
        <div className="container-premium">
          <Reveal>
            <Link to="/actualites" className="group relative block overflow-hidden rounded-3xl shadow-float">
              <img src={articles[0].img} alt={articles[0].title} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 via-anthracite-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8 lg:p-12">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-anthracite-900"><Tag className="h-3 w-3" /> {articles[0].cat}</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-white lg:text-3xl">{articles[0].title}</h2>
                <p className="mt-3 text-anthracite-200">{articles[0].excerpt}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-anthracite-300"><Calendar className="h-4 w-4" /> {articles[0].date}</p>
              </div>
            </Link>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((a) => (
              <StaggerItem key={a.title}>
                <Link to="/actualites" className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-premium transition-all hover:shadow-float dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-anthracite-400">
                      <span className="font-bold uppercase tracking-premium text-brand-600 dark:text-brand-400">{a.cat}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {a.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-anthracite-900 dark:text-white">{a.title}</h3>
                    <p className="mt-2 text-sm text-anthracite-500 dark:text-anthracite-300">{a.excerpt}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ===== PARTENAIRES ===== */
export function Partenaires() {
  return (
    <>
      <PageHero eyebrow="Partenaires" title={<>Des alliances <span className="text-brand-gradient">stratégiques</span>, mondiales</>} description="Nous nous associons aux meilleurs pour offrir à nos clients des solutions de classe mondiale." />
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <StaggerItem key={p}>
                <div className="group flex h-32 items-center justify-center rounded-2xl border border-black/5 bg-white transition-all hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <span className="font-display text-xl font-bold text-anthracite-400 transition-colors group-hover:text-brand-gradient">{p}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ===== SECTEURS ===== */
export function Secteurs() {
  return (
    <>
      <PageHero eyebrow="Nos secteurs" title={<>16 domaines, <span className="text-brand-gradient">une excellence</span></>} description="Une couverture multisectorielle unique, du numérique au BTP, de la logistique à l&apos;énergie." />
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sectors.filter((s) => 'icon' in s).map((s) => (
              <StaggerItem key={s.label}>
                <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-anthracite-900 dark:text-white">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ===== FAQ ===== */
const generalFaqs = [
  { q: 'Quels types de clients accompagnez-vous ?', a: 'Banques, assurances, ministères, grandes entreprises, PME, ONG et institutions internationales. Nous nous adaptons à chaque taille et secteur.' },
  { q: 'Intervenez-vous hors du Sénégal ?', a: "Oui, nous sommes présents dans 8 pays africains et accompagnons des projets à l'international via notre filiale PHÉNIX INTERNATIONAL." },
  { q: 'Comment se déroule une demande de devis ?', a: 'Vous soumettez votre besoin via notre formulaire. Un expert vous recontacte sous 24h pour préciser le périmètre, puis vous recevez une proposition sous 72h.' },
  { q: 'Quelles garanties offrez-vous ?', a: "Tous nos projets sont contractualisés avec des SLA, des garanties de délai et de qualité. Nous sommes certifiés ISO 9001 et ISO 27001." },
  { q: 'Proposez-vous du financement ?', a: "Pour certains projets d'infrastructure, nous structurons des montages financiers avec nos partenaires bancaires et institutionnels." },
  { q: 'Vos équipes sont-elles certifiées ?', a: "Nos ingénieurs et consultants détiennent des certifications Microsoft, AWS, Cisco, Oracle, PMP et bien d'autres." },
];

export function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Vos questions, <span className="text-brand-gradient">nos réponses</span></>} description="Tout ce que vous devez savoir avant de collaborer avec le GROUPE PHÉNIX." />
      <section className="section-pad">
        <div className="container-premium max-w-3xl space-y-3">
          {generalFaqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-anthracite-800/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-anthracite-900 dark:text-white">
                  {f.q}
                  <HelpCircle className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

/* ===== TÉLÉCHARGEMENTS ===== */
const downloads = [
  { name: 'Plaquette institutionnelle 2025', size: '4.2 Mo', type: 'PDF' },
  { name: 'Catalogue services PHÉNIX CONSULTING', size: '8.1 Mo', type: 'PDF' },
  { name: 'Catalogue PHÉNIX INTERNATIONAL', size: '6.5 Mo', type: 'PDF' },
  { name: 'Brochure PHÉNIX CORPORATION', size: '12.3 Mo', type: 'PDF' },
  { name: 'Rapport RSE 2024', size: '3.8 Mo', type: 'PDF' },
  { name: 'Politique qualité ISO 9001', size: '1.2 Mo', type: 'PDF' },
  { name: 'Charte éthique & conformité', size: '0.9 Mo', type: 'PDF' },
  { name: 'Dossier de presse', size: '15.6 Mo', type: 'ZIP' },
];

export function Telechargements() {
  return (
    <>
      <PageHero eyebrow="Téléchargements" title={<>Nos documents <span className="text-brand-gradient">officiels</span></>} description="Plaquettes, catalogues, rapports et chartes : accédez à toute notre documentation." />
      <section className="section-pad">
        <div className="container-premium max-w-4xl">
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {downloads.map((d) => (
              <StaggerItem key={d.name}>
                <div className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5 transition-all hover:border-brand-500/40 hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-anthracite-900 dark:text-white">{d.name}</p>
                      <p className="text-xs text-anthracite-400">{d.type} · {d.size}</p>
                    </div>
                  </div>
                  <button className="rounded-full p-2.5 text-brand-600 transition-colors hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"><Download className="h-5 w-5" /></button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ===== SUPPORT ===== */
export function Support() {
  return (
    <>
      <PageHero eyebrow="Support" title={<>Une assistance <span className="text-brand-gradient">toujours disponible</span></>} description="Besoin d&apos;aide ? Notre équipe support vous accompagne avec des SLA garantis." />
      <section className="section-pad">
        <div className="container-premium max-w-2xl">
          <Reveal>
            <form className="space-y-5 rounded-3xl border border-black/5 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Nom" className="premium-input" />
                <input required type="email" placeholder="Email" className="premium-input" />
              </div>
              <select required className="premium-input">
                <option value="">Catégorie de support</option>
                <option>Support technique</option><option>Question facture</option><option>Incident production</option><option>Demande d&apos;évolution</option>
              </select>
              <select required className="premium-input">
                <option value="">Urgence</option><option>Critique</option><option>Majeure</option><option>Mineure</option>
              </select>
              <textarea required rows={5} placeholder="Décrivez votre demande..." className="premium-input" />
              <button type="submit" className="btn-brand w-full">Ouvrir un ticket <ArrowRight className="h-4 w-4" /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ===== RSE ===== */
export function RSE() {
  return (
    <>
      <PageHero eyebrow="RSE" title={<>Notre responsabilité, <span className="text-brand-gradient">notre engagement</span></>} description="Au-delà de nos activités, nous portons une responsabilité : celle d&apos;un acteur économique engagé pour le développement durable." />
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Leaf, title: 'Environnement', desc: "Bâtiments à faible empreinte, énergies renouvelables, réduction de notre empreinte carbone de 30% d'ici 2027." },
              { icon: TrendingUp, title: 'Social', desc: '850 collaborateurs, 40% de femmes en management, formation continue et académie interne.' },
              { icon: Shield, title: 'Gouvernance', desc: 'Éthique, transparence, conformité OHADA et lutte contre la corruption. Charte éthique appliquée par tous.' },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <div className="group h-full rounded-3xl border border-black/5 bg-white p-8 shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-anthracite-900 dark:bg-brand-500/10 dark:text-brand-400">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-anthracite-900 dark:text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-anthracite-500 dark:text-anthracite-300">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

/* ===== Simple pages ===== */
export function Qualite() {
  return (
    <>
      <PageHero eyebrow="Politique qualité" title={<>L&apos;excellence, <span className="text-brand-gradient">certifiée</span></>} description="Notre démarche qualité s&apos;articule autour de certifications internationales et d&apos;une amélioration continue." />
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['ISO 9001:2015 — Management de la qualité', "ISO 27001 — Sécurité de l'information", 'OHADA — Conformité juridique', 'Conformité RGPD/CNIL — Protection des données'].map((c) => (
              <StaggerItem key={c}>
                <div className="h-full rounded-2xl border border-brand-500/20 bg-brand-50/50 p-6 text-center dark:bg-brand-500/5">
                  <Shield className="mx-auto h-10 w-10 text-brand-600 dark:text-brand-400" />
                  <p className="mt-4 text-sm font-semibold text-anthracite-900 dark:text-white">{c}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

export function Investisseurs() {
  return (
    <>
      <PageHero eyebrow="Investisseurs" title={<>Investir dans <span className="text-brand-gradient">l&apos;excellence</span></>} description="Le GROUPE PHÉNIX est une success-story sénégalaise en croissance continue. Découvrez notre trajectoire et nos perspectives." />
      <section className="section-pad">
        <div className="container-premium grid gap-6 sm:grid-cols-3">
          {[
            { label: 'Chiffre d&apos;affaires 2024', value: '45M €', sub: '+22% vs 2023' },
            { label: 'EBITDA', value: '8.1M €', sub: 'Marge 18%' },
            { label: 'Carnet de commandes', value: '120M €', sub: 'Visibilité 3 ans' },
          ].map((k) => (
            <Reveal key={k.label}>
              <div className="rounded-3xl border border-black/5 bg-white p-8 text-center shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                <p className="text-xs uppercase tracking-premium text-anthracite-400">{k.label}</p>
                <p className="mt-3 font-display text-4xl font-bold text-brand-gradient">{k.value}</p>
                <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{k.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Solutions() {
  const solutions = ['ERP sur mesure', 'CRM & Sales', 'Plateformes e-commerce', 'Systèmes de ticketing', 'Portails gouvernementaux', 'Applications bancaires', 'Supervision IoT', 'Identity & Access Management', 'Sauvegarde & DRP', 'Vidéosurveillance IA', 'Gestion de flotte', 'Facility management digital'];
  return (
    <>
      <PageHero eyebrow="Solutions" title={<>Des solutions <span className="text-brand-gradient">clés en main</span></>} description="Plus de 40 solutions industrialisées, déployables rapidement et personnalisables à vos besoins." />
      <section className="section-pad">
        <div className="container-premium">
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {solutions.map((s) => (
              <StaggerItem key={s}>
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 transition-all hover:border-brand-500/40 hover:shadow-premium dark:border-white/10 dark:bg-anthracite-800/60">
                  <div className="h-2 w-2 rounded-full bg-brand-gradient" />
                  <span className="text-sm font-semibold text-anthracite-900 dark:text-white">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}

export function Legal({ title, body }: { title: string; body: string[] }) {
  return (
    <>
      <PageHero eyebrow="Informations légales" title={title} description="Conformité et transparence : nos engagements juridiques." />
      <section className="section-pad">
        <div className="container-premium max-w-3xl space-y-6">
          {body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-anthracite-800/60">
                <p className="text-sm leading-relaxed text-anthracite-600 dark:text-anthracite-300">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function MentionsLegales() {
  return <Legal title="Mentions légales" body={[
    'GROUPE PHÉNIX est un groupe sénégalais immatriculé au Registre du Commerce et du Crédit Mobilier (RCCM) sous le numéro SN-DKR-2010-B-12345. Siège social : Almadies, Dakar, Sénégal.',
    "Directeur de la publication : Président Directeur Général du GROUPE PHÉNIX. Hébergement : infrastructure certifiée ISO 27001 hébergée au Sénégal.",
    "L'ensemble des contenus présents sur ce site (textes, logos, images) est la propriété exclusive du GROUPE PHÉNIX, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
  ]} />;
}

export function Confidentialite() {
  return <Legal title="Politique de confidentialité" body={[
    "Le GROUPE PHÉNIX s'engage à protéger vos données personnelles conformément à la loi sénégalaise n°2008-12 et au RGPD européen.",
    "Nous collectons vos données uniquement dans le cadre de votre demande (contact, devis, candidature). Elles ne sont jamais cédées à des tiers à des fins commerciales.",
    "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer : dpo@groupephenix.sn.",
  ]} />;
}
