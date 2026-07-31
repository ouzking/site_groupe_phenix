import {
  Cpu, Globe2, Building2, Brain, Cloud, ShieldCheck, Truck, Zap, Sprout, HardHat,
  Code2, GraduationCap, Package, Wrench, Camera, Network, Server, Smartphone,
  MapPin, Award, Leaf,
  Gauge, Rocket, Layers,
  type LucideIcon,
} from 'lucide-react';

/* ============================================================
   OFFICIAL GROUP INFORMATION
   ============================================================ */
export const companyInfo = {
  name: 'GROUPE PHÉNIX',
  legalName: 'GROUPE PHÉNIX SARL',
  tagline: 'Excellence · Innovation · Performance',
  foundedYear: 2020,
  address: 'Dakar, Keur Massar, Jaxaay, Parcelles Unité 10, Villa n°101',
  city: 'Dakar',
  country: 'Sénégal',
  phone: '+221 78 452 19 12',
  email: 'blscamaf@gmail.com',
  pdg: 'Maodo THIAM',
  pdgRole: 'Président Directeur Général',
  hours: 'Lundi – Vendredi : 8h – 18h · Samedi : 9h – 13h',
  social: {
    linkedin: '#',
    facebook: '#',
    twitter: '#',
    youtube: '#',
    whatsapp: '+221784521912',
  },
  certifications: ['ISO 9001:2015', 'ISO 27001', 'OHADA', 'CNIL conforme'],
};

/* ============================================================
   KEY STATISTICS
   ============================================================ */
export type Stat = { value: number; suffix: string; label: string; sub?: string };
export const keyStats: Stat[] = [
  { value: 6, suffix: '+', label: "Années d'expérience", sub: 'Depuis 2020' },
  { value: 50, suffix: '+', label: 'Projets réalisés', sub: 'Tous secteurs' },
  { value: 15, suffix: '+', label: 'Entreprises accompagnées', sub: 'Banques, États, PME' },
  { value: 98, suffix: '%', label: 'Clients satisfaits', sub: 'NPS > 70' },
  { value: 10, suffix: '+', label: 'Partenaires internationaux', sub: 'Technologies & finance' },
  { value: 850, suffix: '+', label: 'Collaborateurs', sub: '8 pays' },
];

/* ============================================================
   "WHY CHOOSE US" — Page d'accueil
   ============================================================ */
export const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Layers, title: '16+ domaines d\'expertise', description: "Une couverture multisectorielle unique : conseil, numérique, BTP, énergie, commerce international, sécurité électronique et plus encore." },
  { icon: Building2, title: 'Trois filiales complémentaires', description: "PHÉNIX CONSULTING, PHÉNIX INTERNATIONAL et PHÉNIX CORPORATION opèrent en synergie pour offrir une réponse intégrée." },
  { icon: MapPin, title: 'Présence sur tout le territoire', description: "De Dakar à Saint-Louis, de Thiès à Touba, nous intervenons dans toutes les régions du Sénégal et au-delà." },
  { icon: Award, title: 'Équipe qualifiée et certifiée', description: "Ingénieurs, consultants et techniciens certifiés Microsoft, AWS, Cisco, Oracle, PMP et bien d'autres." },
  { icon: Rocket, title: 'Solutions clé en main', description: "De l'étude à la mise en service, nous livrons des solutions prêtes à l'emploi avec maintenance et support garantis." },
  { icon: Leaf, title: 'Engagement qualité & durabilité', description: "Certifications ISO 9001 et ISO 27001, démarche RSE structurée, développement durable au cœur de nos projets." },
];

/* ============================================================
   VALUES
   ============================================================ */
export const values = [
  { icon: ShieldCheck, title: 'Intégrité', description: "Une éthique sans compromis dans chacune de nos missions. La confiance de nos clients se gagne chaque jour." },
  { icon: Brain, title: 'Innovation', description: "L'avance technologique au service de nos clients. Nous investissons en R&D pour rester à la pointe." },
  { icon: Gauge, title: 'Excellence', description: "La recherche de la perfection dans chaque détail. La qualité n'est pas une option, c'est notre standard." },
  { icon: Globe2, title: 'Vision', description: "Une ambition panafricaine et internationale. Le Sénégal comme tremplin vers le continent." },
  { icon: Sprout, title: 'Durabilité', description: "Des solutions responsables pour les générations futures. Croissance rime avec impact positif." },
  { icon: GraduationCap, title: 'Engagement', description: "La réussite de nos clients comme unique boussole. Notre succès se mesure au leur." },
];

