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
onSubmit={(e) => {

    e.preventDefault();

    const form = e.currentTarget;

    const data = new FormData(form);

    const nom = data.get("nom");
    const email = data.get("email");
    const telephone = data.get("telephone");
    const organisation = data.get("organisation");
    const sujet = data.get("sujet");
    const message = data.get("message");

    const texte = `
🏢 *GROUPE PHÉNIX*

━━━━━━━━━━━━━━━━━━━━

📩 *NOUVELLE DEMANDE DE CONTACT*

━━━━━━━━━━━━━━━━━━━━

👤 *Nom*
${nom}

📧 *Email*
${email}

📱 *Téléphone*
${telephone}

🏢 *Organisation*
${organisation}

📌 *Sujet*
${sujet}

💬 *Message*

${message}

━━━━━━━━━━━━━━━━━━━━

🌐 Envoyé depuis le site officiel du GROUPE PHÉNIX
`;

    window.open(
      `https://wa.me/221784521912?text=${encodeURIComponent(texte)}`,
      "_blank"
    );

    notify({
      title: "WhatsApp ouvert",
      description: "Votre message est prêt à être envoyé.",
    });

    form.reset();

}}  
           className="space-y-5 rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60"
              style={{ borderColor: 'rgba(14,13,12,0.07)' }}
            >
              <h2 className="font-display text-2xl font-bold text-anthracite-900 dark:text-white">Envoyez-nous un message</h2>
              <p className="text-sm text-anthracite-500 dark:text-anthracite-300">Remplissez ce formulaire, nous vous recontactons sous 24h ouvrées.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Nom complet *</label>
<input
  name="nom"
  required
  placeholder="Votre nom"
  className="premium-input"
/>                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Email *</label>
<input
  name="email"
  required
  type="email"
  placeholder="vous@exemple.com"
  className="premium-input"
/>                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Téléphone</label>
<input
  name="telephone"
  placeholder="+221 ..."
  className="premium-input"
/>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Organisation</label>
<input
  name="organisation"
  placeholder="Entreprise / Institution"
  className="premium-input"
/>                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-anthracite-600 dark:text-anthracite-300">Sujet *</label>
                <select name="sujet" required className="premium-input">
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
                <textarea name="message" required rows={5} placeholder="Décrivez votre demande..." className="premium-input" />
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
                { icon: Mail, title: 'Email', lines: [companyInfo.email, 'blscamaf@gmail.com'] },
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
        title={<>Un devis <span className="text-brand-gradient">sur mesure</span>, sous 24h</>}
        description="Décrivez votre projet. Nos experts vous recontacteront pour préciser le périmètre et vous adresser une proposition commerciale détaillée."
      />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const nom = data.get("nom");
    const email = data.get("email");
    const telephone = data.get("telephone");
    const organisation = data.get("organisation");
    const secteur = data.get("sujet");
    const filiale = data.get("filiale");
    const budget = data.get("budget");
    const delai = data.get("delai");
    const description = data.get("description");

    const texte = `
🏢 *GROUPE PHÉNIX*

━━━━━━━━━━━━━━━━━━━━━━

📄 *NOUVELLE DEMANDE DE DEVIS*

━━━━━━━━━━━━━━━━━━━━━━

👤 *Nom*
${nom}

📧 *Email*
${email}

📱 *Téléphone*
${telephone}

🏢 *Entreprise / Organisation*
${organisation}

━━━━━━━━━━━━━━━━━━━━━━

📂 *Secteur d'activité*
${secteur}

🏛️ *Filiale concernée*
${filiale}

💰 *Budget estimé*
${budget}

⏳ *Délai souhaité*
${delai}

━━━━━━━━━━━━━━━━━━━━━━

📝 *Description du projet*

${description}

━━━━━━━━━━━━━━━━━━━━━━

🌐 Envoyé depuis le site officiel du GROUPE PHÉNIX
`;

    window.open(
      `https://wa.me/221784521912?text=${encodeURIComponent(texte)}`,
      "_blank"
    );

    notify({
      title: "WhatsApp ouvert",
      description: "Votre demande de devis est prête à être envoyée.",
    });

    form.reset();
  }}
  
  className="space-y-6 rounded-3xl border bg-white p-8 shadow-premium dark:bg-anthracite-800/60"
  style={{ borderColor: "rgba(14,13,12,0.07)" }}
