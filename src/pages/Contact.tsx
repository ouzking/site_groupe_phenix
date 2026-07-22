import { MapPin, Phone, Mail, MessageCircle, Clock, Send, ArrowRight, User, Building2 } from 'lucide-react';
import { PageHero } from '../components/ui/Section';
import { Reveal, StaggerGroup, StaggerItem } from '../components/ui/Reveal';
import { useToast } from '../components/ui/Toast';
import { companyInfo } from '../data/content';

export function Contact() {
  const { notify } = useToast();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        badge="À votre écoute"
        title={<>Parlons de votre <span className="text-brand-gradient">projet</span></>}
        description="Nos équipes vous répondent sous 24h. Une question, un devis, un rendez-vous : nous sommes à votre écoute."
      />

      <section className="section-pad">
        <div className="container-premium grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); notify({ title: 'Message envoyé', description: 'Nous vous répondrons sous 24h.' }); (e.currentTarget as HTMLFormElement).reset(); }}
              className="space-y-5 rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60"
              style={{ borderColor: 'rgba(14,13,12,0.07)' }}
            >
              <h2 className="font-display text-2xl font-bold text-anthracite-900 dark:text-white">Envoyez-nous un message</h2>
              <p className="text-sm text-anthracite-500 dark:text-anthracite-300">Remplissez ce formulaire, nous vous recontactons sous 24h ouvrées.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Nom complet *</label>
                  <input required placeholder="Votre nom" className="premium-input" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Email *</label>
                  <input required type="email" placeholder="vous@exemple.com" className="premium-input" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Téléphone</label>
                  <input placeholder="+221 ..." className="premium-input" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Organisation</label>
                  <input placeholder="Entreprise / Institution" className="premium-input" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Sujet *</label>
                <select required className="premium-input">
                  <option value="">Choisissez un sujet</option>
                  <option>Demande d&apos;information</option>
                  <option>Demande de devis</option>
                  <option>Prise de rendez-vous</option>
                  <option>Partenariat</option>
                  <option>Recrutement</option>
                  <option>Support technique</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Message *</label>
                <textarea required rows={5} placeholder="Décrivez votre demande..." className="premium-input" />
              </div>
              <button type="submit" className="btn-brand w-full">Envoyer le message <Send className="h-4 w-4" /></button>
            </form>
          </Reveal>

          {/* Info */}
          <div className="space-y-5">
            <StaggerGroup>
              {[
                { icon: MapPin, title: 'Siège social', lines: [companyInfo.address, companyInfo.city + ', ' + companyInfo.country] },
                { icon: Phone, title: 'Téléphone', lines: [companyInfo.phone, 'Lun – Ven, 8h – 18h'] },
                { icon: Mail, title: 'Email', lines: [companyInfo.email, 'devis@groupephenix.sn'] },
                { icon: MessageCircle, title: 'WhatsApp', lines: [companyInfo.phone, 'Réponse rapide'] },
                { icon: User, title: 'Président Directeur Général', lines: [companyInfo.pdg, companyInfo.pdgRole] },
                { icon: Clock, title: 'Horaires', lines: ['Lundi – Vendredi : 8h – 18h', 'Samedi : 9h – 13h'] },
              ].map((c) => (
                <StaggerItem key={c.title}>
                  <div className="flex items-start gap-4 rounded-2xl border bg-white p-5 dark:bg-anthracite-800/60" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: 'linear-gradient(135deg,#C9A02A,#7B5209)' }}>
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-anthracite-900 dark:text-white">{c.title}</p>
                      {c.lines.map((l) => <p key={l} className="text-sm text-anthracite-500 dark:text-anthracite-300">{l}</p>)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container-premium">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border shadow-float" style={{ borderColor: 'rgba(14,13,12,0.07)' }}>
              <iframe
                title="Carte — Siège GROUPE PHÉNIX"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.39%2C14.73%2C-17.27%2C14.78&layer=mapnik&marker=14.75,-17.33"
                className="h-[400px] w-full"
                loading="lazy"
              />
              <div className="glass-card absolute bottom-6 left-6 rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" style={{ color: '#7B5209' }} />
                  <p className="font-display font-bold text-anthracite-900 dark:text-white">GROUPE PHÉNIX</p>
                </div>
                <p className="mt-1 text-sm text-anthracite-500 dark:text-anthracite-300">{companyInfo.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Devis() {
  const { notify } = useToast();
  return (
    <>
      <PageHero
        eyebrow="Demande de devis"
        badge="Réponse sous 72h"
        title={<>Un devis <span className="text-brand-gradient">sur mesure</span>, sous 72h</>}
        description="Décrivez votre projet. Nos experts vous recontacteront pour préciser le périmètre et vous adresser une proposition commerciale détaillée."
      />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <form
            onSubmit={(e) => { e.preventDefault(); notify({ title: 'Demande de devis reçue', description: 'Nos experts vous recontactent sous 72h.' }); (e.currentTarget as HTMLFormElement).reset(); }}
            className="space-y-6 rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60"
            style={{ borderColor: 'rgba(14,13,12,0.07)' }}
          >
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>1 · Vos informations</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Nom complet" className="premium-input" />
                <input required type="email" placeholder="Email" className="premium-input" />
                <input required placeholder="Téléphone" className="premium-input" />
                <input placeholder="Entreprise / Organisation" className="premium-input" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>2 · Votre projet</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <select required className="premium-input">
                  <option value="">Secteur d&apos;activité</option>
                  <option>Conseil & Digital</option><option>BTP & Génie civil</option><option>Commerce & Logistique</option><option>Énergie</option><option>Sécurité électronique</option><option>Agriculture</option><option>Autre</option>
                </select>
                <select required className="premium-input">
                  <option value="">Filiale concernée</option>
                  <option>PHÉNIX CONSULTING</option><option>PHÉNIX INTERNATIONAL</option><option>PHÉNIX CORPORATION</option><option>Indifférent</option>
                </select>
                <select required className="premium-input">
                  <option value="">Budget estimé</option>
                  <option>{'< 10k €'}</option><option>10k – 50k €</option><option>50k – 250k €</option><option>250k € – 1M €</option><option>{'> 1M €'}</option>
                </select>
                <select required className="premium-input">
                  <option value="">Délai souhaité</option>
                  <option>Urgent ({'< 1 mois'})</option><option>1 – 3 mois</option><option>3 – 6 mois</option><option>{'> 6 mois'}</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>3 · Détails</h3>
              <textarea required rows={5} placeholder="Décrivez votre besoin, vos objectifs, vos contraintes..." className="premium-input" />
            </div>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center text-sm text-anthracite-500 transition-colors hover:border-brand-500 dark:text-anthracite-300" style={{ borderColor: 'rgba(123,82,9,0.3)', background: 'rgba(123,82,9,0.04)' }}>
              <Send className="h-5 w-5" style={{ color: '#7B5209' }} />
              Joindre des documents (cahier des charges, plans, etc.)
              <input type="file" multiple className="hidden" />
            </label>
            <button type="submit" className="btn-brand w-full text-base">Soumettre la demande de devis <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </>
  );
}
