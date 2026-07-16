// src/config.ts
// Coordonnées et liens du cabinet — à compléter avec les informations réelles du client.
export const CABINET = {
  nom: "Cabinet Dentaire du Dr LEBERT",
  telephone: "02 40 27 56 85", // À renseigner
  telephoneTel: "tel:+33240275685", // À renseigner
  email: "dr.lebert@orange.fr", // À renseigner
  //doctolib: "https://www.doctolib.fr/", // À renseigner — lien Doctolib du cabinet
  adresse: {
    ligne1: "11 Bis rue du parc des sports",
    ligne2: "44320 SAINT VIAUD",
  },
  horaires: [
    { jours: "Lundi,Jeudi", heures: "09h00 – 12h00 et 13h30 – 18h00" },
    { jours: "Mardi,Vendredi", heures: "09h00 – 12h00 et 13h30 – 17h30" },
    { jours: "Samedi", heures: "Fermé" },
    { jours: "Dimanche", heures: "Fermé" },
  ],
  horairesNote: "Horaires à confirmer avec le cabinet",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "L'équipe", href: "/equipe" },
  { label: "Soins dentaires", href: "/soins-dentaires" },
  { label: "Contact", href: "/contact" },
] as const;
export const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  return `${base}/${clean}`;
}