>
  <div>
  <h3
    className="mb-4 text-xs font-bold uppercase tracking-premium"
    style={{ color: "#7B5209" }}
  >
    1 · Vos informations
  </h3>

  <div className="grid gap-4 sm:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">
        Nom complet *
      </label>

      <input
        name="nom"
        required
        placeholder="Votre nom complet"
        className="premium-input"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">
        Adresse email *
      </label>

      <input
        name="email"
        type="email"
        required
        placeholder="vous@entreprise.com"
        className="premium-input"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">
        Téléphone
      </label>

      <input
        name="telephone"
        placeholder="+221..."
        className="premium-input"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">
        Entreprise / Organisation
      </label>

      <input
        name="organisation"
        placeholder="Nom de votre entreprise"
        className="premium-input"
      />
    </div>

  </div>
</div>
           
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>2 · Votre projet</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">Secteur d'activié *</label>
                <select name="sujet" required className="premium-input">
                  <option value="">Secteur d&apos;activité</option>
                  <option value="Conseil & Digital">Conseil & Digital</option><option value="BTP & Génie Civil">BTP & Génie Civil</option><option value="Commerce & Logistique">Commerce & Logistique</option><option value="Énergie">Énergie</option><option value="Sécurité électronique">Sécurité électronique</option><option value="Agriculture">Agriculture</option><option value="Autre">Autre</option>
                </select>
                <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">Filiale concernée *</label>
                  <select name="filiale" required className="premium-input">
                  <option value="">Filiale concernée</option>
                  <option value="PHÉNIX CONSULTING">PHÉNIX CONSULTING</option><option value="PHÉNIX INTERNATIONAL">PHÉNIX INTERNATIONAL</option><option value="PHÉNIX CORPORATION">PHÉNIX CORPORATION</option><option value="PHÉNIX CORPORATION">Indifférent</option>
                </select>
                <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">Budget estimé *</label>
                <select name="budget" required className="premium-input">
                  <option value="">Budget estimé</option>
                  <option>{'< 10k FCFA'}</option><option>10k – 1M FCFA</option><option>1M – 1Md FCFA</option><option>1Md – 10Md FCFA</option><option>{'> 10Md FCFA'}</option>
                </select>
                <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">Délai souhaité *</label>
                <select  name="delai" required className="premium-input">
                  <option value="">Délai souhaité</option>
                  <option>Urgent ({'< 1 mois'})</option><option>1 – 3 mois</option><option>3 – 6 mois</option><option>{'> 6 mois'}</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-premium" style={{ color: '#7B5209' }}>3 · Détails</h3>
              <label className="mb-2 block text-sm font-semibold text-anthracite-700 dark:text-white">Description détaillée du projet *</label>

              <textarea name="description" required rows={5} placeholder="Décrivez votre besoin, vos objectifs, vos contraintes..." className="premium-input" />
            </div>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center text-sm text-anthracite-500 transition-colors hover:border-brand-500 dark:text-anthracite-300" style={{ borderColor: 'rgba(123,82,9,0.3)', background: 'rgba(123,82,9,0.04)' }}>
              <Send className="h-5 w-5" style={{ color: '#7B5209' }} />
              Joindre des documents (cahier des charges, plans, etc.)
              <input name="documents" type="file" multiple className="hidden" />
            </label>
            <button type="submit" className="btn-brand w-full text-base">Soumettre la demande de devis <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </>
  );
}
