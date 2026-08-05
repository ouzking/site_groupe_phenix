import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  ShieldCheck,
  Award,
  User,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
//import { Logo } from './ui/Logo';
import { footerNav, companyInfo, partnerDetails } from '../data/content';
import { useToast } from './ui/Toast';
import phenixLogo from '../assets/images/phenix.jpeg';

export function Footer() {
  const { notify } = useToast();
  return (
    <footer className="relative overflow-hidden bg-anthracite-950 text-anthracite-300">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'rgba(123,82,9,0.10)' }} />

      <div className="container-premium relative">
        {/* Top: brand + newsletter */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-2">
          <div className="max-w-md">
           <Link to="/" className="inline-flex items-center gap-4 group">
  {/* Logo */}
  <img
    src={phenixLogo}
    alt="Logo Groupe PHÉNIX"
    className="h-20 w-20 rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Texte */}
  <div className="flex flex-col justify-center">
    <h2 className="text-2xl font-bold tracking-[0.06em] uppercase leading-none text-white">
      Groupe
      <span className="ml-2 text-brand-500">PHÉNIX</span>
    </h2>

    <p className="mt-1 text-[10px] font-medium tracking-[0.14em] uppercase text-anthracite-400">
      Idées innovantes en action
    </p>
  </div>
</Link>
            <p className="mt-6 text-sm leading-relaxed text-anthracite-400">
              Groupe sénégalais multisectoriel fondé en 2020 par {companyInfo.pdg}. Conseil, transformation numérique, BTP, commerce international, énergie et sécurité électronique. Nous bâtissons l&apos;excellence depuis 6 ans.
            </p>

            {/* Official info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#C9A02A' }} />
                <span className="text-anthracite-400">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0" style={{ color: '#C9A02A' }} />
                <a href={`tel:${companyInfo.phone}`} className="text-anthracite-400 hover:text-brand-400">{companyInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0" style={{ color: '#C9A02A' }} />
                <a href={`mailto:${companyInfo.email}`} className="text-anthracite-400 hover:text-brand-400">{companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="h-4 w-4 shrink-0" style={{ color: '#C9A02A' }} />
                <span className="text-anthracite-400">{companyInfo.pdgRole} : {companyInfo.pdg}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {companyInfo.certifications.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: 'rgba(201,160,42,0.25)', color: '#DFC060', background: 'rgba(123,82,9,0.08)' }}>
                  <ShieldCheck className="h-3 w-3" /> {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-premium text-white">Actualités</p>
            <p className="mt-2 max-w-sm text-sm text-anthracite-400">Recevez nos actualités, insights et innovations. Une fois par mois, jamais plus.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); notify({ title: 'Inscription confirmée', description: 'Bienvenue dans la communauté PHÉNIX.' }); (e.currentTarget.querySelector('input') as HTMLInputElement).value = ''; }}
              className="mt-5 flex max-w-md items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-anthracite-500 focus:border-brand-500 focus:outline-none"
              />
              <button type="submit" className="btn-brand !px-5 !py-3 shrink-0" aria-label="S'inscrire">
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex gap-3">
              {[FaLinkedinIn, FaFacebookF, FaXTwitter, FaYoutube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-anthracite-400 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-ultra" style={{ color: '#DFC060' }}>{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="link-hover text-sm text-anthracite-400 transition-colors hover:text-white" style={{ '--after-bg': '#DFC060' } as React.CSSProperties}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partenaires */}
<div className="border-b border-white/10 py-16">

  {/* Titre */}
  <div className="mb-12 text-center">
    <div className="inline-flex items-center gap-3 rounded-full border border-brand-500/20 bg-brand-500/10 px-5 py-2">
      <Award
        className="h-5 w-5 text-brand-500"
      />
      <span className="text-xs font-bold uppercase tracking-[0.35em] text-brand-400">
        Partenaires Stratégiques
      </span>
    </div>

    <h2 className="mt-6 font-display text-3xl font-bold text-white">
      Ils nous font confiance
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-anthracite-400">
      Le GROUPE PHÉNIX collabore avec des institutions publiques,
      des entreprises nationales et des partenaires internationaux
      pour mener des projets d'envergure.
    </p>
  </div>

  {/* Logos */}
  <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">

    {partnerDetails.map((partner) => (

      <div
        key={partner.name}
        className="group relative overflow-hidden rounded-3xl border border-white/10
                   bg-gradient-to-br from-white/10 via-white/5 to-transparent
                   backdrop-blur-xl
                   p-6
                   transition-all duration-500
                   hover:-translate-y-2
                   hover:border-brand-500/50
                   hover:shadow-[0_25px_60px_rgba(201,160,42,0.18)]"
      >

        {/* Halo doré */}
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/20 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        {/* Logo */}
        <div className="flex h-24 items-center justify-center">

          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-20 w-auto object-contain
                       grayscale
                       opacity-80
                       transition-all duration-500
                       group-hover:grayscale-0
                       group-hover:opacity-100
                       group-hover:scale-110"
          />

        </div>

        {/* Nom */}
        <div className="mt-5 border-t border-white/10 pt-4">

          <h3 className="text-center text-sm font-semibold text-white">
            {partner.name}
          </h3>

          <p className="mt-1 text-center text-xs text-anthracite-400">
            {partner.sector}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-anthracite-500">© {new Date().getFullYear()} {companyInfo.legalName}. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <Link to="/mentions-legales" className="text-anthracite-500 hover:text-brand-400">Mentions légales</Link>
            <Link to="/confidentialite" className="text-anthracite-500 hover:text-brand-400">Confidentialité</Link>
            <span className="text-anthracite-600">Dakar · Sénégal · Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