/* ============================================================
   TIMELINE
   ============================================================ */
export const timeline = [
  { year: '2020', title: 'Genèse à Dakar', description: "Création du GROUPE PHÉNIX par Maodo THIAM, avec une ambition : bâtir un champion sénégalais multisectoriel de référence." },
  { year: '2021', title: 'Expansion digitale', description: "Lancement de PHÉNIX CONSULTING. Premiers grands contrats de transformation numérique avec les banques et administrations." },
  { year: '2022', title: 'Ouverture internationale', description: "Création de PHÉNIX INTERNATIONAL. Premiers partenariats commerciaux avec l'Asie, l'Europe et le Moyen-Orient." },
  { year: '2021', title: 'Bâtisseur d\'infrastructures', description: "Naissance de PHÉNIX CORPORATION. Premiers chantiers BTP et génie civil d'envergure à Dakar et en région." },
  { year: '2022', title: 'Cap IA & Cloud', description: "Investissement massif en Intelligence Artificielle, Cloud et cybersécurité. Lancement de Phenix Lab, notre cellule R&D." },
  { year: '2025', title: 'Leadership panafricain', description: "Plus de 850 collaborateurs, présence dans 8 pays, ambition confirmée de devenir leader régional multisectoriel." },
];

/* ============================================================
   SUBSIDIARIES
   ============================================================ */
export type Subsidiary = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  gradient: string;
  icon: LucideIcon;
  description: string;
  mission: string;
  vision: string;
  history: string;
  domains: { icon: LucideIcon; label: string; description: string }[];
  stats: Stat[];
  process: { title: string; desc: string }[];
  partners: string[];
};

export const subsidiaries: Subsidiary[] = [
  {
    slug: 'phenix-consulting',
    name: 'PHÉNIX CONSULTING',
    shortName: 'Consulting',
    tagline: 'Transformation Numérique & Conseil',
    color: '#7B5209',
    gradient: 'linear-gradient(135deg,#C9A02A,#7B5209)',
    icon: Cpu,
    description: "Notre pôle d'expertise au service de la transformation digitale des entreprises et administrations. Du conseil stratégique au déploiement de solutions technologiques avancées, nous accompagnons nos clients vers l'excellence opérationnelle. Nous accompagnons les écoles et les entités à obtenir une salle informatique",
    mission: "Accélérer la transformation numérique des organisations sénégalaises et africaines en leur apportant l'expertise, les technologies et l'accompagnement nécessaires pour rivaliser à l'échelle mondiale.",
    vision: "Être le partenaire technologique de référence en Afrique de l'Ouest, reconnu pour la qualité de nos livrables et notre capacité à innover.",
    history: "Fondée en 2021, PHÉNIX CONSULTING est née de la conviction que les organisations africaines méritent un accompagnement technologique de niveau international. En une décennie, nous sommes passés de 5 à plus de 120 experts.",
    domains: [
      { icon: Brain, label: 'Intelligence Artificielle', description: 'Modèles prédictifs, automatisation, IA générative, vision par ordinateur' },
      { icon: Code2, label: 'Développement Logiciel', description: 'ERP, CRM, applications Web & Mobiles sur mesure' },
      { icon: Cloud, label: 'Cloud & Infrastructure', description: 'Architecture cloud, migration, administration système' },
      { icon: ShieldCheck, label: 'Cybersécurité', description: "Audit, pentest, conformité, sécurisation des systèmes" },
      { icon: Network, label: 'Salles Informatiques', description: 'Data centers, câblage, refroidissement, onduleurs' },
      { icon: Server, label: 'Maintenance Informatique', description: "Support, infogérance, sauvegarde, continuité" },
      { icon: Smartphone, label: 'Applications Mobiles', description: 'iOS, Android, PWA, applications métier' },
      { icon: GraduationCap, label: 'Formation', description: 'Montée en compétence, certifications, académie interne' },
    ],
    stats: [
      { value: 50, suffix: '+', label: 'Projets livrés', sub: 'Depuis 2013' },
      { value: 120, suffix: '+', label: 'Clients accompagnés', sub: 'Banques & États' },
      { value: 30, suffix: '+', label: 'Experts technologiques', sub: 'Certifiés' },
      { value: 98, suffix: '%', label: 'Taux de satisfaction', sub: 'NPS > 70' },
    ],
    process: [
      { title: 'Audit & cadrage', desc: 'Analyse de vos besoins, cartographie des enjeux, définition du périmètre.' },
      { title: 'Conception', desc: 'Architecture cible, UX/UI, choix technologiques, planning détaillé.' },
      { title: 'Réalisation', desc: 'Développement agile, sprints, tests continus, démonstrations régulières.' },
      { title: 'Déploiement & support', desc: 'Mise en production, formation, maintenance, amélioration continue.' },
    ],
    partners: ['Microsoft', 'AWS', 'Oracle', 'Cisco', 'IBM', 'Dell'],
  },
  {
    slug: 'phenix-international',
    name: 'PHÉNIX INTERNATIONAL',
    shortName: 'International',
    tagline: 'Commerce · Logistique · Import / Export',
    color: '#A07818',
    gradient: 'linear-gradient(135deg,#A07818,#573B08)',
    icon: Globe2,
    description: "Notre bras armé sur les marchés internationaux. Import-export, approvisionnement, transit, distribution et équipements. Nous connectons le Sénégal et l'Afrique de l'Ouest aux meilleures sources mondiales.",
    mission: "Fluidifier les échanges commerciaux entre le Sénégal et le monde, en garantissant à nos clients qualité, traçabilité et maîtrise des coûts sur l'ensemble de la chaîne logistique.",
    vision: "Devenir le partenaire incontournable du commerce international en Afrique de l'Ouest, du sourcing à la livraison finale.",
    history: "Créée en 2022, PHÉNIX INTERNATIONAL a rapidement tissé un réseau de partenaires dans plus de 60 pays. Nous traitons aujourd'hui plus de 500 containers par an pour 150+ clients réguliers.",
    domains: [
      { icon: Package, label: 'Commerce Général', description: "Approvisionnement, distribution, négoce de gros" },
      { icon: Globe2, label: 'Import / Export', description: 'Sourcing international, représentation commerciale' },
      { icon: Truck, label: 'Logistique & Transit', description: 'Transit douanier, fret, stockage, dernière mille' },
      { icon: ShieldCheck, label: 'Sécurité Électronique', description: 'Vidéosurveillance, contrôle d\'accès, télésurveillance' },
      { icon: Zap, label: 'Groupes Électrogènes', description: "Solutions d'énergie, onduleurs, installations" },
      { icon: Cpu, label: 'Matériel Informatique', description: 'Équipements IT, réseaux, licences, revente' },
    ],
    stats: [
      { value: 10, suffix: '+', label: 'Pays partenaires', sub: 'Asie, Europe, USA' },
      { value: 500, suffix: '+', label: 'Containers / an', sub: 'Transit maîtrisé' },
      { value: 150, suffix: '+', label: 'Clients réguliers', sub: 'Importateurs & PME' },
      { value: 6, suffix: ' ans', label: "Expérience commerce", sub: 'Depuis 2020' },
    ],
    process: [
      { title: 'Analyse des besoins', desc: 'Identification des produits, volumes, qualité cible et budget.' },
      { title: 'Sourcing & négociation', desc: 'Recherche des meilleurs fournisseurs, négociation des conditions.' },
      { title: 'Transit & logistique', desc: 'Gestion douanière, transport, dédouanement, entreposage.' },
      { title: 'Livraison & après-vente', desc: 'Mise à disposition, contrôle qualité, support continu.' },
    ],
    partners: ['Schneider', 'Bosch', 'Hikvision', 'Caterpillar', 'Siemens', 'AutoDesk'],
  },
  {
    slug: 'phenix-corporation',
    name: 'PHÉNIX CORPORATION',
    shortName: 'Corporation',
    tagline: 'BTP · Génie Civil · Énergie · Agriculture',
    color: '#573B08',
    gradient: 'linear-gradient(135deg,#7B5209,#3E2A05)',
    icon: Building2,
    description: "Notre division ingénierie et construction. Bâtiment, génie civil, routes, hydraulique, agriculture et énergie. Nous bâtissons les infrastructures qui structurent le développement économique.",
    mission: "Construire des infrastructures durables et de qualité, qui servent le développement économique et social du Sénégal et de l'Afrique de l'Ouest.",
    vision: "Être l'entreprise de BTP de référence au Sénégal, reconnue pour la qualité de ses ouvrages et son respect des délais.",
    history: "Lancée en 2021, PHÉNIX CORPORATION a déjà réalisé plus de 85 chantiers : bâtiments, routes, réseaux. Nous comptons 350 ouvriers et ingénieurs mobilisables sur tout le territoire.",
    domains: [
      { icon: Building2, label: 'Construction & BTP', description: 'Bâtiments, ouvrages d\'art, promotion immobilière' },
      { icon: HardHat, label: 'Génie Civil', description: 'Structures, fondations, terrassement, béton armé' },
      { icon: Truck, label: 'Routes & Hydraulique', description: 'Chaussées, VRD, réseaux, assainissement' },
      { icon: Sprout, label: 'Agriculture & Irrigation', description: 'Aménagements, périmètres, systèmes d\'irrigation' },
      { icon: Zap, label: 'Climatisation & Électricité', description: 'Installations techniques, CVC, énergie solaire' },
      { icon: Wrench, label: 'Maintenance Industrielle', description: 'Entretien, remise en état, facility management' },
    ],
    stats: [
      { value: 50, suffix: '+', label: "Chantiers réalisés", sub: 'Bâtiment & génie civil' },
      { value: 200, suffix: 'k', label: 'm² construits', sub: 'Tous types' },
      { value: 350, suffix: '+', label: 'Ouvriers & ingénieurs', sub: 'Mobilisables' },
      { value: 100, suffix: '%', label: 'Délais respectés', sub: 'Engagement contractualisé' },
    ],
    process: [
      { title: 'Étude de faisabilité', desc: 'Analyse technique, géotechnique, réglementaire et budgétaire.' },
      { title: 'Conception & DAO', desc: 'Plans, notes de calcul, dossiers techniques, autorisations.' },
      { title: 'Exécution des travaux', desc: 'Chantier maîtrisé, suivi qualité, sécurité, planning.' },
      { title: 'Réception & garantie', desc: 'Livraison, levée des réserves, garantie décennale, maintenance.' },
    ],
    partners: ['Caterpillar', 'Schneider', 'Siemens', 'Lafarge', 'Bosch', 'Holcim'],
  },
];

/* ============================================================
   SERVICES
   ============================================================ */
export type Service = {
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  technologies: string[];
  process: string[];
  image: string;
};

export const services: Service[] = [
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    short: 'Modèles prédictifs, automatisation intelligente, IA générative',
    description: "Nous concevons des solutions d'IA qui transforment vos données en décisions. De l'analyse prédictive aux assistants conversationnels, nous rendons vos processus plus intelligents et plus efficaces.",
    benefits: ['Automatisation des tâches répétitives', 'Analyse prédictive avancée', 'Assistants IA sur mesure', 'ROI mesurable et rapide'],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Azure ML', 'OpenAI', 'LangChain'],
    process: ['Audit & cadrage', 'Collecte & préparation des données', 'Modélisation & entraînement', 'Déploiement & MLOps'],
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Code2,
    title: 'Développement Logiciel',
    short: 'ERP, CRM, applications Web & Mobiles sur mesure',
    description: 'Des applications sur mesure, pensées pour vos métiers. Architecture évolutive, code propre, delivery continu. De la conception au déploiement, nous maîtrisons toute la chaîne.',
    benefits: ['Solutions 100% sur mesure', 'Architecture scalable', 'Intégrations natives', 'Maintenabilité long terme'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'CI/CD'],
    process: ['Atelier métier', 'UX/UI design', 'Développement agile', 'Tests & mise en production'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    short: 'Architecture cloud, migration, administration système',
    description: "Nous concevons et opérons des infrastructures cloud robustes, sécurisées et optimisées en coûts. Haute disponibilité, scalabilité élastique et sécurité by design.",
    benefits: ['Haute disponibilité 99.9%', 'Sécurité by design', 'Optimisation des coûts', 'Scalabilité élastique'],
    technologies: ['AWS', 'Azure', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    process: ['Audit infrastructure', 'Architecture cible', 'Migration progressive', 'Supervision & FinOps'],
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité',
    short: 'Audit, pentest, conformité, sécurisation des systèmes',
    description: "Protégez votre patrimoine numérique. Audits, tests d'intrusion, conformité et réponse aux incidents. Nous sécurisons vos systèmes contre les menaces actuelles et émergentes.",
    benefits: ['Réduction du risque', 'Conformité réglementaire', 'Détection proactive', 'Réponse aux incidents 24/7'],
    technologies: ['Burp Suite', 'Metasploit', 'Splunk', 'CrowdStrike', 'ISO 27001', 'NIST'],
    process: ['Cartographie des risques', 'Pentest & audit', 'Remédiation', 'Supervision SOC'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Building2,
    title: 'Construction & BTP',
    short: 'Bâtiment, génie civil, routes, promotion immobilière',
    description: "Nous bâtissons des infrastructures durables, des bureaux aux ouvrages d'art, avec une exigence qualité absolue et un respect contractuel des délais.",
    benefits: ['Qualité structurelle', 'Respect des délais 100%', 'Conformité normes', 'Matériaux premium'],
    technologies: ['AutoCAD', 'Revit', 'MS Project', 'BIM', 'Primavera', 'ETABS'],
    process: ['Étude de faisabilité', 'Conception & DAO', 'Exécution des travaux', 'Réception & garantie'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Globe2,
    title: 'Commerce International',
    short: 'Import-export, approvisionnement, transit, distribution',
    description: "Nous orchestrons vos flux internationaux. Sourcing, transit, logistique et distribution, bout en bout. Un réseau de 60+ pays au service de votre compétitivité.",
    benefits: ['Réseau mondial 60+ pays', 'Optimisation douanière', 'Maîtrise des délais', 'Coûts maîtrisés'],
    technologies: ['SAP', 'Odoo', 'Excel Power Query', 'PowerBI', 'Custom ERP'],
    process: ['Analyse des besoins', 'Sourcing & négociation', 'Transit & logistique', 'Livraison finale'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Zap,
    title: 'Énergie & Électricité',
    short: 'Groupes électrogènes, solaire, installations électriques',
    description: "Solutions énergétiques clés en main : groupes électrogènes, installations solaires, réseaux électriques. Continuité de service et autonomie énergétique.",
    benefits: ['Continuité de service', 'Énergie propre', 'Autonomie énergétique', 'Maintenance garantie'],
    technologies: ['Schneider', 'Caterpillar', 'Victron', 'Fronius', 'Canadian Solar'],
    process: ['Audit énergétique', 'Dimensionnement', 'Installation', 'Maintenance'],
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Camera,
    title: 'Sécurité Électronique',
    short: 'Vidéosurveillance, contrôle d\'accès, télésurveillance',
    description: "Protégez vos sites. Vidéosurveillance IP, contrôle d'accès biométrique, détection intelligente et télésurveillance 24/7. La sécurité comme culture.",
    benefits: ['Surveillance 24/7', 'Détection intelligente', 'Accès sécurisé', 'Traçabilité totale'],
    technologies: ['Hikvision', 'Bosch', 'Axis', 'Genetec', 'Milestone', 'Dahua'],
    process: ['Analyse des risques', 'Conception du système', 'Installation & paramétrage', 'Télésurveillance'],
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: GraduationCap,
    title: 'Formation & Consulting',
    short: 'Montée en compétence, certifications, accompagnement',
    description: "Nous formons vos équipes et accompagnons vos transformations. Académie interne, certifications officielles, coaching de direction et conduite du changement.",
    benefits: ['Formations certifiantes', 'Accompagnement expert', 'Montée en compétence', 'Impact durable'],
    technologies: ['Microsoft Learn', 'AWS Training', 'Google Cloud', 'Scrum.org', 'PMI'],
    process: ['Audit de compétences', 'Programme sur mesure', 'Animation & coaching', 'Évaluation d\'impact'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

/* ============================================================
   SECTORS
   ============================================================ */
export type Sector = { icon: LucideIcon; label: string };
export const sectors: Sector[] = [
  { icon: Brain, label: 'Conseil' },
  { icon: Cpu, label: 'Transformation Numérique' },
  { icon: Brain, label: 'Intelligence Artificielle' },
  { icon: Code2, label: 'Développement Logiciel' },
  { icon: GraduationCap, label: 'Formation' },
  { icon: Globe2, label: 'Commerce International' },
  { icon: Package, label: 'Import / Export' },
  { icon: Truck, label: 'Logistique' },
  { icon: Truck, label: 'Transport' },
  { icon: Building2, label: 'BTP' },
  { icon: HardHat, label: 'Génie Civil' },
  { icon: Sprout, label: 'Agriculture' },
  { icon: Zap, label: 'Énergie' },
  { icon: Camera, label: 'Sécurité Électronique' },
  { icon: Wrench, label: 'Maintenance Industrielle' },
  { icon: Network, label: 'Consulting' },
];

/* ============================================================
   ORG CHART
   ============================================================ */
export const orgChart = [
  { role: 'Président Directeur Général', name: 'Maodo THIAM', level: 0 },
  { role: 'Direction Générale', name: 'Pilotage stratégique', level: 1 },
  { role: 'Direction Technique', name: 'Innovation & R&D', level: 2 },
  { role: 'Direction Commerciale', name: 'Développement & Partenariats', level: 2 },
  { role: 'Direction Financière', name: 'Finance & Contrôle de gestion', level: 2 },
  { role: 'Direction Ressources Humaines', name: 'Talents & Capital humain', level: 2 },
  { role: 'Responsables de pôle', name: '5 pôles opérationnels', level: 3 },
  { role: 'Chefs de projets', name: 'Pilotage terrain', level: 4 },
  { role: 'Ingénieurs & Consultants', name: 'Expertise technique', level: 5 },
  { role: 'Techniciens', name: 'Excellence opérationnelle', level: 6 },
];

/* ============================================================
   TEAM — Mock data ready for Laravel API connection
   ============================================================ */
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  department: string;
  subsidiary: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  skills: string[];
  certifications: string[];
  photo: string;
};

export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Maodo THIAM', role: 'Président Directeur Général', department: 'Direction Générale', subsidiary: 'Groupe', email: 'blscamaf@gmail.com', phone: '+221 78 452 19 12', linkedin: '#', bio: "Fondateur visionnaire du GROUPE PHÉNIX. Entrepreneur sénégalais reconnu, Maodo THIAM a bâti en 15 ans un groupe multisectoriel de référence, présent dans 8 pays avec plus de 850 collaborateurs.", skills: ['Stratégie', 'Leadership', 'Business Development', 'Gouvernance'], certifications: ['MBA', 'Harvard Business School Executive'], photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Bassirou diallo', role: 'Directrice Technique', department: 'Technique & R&D', subsidiary: 'Phenix Consulting', email: 'a.diop@groupephenix.sn', phone: '+221 77 123 45 67', linkedin: '#', bio: "Experte en architecture logicielle et transformation cloud. 12 ans d'expérience dans les grands comptes bancaires et télécoms.", skills: ['Architecture', 'Cloud', 'DevOps', 'IA'], certifications: ['AWS Solutions Architect', 'TOGAF', 'PMP'], photo: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Moussa Dia', role: 'Directeur Commerciale', department: 'Commercial', subsidiary: 'Groupe', email: 'm.sow@groupephenix.sn', phone: '+221 76 234 56 78', linkedin: '#', bio: "15 ans de développement commercial en Afrique de l'Ouest. Spécialiste des marchés publics et des partenariats stratégiques.", skills: ['Business Development', 'Négociation', 'Partenariats', 'B2G'], certifications: ['MBA Commerce International', 'Salesforce Certified'], photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Sokhna Kandji', role: 'Directrice Financière', department: 'Finance', subsidiary: 'Groupe', email: 'f.ndiaye@groupephenix.sn', phone: '+221 77 345 67 89', linkedin: '#', bio: "Expert-comptable et contrôleuse de gestion. Pilote la performance financière du Groupe avec rigueur et vision stratégique.", skills: ['Finance', 'Contrôle de gestion', 'Reporting', 'Trésorerie'], certifications: ['DEC', 'DSCG', 'ACCA'], photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Ousmane Bodian', role: 'Directeur PHÉNIX CONSULTING', department: 'Direction Filiale', subsidiary: 'Phenix Consulting', email: 'ousmanearfangkemobodian@gmail.com', phone: '+221 78 456 78 90', linkedin: '#', bio: "Ingénieur et manager. Pilote la filiale technologique avec une équipe de 30+ experts certifiés.", skills: ['Management', 'Conseil', 'Innovation', 'Delivery'], certifications: ['PMP', 'Scrum Master', 'ITIL'], photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Bathie Dieng', role: 'Directrice PHÉNIX INTERNATIONAL', department: 'Direction Filiale', subsidiary: 'Phenix International', email: 'bathiedieng52@gmail.com', phone: '+221 77 567 89 01', linkedin: '#', bio: "Spécialiste du commerce international et de la logistique. Réseau de partenaires dans 60+ pays.", skills: ['Import-Export', 'Transit', 'Logistique', 'Négociation'], certifications: ['Master Commerce International', 'FIDI'], photo: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'Pape Abdoulaye Sall', role: 'Directeur PHÉNIX CORPORATION', department: 'Direction Filiale', subsidiary: 'Phenix Corporation', email: 'o.ba@groupephenix.sn', phone: '+221 76 678 90 12', linkedin: '#', bio: "Ingénieur génie civil. 20 ans de chantiers. A dirigé plus de 85 ouvrages au Sénégal et en région.", skills: ['Génie Civil', 'BTP', 'Conduite de chantier', 'DAO'], certifications: ['Ingénieur ESTP', 'BIM Manager'], photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Marie Diaho', role: 'Directrice Ressources Humaines', department: 'Ressources Humaines', subsidiary: 'Groupe', email: 'k.mbaye@groupephenix.sn', phone: '+221 77 789 01 23', linkedin: '#', bio: "DRH engagée. Capital humain, formation continue et culture d'excellence au cœur de sa mission.", skills: ['RH', 'Recrutement', 'Formation', 'Gestion sociale'], certifications: ['Master RH', 'PSL Paris'], photo: 'https://images.pexels.com/photos/3730532/pexels-photo-3730532.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

/* ============================================================
   TESTIMONIALS
   ============================================================ */
export const testimonials = [
  { name: 'Bassirou Diallo', role: 'SCI Safar, Banque Nationale', quote: "Le GROUPE PHÉNIX a transformé notre système d'information avec un professionnalisme rare. Un partenaire de confiance sur qui nous comptons au quotidien." },
  { name: 'Aladji Faye', role: 'Directeur Général, Promobilière', quote: "Leur maîtrise du génie civil et leur respect des délais ont fait de notre chantier un modèle. Bravo à toute l'équipe PHÉNIX CORPORATION." },
  { name: 'Dame Fall', role: 'Transneg Internationnal', quote: "De l'import-export à la logistique, PHÉNIX INTERNATIONAL gère nos flux avec une efficacité impressionnante. Un partenaire indispensable." },
  { name: 'Ndaté Ndiaye', role: 'CIO, Opérateur Télécom', quote: "L'équipe IA de PHÉNIX CONSULTING a déployé des modèles prédictifs qui ont révolutionné notre pilotage. Des résultats concrets et mesurables." },
];
 
/* ============================================================
   PARTNERS
   ============================================================ */
export const partners = ['Microsoft', 'Oracle', 'IBM', 'Cisco', 'Huawei', 'AWS', 'Dell', 'Schneider', 'Caterpillar', 'Bosch', 'Siemens', 'AutoDesk'];

export type PartnerDetail = { name: string; sector: string; country: string; projects: number };
export const partnerDetails: PartnerDetail[] = [
  { name: 'Microsoft', sector: 'Cloud & IA', country: 'USA', projects: 25 },
  { name: 'Oracle', sector: 'Bases de données & ERP', country: 'USA', projects: 18 },
  { name: 'IBM', sector: 'Infrastructure & IA', country: 'USA', projects: 12 },
  { name: 'Cisco', sector: 'Réseaux & Sécurité', country: 'USA', projects: 22 },
  { name: 'Huawei', sector: 'Télécoms & Cloud', country: 'Chine', projects: 15 },
  { name: 'AWS', sector: 'Cloud', country: 'USA', projects: 30 },
  { name: 'Schneider', sector: 'Énergie & Électricité', country: 'France', projects: 14 },
  { name: 'Caterpillar', sector: 'Énergie & BTP', country: 'USA', projects: 9 },
  { name: 'Bosch', sector: 'Sécurité & IoT', country: 'Allemagne', projects: 11 },
  { name: 'Siemens', sector: 'Automatisation & Énergie', country: 'Allemagne', projects: 8 },
];

/* ============================================================
   NAVIGATION
   ============================================================ */
export const navStructure = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Le Groupe',
    to: '/groupe',
    mega: [
      { title: 'Présentation', links: [
        { label: 'À propos', to: '/groupe' },
        { label: 'Historique', to: '/groupe#histoire' },
        { label: 'Vision & Mission', to: '/groupe#vision' },
        { label: 'Valeurs', to: '/groupe#valeurs' },
      ]},
      { title: 'Structure', links: [
        { label: 'Direction', to: '/direction' },
        { label: 'Notre équipe', to: '/equipe' },
        { label: 'Organigramme', to: '/groupe#organigramme' },
      ]},
      { title: 'Engagement', links: [
        { label: 'RSE', to: '/rse' },
        { label: 'Politique qualité', to: '/qualite' },
        { label: 'Innovation', to: '/innovation' },
      ]},
    ],
  },
  {
    label: 'Filiales',
    to: '/filiales',
    mega: [
      { title: 'Nos trois pôles', links: [
        { label: 'PHÉNIX CONSULTING', to: '/filiales/phenix-consulting' },
        { label: 'PHÉNIX INTERNATIONAL', to: '/filiales/phenix-international' },
        { label: 'PHÉNIX CORPORATION', to: '/filiales/phenix-corporation' },
      ]},
      { title: 'Expertises', links: [
        { label: 'Services', to: '/services' },
        { label: 'Solutions', to: '/solutions' },
        { label: 'Secteurs', to: '/secteurs' },
      ]},
    ],
  },
  {
    label: 'Activités',
    to: '/services',
    mega: [
      { title: 'Services', links: [
        { label: 'Conseil & Digital', to: '/services' },
        { label: 'Construction & BTP', to: '/services' },
        { label: 'Commerce & Logistique', to: '/services' },
      ]},
      { title: 'Réalisations', links: [
        { label: 'Projets', to: '/projets' },
        { label: 'Galerie', to: '/realisations' },
        { label: 'Innovation', to: '/innovation' },
      ]},
    ],
  },
  { label: 'Réalisations', to: '/projets' },
  { label: 'Carrières', to: '/carrieres' },
  { label: 'Contact', to: '/contact' },
];

export const footerNav = [
  {
    title: 'Le Groupe',
    links: [
      { label: 'À propos', to: '/groupe' },
      { label: 'Direction', to: '/direction' },
      { label: 'Notre équipe', to: '/equipe' },
      { label: 'Nos filiales', to: '/filiales' },
      { label: 'Innovation', to: '/innovation' },
    ],
  },
  {
    title: 'Activités',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Réalisations', to: '/realisations' },
      { label: 'Projets', to: '/projets' },
      { label: 'Partenaires', to: '/partenaires' },
      { label: 'Secteurs', to: '/secteurs' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Actualités', to: '/actualites' },
      { label: 'Carrières', to: '/carrieres' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Téléchargements', to: '/telechargements' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Nous contacter', to: '/contact' },
      { label: 'Demande de devis', to: '/devis' },
      { label: 'Investisseurs', to: '/investisseurs' },
      { label: 'Mentions légales', to: '/mentions-legales' },
      { label: 'Confidentialité', to: '/confidentialite' },
    ],
  },
];
