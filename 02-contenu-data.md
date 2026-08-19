# LENOX Restaurant-Bar — Cahier de refonte, instructions & contenu source

> **Fichier de référence unique pour l'agent de développement (Cursor / Claude Code / Copilot) ou pour le développeur humain.**
> Site cible : `https://lenoxgitega.com/`
> Objectif : passer d'un site "template correct" à une vitrine **charismatique, élégante et haut de gamme**, digne d'un établissement de 800+ couverts à Gitega.
> Version 2.0 — intègre le contenu textuel intégral extrait du site actuel.

---

## SOMMAIRE

| § | Contenu |
|---|---|
| **A** | **Contenu source extrait du site actuel (verbatim)** |
| **B** | **Contenu manquant à obtenir du client** |
| **C** | **Fichier `fr.json` prêt à l'emploi** |
| 0 | Contexte et intention |
| 1 | Règles absolues et interdits |
| 2 | Stack et architecture |
| 3 | Système de design (couleurs, typo, espacements, motion) |
| 4 | Thème clair / sombre |
| 5 | Internationalisation FR / RN / EN |
| 6 | Mouvement et micro-interactions |
| 7 | Refonte section par section |
| 8 | Accessibilité |
| 9 | Performance |
| 10 | SEO et métadonnées |
| 11 | Responsive |
| 12 | Recette finale |
| 13 | Ordre d'exécution |
| 14 | Prompt de démarrage pour l'agent |

---

# PARTIE A — CONTENU SOURCE EXTRAIT DU SITE ACTUEL

> Extraction effectuée sur `https://lenoxgitega.com/`. Tous les textes ci-dessous sont **copiés à l'identique**. Ils constituent la base de contenu de la refonte : ne rien perdre, tout réécrire ou enrichir uniquement quand c'est indiqué.
>
> ⚠️ **Aucune page menu ni aucun prix n'existe sur le site actuel.** Le bouton « Voir le Menu » du hero pointe vers la section Services, pas vers une carte. C'est le manque de contenu le plus grave du site (voir Partie B).

## A.1 Métadonnées

| Champ | Valeur actuelle |
|---|---|
| Titre de la page | `Lenox Restaurant-Bar | Gitega, Burundi - Cuisine Authentique & Événements` |
| Nom de marque | LENOX |
| Sous-titre | Restaurant - Bar |

## A.2 Hero

**Titre :** LENOX
**Sous-titre :** Restaurant - Bar

**Accroche :**
> Un lieu convivial où nous offrons une variété de services pour vos événements et cérémonies. Découvrez notre cuisine savoureuse, nos boissons raffinées et notre ambiance chaleureuse.

**Boutons :** `Voir le Menu` · `Nous Contacter`

**Barre d'informations :**
- Gitega, Quartier NYABIHARAGE
- 22 40 51 64 / 65 186 498
- lenoxgitega@gmail.com

## A.3 À propos

**Titre de section :** À Propos de Lenox

**Chapô :**
> Lenox Restaurant-Bar est votre destination de choix à Gitega pour une expérience culinaire exceptionnelle et des moments inoubliables.

**Sous-titre :** Notre Histoire

**Corps, paragraphe 1 :**
> Situé au cœur de Gitega dans le quartier NYABIHARAGE, Lenox Restaurant-Bar est un établissement qui allie tradition et modernité. Nous nous engageons à offrir une expérience gastronomique unique dans une ambiance conviviale et chaleureuse.

**Corps, paragraphe 2 :**
> Notre équipe passionnée travaille chaque jour pour vous proposer des plats savoureux, des boissons de qualité et des services d'exception pour tous vos événements.

**Chiffres clés :**

| Valeur | Libellé |
|---|---|
| 800+ | Capacité d'accueil |
| 50+ | Places de parking |
| Cuisine Variée | (sans libellé secondaire) |
| Événements | (sans libellé secondaire) |

> **Note de refonte :** les deux derniers « chiffres » n'en sont pas. Les remplacer par deux vraies métriques : nombre d'années d'existence et nombre d'événements accueillis par an. Demander les valeurs au client (Partie B).

**Quatre atouts (cartes actuelles) :**

| Titre | Texte |
|---|---|
| Cuisine Variée | Petits déjeuners, déjeuners et dîners savoureux avec des spécialités locales et internationales. |
| Animations | Musique live, karaoké, et performances de groupes en direct pour animer vos soirées. |
| Événements | Salle de réception pour plus de 800 personnes, idéale pour mariages et conférences. |
| Wi-Fi Gratuit | Connexion Internet haut débit disponible pour tous nos clients. |

## A.4 Services

**Titre de section :** Nos Services

**Chapô :**
> Découvrez la gamme complète de services que nous offrons pour faire de chaque moment une expérience mémorable.

### Restaurant
> Petits déjeuners, déjeuners et dîners savoureux avec une cuisine variée alliant spécialités locales et internationales.

- Cuisine africaine authentique
- Plats internationaux
- Service continu

### Bar
> Large gamme de boissons incluant les produits Brarudi, boissons internationales, vins, champagnes et cocktails.

- Bières locales
- Vins et champagnes
- Cocktails avec/sans alcool

### Animations
> Musique live, karaoké, performances de groupes et ambiance boîte de nuit pour prolonger vos soirées.

- Lenox Live Band
- Karaoké
- Ambiance boîte de nuit

### Salle de Réception
> Espace pouvant accueillir plus de 800 personnes pour vos cérémonies, mariages, conférences et séminaires.

- Capacité 800+ personnes
- Équipements modernes
- Service traiteur

### Parking
> Parking spacieux sécurisé pouvant accueillir plus de 50 voitures pour le confort de nos clients.

- 50+ places
- Sécurisé
- Accès facile

### Sécurité
> Sécurité de haut niveau pour garantir la tranquillité d'esprit de nos invités lors de tous les événements.

- Surveillance 24h/24
- Personnel qualifié
- Environnement sûr

## A.5 Galerie

**Titre de section :** Galerie

**Chapô :**
> Découvrez nos espaces élégants, notre cuisine raffinée et l'ambiance unique qui fait de Lenox un lieu d'exception.

**Légendes actuelles (12 images) :**

| # | Légende actuelle |
|---|---|
| 1 à 10 | Salle de réception *(répété dix fois à l'identique)* |
| 11 | Restaurant |
| 12 | Cuisine |

> **Note de refonte :** dix légendes identiques, c'est du remplissage. Chaque photo doit avoir une légende propre qui apprend quelque chose (« Mariage de 600 invités, mars 2025 », « Le bar au coucher du soleil », « Dressage cocktail pour séminaire »). À réécrire avec le client à partir des vraies photos.

## A.6 Contact

**Titre de section :** Contactez-Nous

**Chapô :**
> Nous sommes là pour vous accompagner dans l'organisation de vos événements et répondre à toutes vos questions.

**Bloc « Informations de Contact » :**

| Champ | Valeur |
|---|---|
| Adresse | Gitega, Quartier NYABIHARAGE RN16 |
| Téléphone 1 | 22 40 51 64 → format international : **+257 22 40 51 64** |
| Téléphone 2 | 65 186 498 → format international : **+257 65 186 498** |
| Email | lenoxgitega@gmail.com |
| Horaires | Ouvert tous les jours · Service continu |

**Bloc « Services Disponibles » :**
- Parking 50+ places
- Wi-Fi gratuit
- Salle 800+ personnes
- Sécurité 24h/24

**Formulaire « Envoyez-nous un Message » :**

| Champ | Type |
|---|---|
| Prénom | texte, requis |
| Nom | texte, requis |
| Email | email, requis |
| Téléphone | tel, requis |
| Type d'événement | select |
| Message | textarea, requis |
| Bouton | `Envoyer le Message` |

> **Note de refonte :** aucune option n'est définie pour le select « Type d'événement ». Proposer : Mariage · Conférence · Séminaire · Anniversaire · Soirée d'entreprise · Réservation de table · Autre.

## A.7 Ce qui est absent du site actuel

- Aucune **carte / menu** et **aucun prix**, alors que le hero promet « Voir le Menu ».
- Aucune section **Événements** dédiée (formules, capacités, configurations de salle).
- Aucun **témoignage** client.
- Aucune **carte de localisation** interactive.
- Aucune **date de création** de l'établissement.
- Aucun **horaire précis** (« service continu » n'est pas une heure d'ouverture).
- Aucun **réseau social** référencé.
- Aucune **traduction**, aucun **thème sombre**, aucune **animation**.

---

# PARTIE B — CONTENU À OBTENIR DU CLIENT

Le meilleur design du monde ne sauve pas du contenu faible. Rien ne se met en ligne sans ces éléments.

## B.1 Priorité critique (bloquant)

| # | Élément | Pourquoi c'est bloquant |
|---|---|---|
| 1 | **Carte avec prix en BIF** : 6 à 9 plats signature minimum, répartis en Petit-déjeuner / Déjeuner & dîner / Bar | Le hero promet « Voir le Menu » et ne mène nulle part. C'est une promesse rompue dès la première seconde. |
| 2 | **Photographie professionnelle** : salle vide dressée, salle en événement, façade de nuit, bar, 5 plats, équipe | L'investissement le plus rentable du projet. Un site élégant avec des photos floues reste un site raté. |
| 3 | **Horaires exacts par jour** (ex. Lun-Jeu 07h00-23h00, Ven-Sam 07h00-02h00, Dim 08h00-22h00) | Nécessaire pour l'indicateur « Ouvert maintenant » et pour le JSON-LD. |
| 4 | **Coordonnées GPS précises** de l'établissement | Carte interactive et référencement local. |
| 5 | **Traduction kirundi validée par un locuteur natif** | Une faute de langue coûte plus cher en crédibilité locale que l'absence de traduction. |

## B.2 Priorité haute

| # | Élément |
|---|---|
| 6 | Année de création de l'établissement (pour la ligne d'ancrage du hero) |
| 7 | Légendes réelles et distinctes pour chacune des 12+ photos |
| 8 | 2 à 3 témoignages clients avec nom, fonction, et photo si possible |
| 9 | Configurations de la salle : capacité en théâtre / banquet / cocktail |
| 10 | Tarifs ou fourchettes de location de la salle de réception |
| 11 | Numéro WhatsApp professionnel |
| 12 | Logo vectoriel (SVG) en version fond clair et fond sombre |

## B.3 Priorité normale

| # | Élément |
|---|---|
| 13 | Liens réseaux sociaux (Facebook, Instagram) |
| 14 | Institutions ou entreprises déjà accueillies, avec autorisation de citation |
| 15 | Carte complète en PDF téléchargeable |
| 16 | Nom et citation du propriétaire ou du chef, pour la bande éditoriale |
| 17 | Politique de réservation : acompte, délai, annulation |

---

# PARTIE C — FICHIER `fr.json` PRÊT À L'EMPLOI

Contenu source de la Partie A, structuré en clés i18n et **enrichi** là où le texte original était faible. Les valeurs entre chevrons `«»` sont à compléter avec les données de la Partie B.

Les fichiers `en.json` et `rn.json` doivent avoir **exactement les mêmes clés**.

```json
{
  "meta": {
    "title": "Lenox Restaurant-Bar Gitega | Salle de réception 800 places, restaurant et bar",
    "description": "Restaurant, bar et salle de réception de 800 places à Gitega, quartier NYABIHARAGE. Cuisine africaine et internationale, animations live, parking 50 places, sécurité 24h/24."
  },
  "nav": {
    "home": "Accueil",
    "about": "À propos",
    "services": "Services",
    "menu": "La carte",
    "events": "Événements",
    "gallery": "Galerie",
    "contact": "Contact",
    "book": "Réserver"
  },
  "hero": {
    "eyebrow": "Gitega · Quartier NYABIHARAGE · Depuis «année»",
    "title": "La table et la salle qui font les grands jours de Gitega",
    "lead": "Un lieu convivial pour vos événements et vos cérémonies. Cuisine savoureuse, boissons raffinées, ambiance chaleureuse.",
    "cta_primary": "Réserver une table",
    "cta_secondary": "Organiser un événement",
    "proof": "800+ invités · 50+ places de parking · Sécurité 24h/24 · Wi-Fi gratuit",
    "scroll": "Découvrir"
  },
  "about": {
    "title": "À Propos de Lenox",
    "lead": "Lenox Restaurant-Bar est votre destination de choix à Gitega pour une expérience culinaire exceptionnelle et des moments inoubliables.",
    "story_title": "Notre Histoire",
    "story_p1": "Situé au cœur de Gitega dans le quartier NYABIHARAGE, Lenox Restaurant-Bar est un établissement qui allie tradition et modernité. Nous nous engageons à offrir une expérience gastronomique unique dans une ambiance conviviale et chaleureuse.",
    "story_p2": "Notre équipe passionnée travaille chaque jour pour vous proposer des plats savoureux, des boissons de qualité et des services d'exception pour tous vos événements.",
    "quote": "«citation du propriétaire ou du chef»",
    "quote_author": "«Nom», «fonction»",
    "stats": {
      "capacity_value": "800+",
      "capacity_label": "Capacité d'accueil",
      "parking_value": "50+",
      "parking_label": "Places de parking",
      "years_value": "«nb»",
      "years_label": "Années à Gitega",
      "events_value": "«nb»",
      "events_label": "Événements par an"
    },
    "highlights": {
      "cuisine_title": "Cuisine Variée",
      "cuisine_body": "Petits déjeuners, déjeuners et dîners savoureux avec des spécialités locales et internationales.",
      "shows_title": "Animations",
      "shows_body": "Musique live, karaoké, et performances de groupes en direct pour animer vos soirées.",
      "events_title": "Événements",
      "events_body": "Salle de réception pour plus de 800 personnes, idéale pour mariages et conférences.",
      "wifi_title": "Wi-Fi Gratuit",
      "wifi_body": "Connexion Internet haut débit disponible pour tous nos clients."
    }
  },
  "services": {
    "title": "Nos Services",
    "lead": "Découvrez la gamme complète de services que nous offrons pour faire de chaque moment une expérience mémorable.",
    "restaurant": {
      "title": "Restaurant",
      "body": "Petits déjeuners, déjeuners et dîners savoureux avec une cuisine variée alliant spécialités locales et internationales.",
      "points": ["Cuisine africaine authentique", "Plats internationaux", "Service continu"]
    },
    "bar": {
      "title": "Bar",
      "body": "Large gamme de boissons incluant les produits Brarudi, boissons internationales, vins, champagnes et cocktails.",
      "points": ["Bières locales", "Vins et champagnes", "Cocktails avec ou sans alcool"]
    },
    "shows": {
      "title": "Animations",
      "body": "Musique live, karaoké, performances de groupes et ambiance boîte de nuit pour prolonger vos soirées.",
      "points": ["Lenox Live Band", "Karaoké", "Ambiance boîte de nuit"]
    },
    "hall": {
      "title": "Salle de Réception",
      "body": "Espace pouvant accueillir plus de 800 personnes pour vos cérémonies, mariages, conférences et séminaires.",
      "points": ["Capacité 800+ personnes", "Équipements modernes", "Service traiteur"]
    },
    "parking": {
      "title": "Parking",
      "body": "Parking spacieux sécurisé pouvant accueillir plus de 50 voitures pour le confort de nos clients.",
      "points": ["50+ places", "Sécurisé", "Accès facile"]
    },
    "security": {
      "title": "Sécurité",
      "body": "Sécurité de haut niveau pour garantir la tranquillité d'esprit de nos invités lors de tous les événements.",
      "points": ["Surveillance 24h/24", "Personnel qualifié", "Environnement sûr"]
    }
  },
  "menu": {
    "title": "La Carte",
    "lead": "Une sélection de nos plats signature. Carte complète disponible sur place.",
    "tab_breakfast": "Petit-déjeuner",
    "tab_main": "Déjeuner & dîner",
    "tab_bar": "Bar",
    "currency": "BIF",
    "download": "Télécharger la carte complète (PDF)",
    "note": "Les prix sont indiqués en francs burundais, service compris.",
    "items": "«à compléter : nom, description courte, prix pour 6 à 9 plats»"
  },
  "events": {
    "title": "Vos Événements",
    "lead": "Mariages, conférences, séminaires : une salle de 800 places, un parking de 50 voitures, une équipe qui gère tout.",
    "wedding_title": "Mariage",
    "wedding_body": "Salle en configuration banquet, service traiteur, sonorisation et Lenox Live Band.",
    "conference_title": "Conférence & séminaire",
    "conference_body": "Configuration théâtre, Wi-Fi haut débit, pauses café et déjeuners sur place.",
    "corporate_title": "Soirée d'entreprise",
    "corporate_body": "Cocktail dînatoire, bar complet, animation et sécurité dédiée.",
    "capacity_label": "Capacité",
    "layout_label": "Configuration",
    "included_label": "Inclus",
    "cta": "Demander un devis"
  },
  "gallery": {
    "title": "Galerie",
    "lead": "Découvrez nos espaces élégants, notre cuisine raffinée et l'ambiance unique qui fait de Lenox un lieu d'exception.",
    "filter_all": "Tout",
    "filter_hall": "Salle",
    "filter_restaurant": "Restaurant",
    "filter_bar": "Bar",
    "filter_events": "Événements",
    "filter_food": "Cuisine",
    "load_more": "Voir plus de photos",
    "counter": "{current} / {total}"
  },
  "contact": {
    "title": "Contactez-Nous",
    "lead": "Nous sommes là pour vous accompagner dans l'organisation de vos événements et répondre à toutes vos questions.",
    "info_title": "Informations de Contact",
    "address_label": "Adresse",
    "address_value": "Gitega, Quartier NYABIHARAGE, RN16",
    "phone_label": "Téléphone",
    "phone_1": "+257 22 40 51 64",
    "phone_2": "+257 65 186 498",
    "email_label": "Email",
    "email_value": "lenoxgitega@gmail.com",
    "hours_label": "Horaires",
    "hours_value": "Ouvert tous les jours, service continu",
    "open_now": "Ouvert maintenant",
    "closed_now": "Fermé, ouvre à {time}",
    "directions": "Ouvrir dans Maps",
    "whatsapp": "Écrire sur WhatsApp",
    "whatsapp_prefill": "Bonjour Lenox, je souhaite avoir des informations sur",
    "amenities_title": "Services Disponibles",
    "amenities": ["Parking 50+ places", "Wi-Fi gratuit", "Salle 800+ personnes", "Sécurité 24h/24"]
  },
  "form": {
    "title": "Envoyez-nous un Message",
    "firstname": "Prénom",
    "lastname": "Nom",
    "email": "Email",
    "phone": "Téléphone",
    "event_type": "Type d'événement",
    "event_options": ["Mariage", "Conférence", "Séminaire", "Anniversaire", "Soirée d'entreprise", "Réservation de table", "Autre"],
    "date": "Date souhaitée",
    "guests": "Nombre d'invités",
    "message": "Message",
    "submit": "Envoyer le Message",
    "sending": "Envoi en cours",
    "success_title": "Message reçu",
    "success_body": "Merci. Notre équipe vous répond sous 24 heures. Pour une demande urgente, appelez le +257 65 186 498.",
    "error": "L'envoi a échoué. Réessayez ou appelez-nous directement.",
    "required": "Ce champ est requis",
    "invalid_email": "Adresse email invalide",
    "invalid_phone": "Numéro de téléphone invalide"
  },
  "a11y": {
    "skip_to_content": "Aller au contenu",
    "toggle_theme": "Changer de thème",
    "theme_light": "Thème clair",
    "theme_dark": "Thème sombre",
    "select_language": "Choisir la langue",
    "open_menu": "Ouvrir le menu",
    "close_menu": "Fermer le menu",
    "close": "Fermer",
    "prev_image": "Image précédente",
    "next_image": "Image suivante"
  },
  "footer": {
    "tagline": "Restaurant, bar et salle de réception au cœur de Gitega.",
    "nav_title": "Navigation",
    "contact_title": "Contact",
    "hours_title": "Horaires",
    "follow": "Suivez-nous",
    "rights": "© 2026 Lenox Restaurant-Bar. Tous droits réservés.",
    "location": "Gitega, Burundi"
  }
}
```

## C.1 Glossaire de traduction

> Les colonnes **Ikirundi** sont une base de travail, **pas une traduction certifiée**. Ne pas publier la version RN sans relecture par un locuteur natif.

| Clé | Français | English | Ikirundi (à valider) |
|---|---|---|---|
| nav.home | Accueil | Home | Ahabanza |
| nav.about | À propos | About | Ivyerekeye Lenox |
| nav.services | Services | Services | Serivisi |
| nav.menu | La carte | Menu | Urutonde rw'ibifungurwa |
| nav.events | Événements | Events | Ibirori |
| nav.gallery | Galerie | Gallery | Amafoto |
| nav.contact | Contact | Contact | Twandikire |
| nav.book | Réserver | Book | Gufata ikibanza |
| hero.cta_primary | Réserver une table | Book a table | Gufata ikibanza c'ameza |
| hero.cta_secondary | Organiser un événement | Plan an event | Gutegura igitaramo |
| about.story_title | Notre Histoire | Our Story | Kahise kacu |
| about.stats.capacity_label | Capacité d'accueil | Guest capacity | Abashoboye kwakirwa |
| about.stats.parking_label | Places de parking | Parking spaces | Ibibanza vy'imodoka |
| services.restaurant.title | Restaurant | Restaurant | Iresitora |
| services.bar.title | Bar | Bar | Akabare |
| services.shows.title | Animations | Live entertainment | Uburyohe bw'umuziki |
| services.hall.title | Salle de Réception | Reception Hall | Inzu y'ibirori |
| services.parking.title | Parking | Parking | Ubwikinge bw'imodoka |
| services.security.title | Sécurité | Security | Umutekano |
| events.wedding_title | Mariage | Wedding | Ubukwe |
| events.conference_title | Conférence & séminaire | Conference & seminar | Amanama n'inyigisho |
| events.cta | Demander un devis | Request a quote | Kusaba igiciro |
| contact.address_label | Adresse | Address | Aderesi |
| contact.hours_label | Horaires | Opening hours | Amasaha |
| contact.open_now | Ouvert maintenant | Open now | Turafunguye |
| contact.closed_now | Fermé, ouvre à {time} | Closed, opens at {time} | Twugaye, tuzofungura saa {time} |
| form.submit | Envoyer le Message | Send message | Rungika ubutumwa |
| form.success_title | Message reçu | Message received | Ubutumwa bwaragiye |
| a11y.toggle_theme | Changer de thème | Toggle theme | Hindura ibara ry'urupapuro |
| a11y.select_language | Choisir la langue | Select language | Hitamwo ururimi |

---

# PARTIE 0 — CONTEXTE ET INTENTION

**L'établissement.** Lenox Restaurant-Bar, quartier NYABIHARAGE (RN16), Gitega, Burundi. Restaurant, bar, animations live, salle de réception 800+ personnes, parking 50+ places, Wi-Fi, sécurité 24h/24.

**Les publics, par ordre de priorité commerciale :**

1. **Organisateurs d'événements** (mariages, conférences, séminaires, ONG, institutions de la capitale politique). Panier le plus élevé. Ils cherchent : capacité, photos de la salle, parking, sécurité, un contact rapide.
2. **Clients restaurant / bar** du quotidien et du week-end. Ils cherchent : ambiance, carte, horaires, localisation.
3. **Diaspora et visiteurs internationaux.** Ils cherchent : crédibilité, anglais, photos, réservation à distance.

**Le problème du site actuel.** Le contenu est bon, la structure est logique, mais le rendu est générique : hiérarchie typographique plate, six cartes de services rigoureusement identiques, dix légendes de galerie identiques, aucune personnalité chromatique, aucune mise en scène de la salle de réception (l'atout n°1), aucun mouvement, aucune traduction, aucun thème sombre, et une promesse rompue dès le hero avec un bouton « Voir le Menu » qui ne mène à aucun menu. Le site *informe* mais ne *vend* pas.

**La cible.** Un visiteur doit sentir, en trois secondes et avant même de lire, que Lenox est le lieu le plus soigné de Gitega. Sensation recherchée : **chaleur maîtrisée**, pas luxe froid. Confiance, hospitalité, ancrage local assumé.

---

# PARTIE 1 — RÈGLES ABSOLUES

## 1.1 À faire, sans exception

- **Un seul fichier de tokens** (`:root` + `[data-theme="dark"]`). Aucune valeur de couleur, d'espacement, de rayon ou de durée écrite en dur dans le CSS des composants.
- **Couleurs en OKLCH uniquement.** Pas de hex, pas de HSL, pas de RGB dans le code final.
- **Mobile-first.** Toutes les media queries en `min-width`.
- **Tout texte visible passe par le système i18n.** Zéro chaîne de caractères en dur dans le HTML des sections traduisibles.
- **Tout élément interactif possède ses 6 états** : repos, survol, focus clavier, actif, désactivé, chargement.
- **`prefers-reduced-motion` respecté partout.**
- **Contraste WCAG AA minimum** (4.5:1 texte courant, 3:1 texte large et éléments d'interface), **dans les deux thèmes**.

## 1.2 Interdits stricts

Si l'un de ces éléments est sur le point d'être écrit, réécrire le composant autrement.

| Interdit | Pourquoi | À la place |
|---|---|---|
| `#000` et `#fff` purs | Vibration optique, rendu bon marché | Neutres teintés vers la teinte de marque |
| Texte en dégradé (`background-clip: text`) | Cliché « template 2019 » | Une couleur pleine, hiérarchie par graisse et taille |
| Bordure latérale colorée (`border-left: 4px`) sur cartes ou encadrés | Signature visuelle de gabarit générique | Bordure complète 1px, fond teinté, ou numéro/icône en tête |
| Glassmorphisme décoratif | Illisible, daté | Surfaces opaques. Exception unique : header au scroll |
| Grilles de cartes toutes identiques | Le défaut n°1 du site actuel | Tailles et traitements variés (voir §7.4) |
| Courbes `bounce` / `elastic` | Amateur | Courbes exponentielles ease-out |
| Animation de `width`, `height`, `top`, `left`, `margin` | Recalculs de layout, saccades | `transform` et `opacity` uniquement |
| Carrousel automatique en hero | Nuit au LCP, personne ne voit la 2e slide | Une image forte, ou une vidéo courte muette |
| Pop-up à l'arrivée | Fait fuir | Bandeau discret en bas si nécessaire |
| Emoji en guise d'iconographie | Incohérent entre OS | Jeu d'icônes SVG unique, trait 1.5px |
| Tirets cadratins (—) | Rendu aléatoire selon les polices | Virgules, deux-points, parenthèses |
| Lorem ipsum, images de stock de restaurants américains | Tue la crédibilité | Contenu réel de la Partie A, photos réelles |

---

# PARTIE 2 — STACK ET ARCHITECTURE

HTML / CSS / JS natifs. Pas de framework. Le site est une vitrine : vitesse et maintenabilité priment. Aucune dépendance lourde. jQuery interdit.

```
/
├── index.html
├── /assets
│   ├── /css
│   │   ├── tokens.css          # couleurs, typo, espacements, motion
│   │   ├── base.css            # reset, éléments HTML, utilitaires
│   │   ├── layout.css          # grilles, conteneurs, header, footer
│   │   ├── components.css      # boutons, champs, cartes, lightbox, onglets
│   │   └── sections.css        # styles propres à chaque section
│   ├── /js
│   │   ├── theme.js            # bascule clair/sombre + persistance
│   │   ├── i18n.js             # moteur de traduction
│   │   ├── reveal.js           # animations au scroll
│   │   ├── gallery.js          # filtres + lightbox
│   │   ├── hours.js            # indicateur ouvert/fermé
│   │   └── form.js             # validation + envoi + états
│   ├── /i18n
│   │   ├── fr.json             # ← contenu de la Partie C
│   │   ├── en.json
│   │   └── rn.json
│   ├── /img                    # AVIF + WebP + JPEG, plusieurs largeurs
│   └── /icons                  # sprite SVG unique
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

Un seul `<link>` CSS en production, scripts en `type="module" defer`. Le script anti-flash du thème est la seule exception : inline et bloquant dans le `<head>`.

---

# PARTIE 3 — SYSTÈME DE DESIGN

## 3.1 Stratégie chromatique

**Direction : « Colline et terre cuite ».** Un vert profond de plateau (le Kirimiro autour de Gitega) comme couleur de marque engagée, une terre cuite ambrée comme accent rare, des neutres crème tièdes.

**Pourquoi pas noir et or.** C'est le réflexe automatique de tout site de restaurant. Lenox ressemblerait à mille autres. Le vert profond + terre cuite est chaleureux, africain sans folklore, mémorable, et se décline parfaitement en thème sombre.

**Répartition (thème clair) :** 60% neutres crème, 30% vert de marque, 10% terre cuite. **La terre cuite ne fonctionne que parce qu'elle est rare.**

## 3.2 Tokens de couleur

```css
:root {
  color-scheme: light;

  /* Fonds et surfaces */
  --bg:            oklch(97.5% 0.008 85);
  --surface:       oklch(99.2% 0.004 85);
  --surface-2:     oklch(94.5% 0.012 85);
  --surface-inset: oklch(92% 0.014 85);

  /* Texte */
  --ink:           oklch(23% 0.020 155);
  --ink-2:         oklch(43% 0.018 155);
  --ink-3:         oklch(58% 0.014 155);
  --ink-on-brand:  oklch(97% 0.010 90);

  /* Marque : vert Kirimiro */
  --brand:         oklch(38% 0.060 155);
  --brand-hover:   oklch(32% 0.062 155);
  --brand-press:   oklch(28% 0.060 155);
  --brand-soft:    oklch(93% 0.022 155);
  --brand-line:    oklch(84% 0.030 155);

  /* Accent : terre cuite de Gitega */
  --accent:        oklch(64% 0.140 55);
  --accent-hover:  oklch(58% 0.142 52);
  --accent-soft:   oklch(94% 0.030 60);
  --accent-ink:    oklch(30% 0.090 50);

  /* Bordures */
  --line:          oklch(89% 0.012 85);
  --line-strong:   oklch(80% 0.016 85);

  /* Sémantique */
  --ok:            oklch(52% 0.110 155);
  --warn:          oklch(70% 0.130 75);
  --error:         oklch(52% 0.150 28);
  --error-soft:    oklch(95% 0.030 28);

  /* Élévation */
  --shadow-sm: 0 1px 2px oklch(23% 0.02 155 / 0.05);
  --shadow-md: 0 4px 12px oklch(23% 0.02 155 / 0.07), 0 1px 2px oklch(23% 0.02 155 / 0.05);
  --shadow-lg: 0 16px 40px oklch(23% 0.02 155 / 0.10), 0 2px 6px oklch(23% 0.02 155 / 0.06);
}

[data-theme="dark"] {
  color-scheme: dark;

  --bg:            oklch(16% 0.018 155);
  --surface:       oklch(20% 0.020 155);
  --surface-2:     oklch(24% 0.022 155);
  --surface-inset: oklch(13% 0.016 155);

  --ink:           oklch(94% 0.008 88);
  --ink-2:         oklch(78% 0.010 88);
  --ink-3:         oklch(62% 0.012 88);
  --ink-on-brand:  oklch(16% 0.018 155);

  --brand:         oklch(74% 0.085 155);
  --brand-hover:   oklch(80% 0.080 155);
  --brand-press:   oklch(68% 0.085 155);
  --brand-soft:    oklch(28% 0.035 155);
  --brand-line:    oklch(34% 0.040 155);

  --accent:        oklch(74% 0.115 58);
  --accent-hover:  oklch(80% 0.105 60);
  --accent-soft:   oklch(30% 0.045 55);
  --accent-ink:    oklch(84% 0.100 60);

  --line:          oklch(30% 0.020 155);
  --line-strong:   oklch(38% 0.024 155);

  --ok:            oklch(72% 0.110 155);
  --warn:          oklch(80% 0.110 78);
  --error:         oklch(70% 0.130 28);
  --error-soft:    oklch(28% 0.050 28);

  --shadow-sm: 0 1px 2px oklch(0% 0 0 / 0.30);
  --shadow-md: 0 4px 14px oklch(0% 0 0 / 0.35);
  --shadow-lg: 0 18px 44px oklch(0% 0 0 / 0.45);
}
```

**Règles d'usage.** Aucun neutre n'a une chroma nulle : le gris pur est mort. En thème sombre, jamais de noir pur, le fond s'arrête à 16% de clarté. La profondeur en sombre vient de surfaces **plus claires**, pas d'ombres. La transparence est réservée aux anneaux de focus, aux overlays et au header sticky.

## 3.3 Typographie

| Rôle | Police | Graisses | Usage |
|---|---|---|---|
| Display | **Fraunces** (variable, `opsz` activé) | 400, 600, 700 | h1, h2, chiffres clés, prix, citations |
| Texte et interface | **Manrope** | 400, 500, 600, 700 | paragraphes, navigation, boutons, champs |

Fraunces a du caractère sans tomber dans le Playfair Display que tout le monde utilise. Manrope apporte la chaleur géométrique sans concurrencer le display.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-text: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;

  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   clamp(1.125rem, 0.6vw + 1rem, 1.3125rem);
  --text-xl:   clamp(1.5rem, 1.2vw + 1.2rem, 2rem);
  --text-2xl:  clamp(2rem, 2.4vw + 1.4rem, 3rem);
  --text-3xl:  clamp(2.75rem, 5.5vw + 1rem, 5.5rem);

  --leading-tight: 1.05;
  --leading-snug:  1.25;
  --leading-body:  1.6;
  --tracking-caps: 0.10em;
  --tracking-display: -0.02em;
}
```

Cinq tailles, pas douze. Ratio minimum 1.25 entre deux niveaux. Longueur de ligne entre **62 et 72ch**. `text-wrap: balance` sur les titres, `pretty` sur les paragraphes, `font-optical-sizing: auto` sur `body`. `font-variant-numeric: tabular-nums` sur **tous** les chiffres alignés : prix, capacités, horaires, téléphones. En thème sombre, le corps passe à `font-weight: 380` avec `letter-spacing: 0.01em`.

## 3.4 Espacements et conteneurs

Base 4pt, nommage sémantique.

```css
:root {
  --space-3xs: 0.25rem;  --space-2xs: 0.5rem;   --space-xs: 0.75rem;
  --space-sm:  1rem;     --space-md:  1.5rem;   --space-lg: 2rem;
  --space-xl:  3rem;     --space-2xl: 4.5rem;   --space-3xl: 7rem;

  --section-y: clamp(4.5rem, 9vw, 9rem);
  --gutter:    clamp(1.25rem, 4vw, 3rem);

  --width-content: 68ch;
  --width-page:    1240px;
  --width-wide:    1520px;

  --radius-sm: 6px;  --radius-md: 12px;  --radius-lg: 20px;  --radius-pill: 999px;
}
```

**Le rythme est une décision.** Alterner délibérément : section dense, section aérée, section pleine largeur. Ne pas tout enfermer dans un conteneur : la galerie et la bande photo débordent, le texte reste dans sa mesure.

## 3.5 Motion

```css
:root {
  --dur-instant: 120ms;
  --dur-fast:    220ms;
  --dur-base:    320ms;
  --dur-slow:    480ms;
  --dur-reveal:  720ms;

  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);
}
```

Les sorties durent 75% de l'entrée. Jamais `ease` tout court. Jamais de rebond.

---

# PARTIE 4 — THÈME CLAIR / SOMBRE

## 4.1 Comportement

- **Le thème clair est le défaut absolu**, quelle que soit la configuration système du visiteur.
- Choix persisté dans `localStorage` sous `lenox-theme`, appliqué via `data-theme` sur `<html>`.

## 4.2 Le contrôle

Un seul bouton dans le header, à droite, avant le sélecteur de langue et le CTA. Soleil en clair, lune en sombre. Cible tactile 44×44px minimum. `aria-label` traduit, `aria-pressed` à jour. Rotation 90° + fondu croisé sur `--dur-base`. Sur mobile, il reste dans la barre supérieure, pas enterré dans le burger.

## 4.3 Anti-flash (obligatoire)

Inline, bloquant, dans le `<head>`, **avant tout CSS** :

```html
<script>
  (function () {
    try {
      var t = localStorage.getItem('lenox-theme');
      document.documentElement.dataset.theme = (t === 'dark' || t === 'light') ? t : 'light';
    } catch (e) { document.documentElement.dataset.theme = 'light'; }
  })();
</script>
```

## 4.4 Transition de bascule

```js
function setTheme(next) {
  const root = document.documentElement;
  root.classList.add('theme-transitioning');
  root.dataset.theme = next;
  localStorage.setItem('lenox-theme', next);
  document.querySelector('#theme-toggle')?.setAttribute('aria-pressed', String(next === 'dark'));
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', next === 'dark' ? '#1a221d' : '#faf7f2');
  setTimeout(() => root.classList.remove('theme-transitioning'), 300);
}
```

```css
.theme-transitioning, .theme-transitioning *,
.theme-transitioning *::before, .theme-transitioning *::after {
  transition: background-color 260ms var(--ease-out-quart),
              border-color 260ms var(--ease-out-quart),
              color 260ms var(--ease-out-quart),
              fill 260ms var(--ease-out-quart) !important;
}
```

## 4.5 Vigilance

Les photos passent en `filter: brightness(0.92) saturate(0.95)` en thème sombre, jamais le logo. Le logo a deux fichiers, pas un `filter: invert()`. Vérifier les contrastes des deux thèmes après chaque modification de token : le sombre casse plus souvent.

---

# PARTIE 5 — INTERNATIONALISATION FR / RN / EN

## 5.1 Principes

Français par défaut. Langues : `fr`, `rn` (Kirundi), `en`. Persistance dans `localStorage` sous `lenox-lang`. L'attribut `lang` de `<html>` change à chaque bascule. **Aucun rechargement de page.** Le paramètre `?lang=` en URL est prioritaire sur le stockage local, pour rendre les liens partageables.

## 5.2 Le sélecteur

Dans le header, à côté du bouton de thème. Affiche `FR`, `RN` ou `EN`. Menu déroulant via l'attribut natif `popover` (fermeture au clic extérieur, z-index et accessibilité gratuits). Chaque option affiche le nom **dans sa propre langue** : `Français`, `Ikirundi`, `English`. **Jamais de drapeaux** : le Kirundi n'est pas un pays. Option active en `aria-current="true"` + pastille terre cuite. Répété dans le footer.

## 5.3 Mécanisme

```html
<h2 data-i18n="about.title">À Propos de Lenox</h2>
<input data-i18n-attr="placeholder:form.email;aria-label:form.email">
<meta name="description" data-i18n-attr="content:meta.description">
```

```js
const SUPPORTED = ['fr', 'rn', 'en'];
const DEFAULT = 'fr';
const cache = new Map();

async function loadDict(lang) {
  if (cache.has(lang)) return cache.get(lang);
  const dict = await (await fetch(`/assets/i18n/${lang}.json`)).json();
  cache.set(lang, dict);
  return dict;
}

const get = (obj, path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);

export async function setLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT;
  const dict = await loadDict(lang);
  const fallback = lang === DEFAULT ? dict : await loadDict(DEFAULT);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = get(dict, key) ?? get(fallback, key) ?? '';
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      const val = get(dict, key) ?? get(fallback, key);
      if (val) el.setAttribute(attr, val);
    });
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lenox-lang', lang);
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
```

**Repli.** Clé manquante en RN ou EN → afficher le français. Jamais de clé brute ni de case vide à l'écran.

## 5.4 SEO multilingue

```html
<link rel="alternate" hreflang="fr" href="https://lenoxgitega.com/?lang=fr">
<link rel="alternate" hreflang="rn" href="https://lenoxgitega.com/?lang=rn">
<link rel="alternate" hreflang="en" href="https://lenoxgitega.com/?lang=en">
<link rel="alternate" hreflang="x-default" href="https://lenoxgitega.com/">
```

---

# PARTIE 6 — MOUVEMENT ET MICRO-INTERACTIONS

Le mouvement doit se **sentir** sans se **voir**. Une animation qui attire l'attention sur elle-même est ratée.

## 6.1 Défilement fluide

```css
html { scroll-behavior: smooth; scroll-padding-top: 88px; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

`scroll-padding-top` évite que le header sticky recouvre le titre ciblé. Bug classique.

## 6.2 Apparitions au scroll

`IntersectionObserver`, seuil 0.15, `rootMargin: "0px 0px -8% 0px"`, **déclenchement unique**. Aucune animation ne se rejoue au scroll inverse.

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--dur-reveal) var(--ease-out-expo),
              transform var(--dur-reveal) var(--ease-out-expo);
  transition-delay: calc(var(--i, 0) * 70ms);
  will-change: transform, opacity;
}
[data-reveal].is-visible { opacity: 1; transform: none; }
```

Cascade plafonnée à 6 éléments (420ms total). Amplitude maximale 24px. `will-change` retiré après apparition. Le hero n'attend pas le scroll : cascade en 3 temps au chargement.

## 6.3 Header

Transparent au-dessus du hero. Au-delà de 80px de scroll : fond `--surface` opaque à 92%, `backdrop-filter: blur(12px)`, bordure basse 1px, contenu resserré. **Ne pas animer la hauteur** : animer le `padding` interne et le `scale` du logo. Masquage au scroll descendant, réapparition au scroll montant, seuil de 12px contre le tremblement. Le lien de la section visible porte un souligné terre cuite animé en `scaleX`.

## 6.4 Catalogue des survols

| Élément | Comportement |
|---|---|
| Bouton primaire | `translateY(-2px)` + `--shadow-md` + `--brand-hover`. `:active` → `translateY(0)` + `scale(0.985)` en `--dur-instant` |
| Bouton contour | `box-shadow: inset 0 0 0 1px` s'épaissit, fond → `--brand-soft` |
| Lien texte | Souligné animé en `background-size: 0% 1.5px → 100% 1.5px`. Pas de `text-decoration` qui clignote |
| Lien de navigation | Souligné terre cuite en `scaleX` depuis la gauche, sort vers la droite |
| Bloc service | Ombre d'un cran, titre en `--brand`, icône `translateX(3px)`, bloc monte de 3px maximum |
| Photo de galerie | Image en `scale(1.06)` **dans** son cadre `overflow: hidden`, 600ms. Voile dégradé qui monte avec la légende. Le cadre ne bouge pas |
| Ligne de menu | Le prix passe en `--accent-ink`, les points de conduite s'assombrissent |
| Chiffre clé (800+, 50+) | Compteur animé au premier passage, 1200ms, easing out, une seule fois |
| Champ de formulaire | Bordure `--brand`, anneau `0 0 0 3px var(--brand-soft)`, libellé flottant qui monte |
| Tactile | Tous les survols neutralisés sous `@media (hover: none)`, `:active` prend le relais |

## 6.5 Effets signature

Deux maximum sur toute la page.

1. **Parallaxe du hero** à 0.4× la vitesse du scroll, en `translate3d()` dans un `requestAnimationFrame`. Désactivé sous 768px et sous `prefers-reduced-motion`.
2. **Bande photo horizontale de la salle de réception**, défilement continu 30s linéaire en boucle, pause au survol. C'est l'atout commercial n°1 : il mérite une mise en scène.

## 6.6 Ce qu'on n'anime jamais

Les prix, les horaires, les téléphones, les messages d'erreur. L'information critique s'affiche, elle ne se met pas en scène.

---

# PARTIE 7 — REFONTE SECTION PAR SECTION

## 7.1 En-tête

Logo à gauche (Fraunces 600 si le SVG n'est pas disponible en qualité suffisante). Navigation centrée : Accueil, À propos, Services, La carte, Événements, Galerie, Contact. À droite : sélecteur de langue, bouton de thème, CTA terre cuite **« Réserver »**.

Mobile : menu **plein écran**, pas un tiroir étriqué. Fond `--bg` opaque, entrées en Fraunces `--text-xl`, cascade de 60ms, fermeture sur Échap et au clic. Focus piégé, `inert` sur le reste. Lien d'évitement « Aller au contenu » en premier élément focusable.

## 7.2 Hero

**Problème actuel :** « LENOX / Restaurant - Bar » décrit, ne promet rien. Le bouton « Voir le Menu » ne mène à aucun menu.

**Refonte :**

- Hauteur `min(92vh, 900px)`. Pas 100vh : laisser voir le début de la section suivante invite au scroll.
- Image de fond : la **salle de réception dressée**, pas une assiette. C'est ce qui différencie Lenox. Voile dégradé bas-haut (`--brand` à 78% en bas, 20% en haut).
- Composition en trois temps :
  1. Sur-titre en capitales espacées, terre cuite : `GITEGA · NYABIHARAGE · DEPUIS «année»`
  2. h1 Fraunces 700, `--text-3xl` : **« La table et la salle qui font les grands jours de Gitega »**
  3. Chapô, 2 lignes maximum, 60ch, repris de l'accroche actuelle
- Deux CTA : **« Réserver une table »** (plein terre cuite) et **« Organiser un événement »** (contour clair). Le second est le plus rentable : il n'est pas secondaire, il est ciblé.
- Bandeau de preuve sur une ligne, séparé par des points médians : `800+ invités · 50+ places de parking · Sécurité 24h/24 · Wi-Fi gratuit`. Une ligne de confiance dense, pas quatre grosses cartes.
- Indicateur de scroll : trait vertical de 32px animé en boucle lente, disparaît au premier scroll.

## 7.3 À propos

- Mise en page **asymétrique** 7/5, pas 50/50. Le 50/50 est mou.
- Photo verticale de l'équipe ou de la salle, légèrement débordante, avec une bande terre cuite décalée de 24px en bas à droite derrière elle.
- Les quatre chiffres en Fraunces `--text-2xl` couleur `--brand`, libellés en capitales espacées dessous, alignés sur une ligne et séparés par des filets verticaux 1px. **Pas dans quatre cartes.** Remplacer « Cuisine Variée » et « Événements » par deux vraies métriques (Partie B).
- Bande pleine largeur en `--brand` avec la citation du propriétaire en Fraunces 400 italique `--text-xl`. C'est la respiration de la page et le moment humain.

## 7.4 Services

**Problème actuel :** six cartes rigoureusement identiques. L'anti-design par excellence.

**Refonte, grille éditoriale asymétrique :**

- **Salle de Réception** : bloc large, 2 colonnes sur 3, photo de fond, texte en surimpression. C'est le produit vedette.
- **Restaurant** et **Bar** : deux blocs moyens côte à côte, photo carrée en tête, points en dessous.
- **Animations** : bloc large horizontal, photo à gauche, texte à droite, « Lenox Live Band » mis en avant.
- **Parking** et **Sécurité** : deux blocs compacts, sans photo, icône + une ligne. Ce sont des rassurances, pas des arguments de vente : ils ne méritent pas le même poids visuel.

Les listes de points prennent un tiret court terre cuite ou un numéro en Fraunces. Pas de coche verte générique.

## 7.5 La carte (nouvelle section)

La promesse rompue du site actuel. Priorité absolue.

- Sélection éditoriale de 6 à 9 plats signature, pas la carte complète. Nom, description courte, prix en BIF avec `tabular-nums`.
- Deux colonnes typographiques avec une ligne de points de conduite entre le nom et le prix. Traitement de carte imprimée, très élégant en web quand c'est bien fait.
- Onglets : Petit-déjeuner · Déjeuner & dîner · Bar. Transition en fondu, hauteur en `grid-template-rows: 0fr → 1fr`.
- Lien « Télécharger la carte complète (PDF) ».
- Mention Brarudi mise en avant dans l'onglet Bar : c'est un repère local fort.

## 7.6 Événements (nouvelle section)

La section la plus rentable, absente du site actuel. À placer entre Services et Galerie.

- Trois formules en colonnes : **Mariage**, **Conférence & séminaire**, **Soirée d'entreprise**.
- Pour chacune : capacité indicative, configuration de salle (théâtre, banquet, cocktail), services inclus, CTA « Demander un devis » qui pré-remplit le champ « Type d'événement » du formulaire.
- Un plan ou une photo de la salle en configuration : un chiffre abstrait ne convainc pas, une salle pleine si.
- Bandeau des institutions déjà accueillies si l'autorisation est obtenue. Preuve sociale maximale à Gitega.

## 7.7 Galerie

**Problème actuel :** dix vignettes intitulées « Salle de réception » à l'identique. Zéro valeur informative.

**Refonte :**

- **Filtres** : Tout · Salle · Restaurant · Bar · Événements · Cuisine. Pilules, actif en `--brand` plein. Transition via View Transition API si disponible, repli en fondu 200ms.
- **Grille en mosaïque**, pas un damier régulier : `grid-auto-flow: dense`, quelques éléments en `span 2`. Les meilleures photos prennent plus de place.
- **Légendes réelles et distinctes.** Chaque légende doit apprendre quelque chose.
- **Lightbox** en `<dialog>` natif avec `showModal()` : piège de focus et Échap gratuits. Flèches clavier, glissement tactile, compteur « 4 / 12 », légende. Fond `--surface-inset` opaque. Entrée `scale(0.96) → 1` + fondu sur `--dur-slow`, sortie à 75%.
- `loading="lazy"` sauf les deux premières, `width`/`height` explicites. CLS à zéro.

## 7.8 Contact

- Deux colonnes : informations à gauche, formulaire à droite. Sur mobile, les informations passent **en premier** : un client sur téléphone veut appeler, pas remplir un formulaire.
- **Carte interactive** (Leaflet/OSM ou Google Maps en iframe `lazy`), marqueur sur NYABIHARAGE RN16, bouton « Ouvrir dans Maps », style adapté au thème actif.
- **Indicateur d'ouverture en direct** : pastille verte pulsante + « Ouvert maintenant » ou « Fermé, ouvre à 07h00 », calculé en JS sur le fuseau `Africa/Bujumbura`. Détail à fort impact de crédibilité.
- Téléphones en liens `tel:` au format international : `+257 22 40 51 64` et `+257 65 186 498`.
- **Bouton WhatsApp flottant** en bas à droite, message pré-rempli traduit selon la langue active. Au Burundi, WhatsApp convertit mieux que n'importe quel formulaire. Apparition après 400px de scroll en `scale(0.8) → 1` + fondu.

## 7.9 Formulaire

- Champs : Prénom, Nom, Email, Téléphone, Type d'événement (select avec les 7 options de la Partie C), Date souhaitée, Nombre d'invités, Message.
- **Libellés flottants**, jamais de placeholder utilisé comme libellé.
- Validation **au `blur`**, jamais à la frappe. Corriger quelqu'un pendant qu'il tape est hostile.
- Erreurs : bordure `--error`, message sous le champ avec `role="alert"`, `aria-invalid="true"`. Pas de secousse.
- Bouton d'envoi : état « Envoi en cours », indicateur circulaire, désactivé, largeur figée contre le saut de layout.
- Succès : le formulaire est remplacé sur place par la confirmation avec coche animée et rappel du délai de réponse. Pas d'alerte navigateur, pas de redirection.
- Honeypot anti-spam + limitation de fréquence côté serveur.

## 7.10 Pied de page

Fond `--brand` plein, texte `--ink-on-brand`. C'est l'ancrage visuel de la page. Quatre colonnes : identité et baseline, navigation, contact, horaires. Réseaux sociaux en SVG monochromes, survol terre cuite. Ligne de bas : `© 2026 Lenox Restaurant-Bar · Gitega, Burundi`. Le sélecteur de langue est **répété** ici : beaucoup d'utilisateurs le cherchent là.

---

# PARTIE 8 — ACCESSIBILITÉ

Non négociable, et bon pour le SEO.

- Un seul `<h1>`. Hiérarchie de titres sans saut de niveau.
- `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- `alt` descriptif et traduit sur chaque image. `alt=""` sur les décoratives.
- `:focus-visible` partout : anneau 3px `--accent`, `outline-offset: 2px`. **Jamais `outline: none` sans remplacement.**
- Navigation clavier complète : menu, langue, lightbox, onglets de la carte.
- Cibles tactiles 44×44px minimum.
- Contrastes vérifiés dans les deux thèmes. Attention à la terre cuite sur crème : `--accent-ink` pour le texte, `--accent` pour les fonds et bordures uniquement.
- Parallaxe et bande défilante coupés sous `prefers-reduced-motion`.

---

# PARTIE 9 — PERFORMANCE

Le Burundi est un marché majoritairement mobile, souvent en 3G. **La performance n'est pas une optimisation, c'est une condition d'accès.**

| Métrique | Cible |
|---|---|
| LCP | < 2,0 s en 3G rapide simulée |
| CLS | < 0,05 |
| INP | < 200 ms |
| Poids première vue | < 900 Ko |
| Lighthouse Performance | ≥ 92 mobile |

- Images en **AVIF** avec repli **WebP** puis JPEG via `<picture>`. `srcset` en 480 / 768 / 1200 / 1920 avec un `sizes` correct.
- `width` et `height` explicites sur **chaque** image. Première cause de CLS.
- `fetchpriority="high"` sur l'image du hero, `loading="lazy"` + `decoding="async"` partout ailleurs.
- Polices : `display=swap`, préconnexion, **subset latin uniquement**, 4 graisses maximum au total.
- CSS critique inline pour le hero.
- Aucune bibliothèque JS lourde. Animations en CSS ou `IntersectionObserver`.
- La carte est chargée **à la demande** : une image statique cliquable qui charge la carte réelle au clic. Économie de 400 Ko+.
- Listeners de scroll en `requestAnimationFrame` et `{ passive: true }`.

---

# PARTIE 10 — SEO ET MÉTADONNÉES

- `<title>` traduit : `Lenox Restaurant-Bar Gitega | Salle de réception 800 places, restaurant et bar`
- Meta description traduite, 150 à 160 caractères, avec appel à l'action.
- Open Graph et Twitter Card complets, image 1200×630 montrant la salle.
- Favicon complet (ICO, PNG 192/512, Apple touch icon) et `manifest.webmanifest`.
- `robots.txt` + `sitemap.xml`.
- **JSON-LD `Restaurant`** dans le `<head>` :

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Lenox Restaurant-Bar",
  "image": "https://lenoxgitega.com/assets/img/og.jpg",
  "url": "https://lenoxgitega.com/",
  "telephone": "+25722405164",
  "email": "lenoxgitega@gmail.com",
  "servesCuisine": ["African", "International"],
  "priceRange": "«à compléter»",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Quartier NYABIHARAGE, RN16",
    "addressLocality": "Gitega",
    "addressCountry": "BI"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "«à corriger»", "longitude": "«à corriger»" },
  "openingHours": "«à compléter avec les horaires réels»",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuit", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Salle de réception 800 places", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Musique live", "value": true }
  ]
}
```

- Créer et relier un profil **Google Business**. Pour un établissement local, c'est souvent la première source de trafic, devant le site lui-même.

---

# PARTIE 11 — RESPONSIVE

| Palier | Comportement |
|---|---|
| < 640px | Une colonne. Menu plein écran. Contact avant formulaire. Hero à 88vh, h1 plafonné à 2,75rem. Galerie 1 colonne, 6 images puis « Voir plus ». Parallaxe désactivé. Carte du menu en une colonne, prix alignés à droite. |
| 640 à 1023px | Deux colonnes services et galerie. Burger conservé. Grille éditoriale simplifiée. |
| 1024 à 1279px | Navigation horizontale complète. Grille asymétrique active. Contact en deux colonnes. |
| ≥ 1280px | Pleine composition. `--width-page` à 1240px, galerie élargie à `--width-wide`. |

Privilégier `clamp`, `auto-fit`, `minmax` aux media queries. `@container` pour les composants réutilisés. **Ne pas rétrécir le desktop** : sur mobile, appeler et localiser passent devant tout.

---

# PARTIE 12 — RECETTE FINALE

Une case non cochée = pas de mise en ligne.

**Contenu**
- [ ] Tous les textes de la Partie A sont présents ou volontairement remplacés par une meilleure version.
- [ ] La section « La carte » existe et affiche de vrais prix en BIF.
- [ ] Le bouton du hero mène réellement à la carte.
- [ ] Les 12 photos ont des légendes distinctes.
- [ ] Les horaires réels remplacent « service continu ».

**Design**
- [ ] Test du plissement des yeux passé : hiérarchie lisible sur chaque section floutée.
- [ ] Aucun interdit du §1.2 présent dans le code.
- [ ] Aucune couleur en dur hors du fichier de tokens.
- [ ] Le rythme d'espacement varie entre les sections.
- [ ] Les services ne sont pas six blocs identiques.

**Thème**
- [ ] Aucun flash blanc au chargement en thème sombre.
- [ ] Le choix persiste après rechargement.
- [ ] Contrastes AA validés dans les deux thèmes, section par section.
- [ ] Le logo est correct sur les deux fonds.
- [ ] La barre d'adresse mobile suit le thème.

**Langues**
- [ ] Zéro texte en dur.
- [ ] Les trois JSON ont exactement les mêmes clés.
- [ ] `<html lang>` change avec la langue.
- [ ] Repli français fonctionnel, aucune clé brute affichée.
- [ ] La version kirundi a été relue par un natif.
- [ ] Les mises en page tiennent avec l'anglais (plus court) et le kirundi (plus long). Tester les débordements de boutons.

**Interaction**
- [ ] Navigation clavier complète, focus toujours visible.
- [ ] `prefers-reduced-motion` neutralise réellement tout.
- [ ] Aucune animation ne se rejoue au scroll inverse.
- [ ] Le formulaire gère : vide, erreur, chargement, succès, échec réseau.
- [ ] Survols neutralisés sur tactile.

**Technique**
- [ ] Lighthouse ≥ 92 / 95 / 100 / 100 en mobile.
- [ ] CLS < 0,05, aucune image sans dimensions.
- [ ] Testé sur Chrome, Safari iOS, Firefox, et un Android d'entrée de gamme en 3G bridée.
- [ ] JSON-LD validé par l'outil de test des résultats enrichis de Google.
- [ ] HTTPS, redirection www, page 404 personnalisée et traduite.
- [ ] Le formulaire envoie réellement un email, et il arrive hors spam.

---

# PARTIE 13 — ORDRE D'EXÉCUTION

| Phase | Contenu | Livrable |
|---|---|---|
| 0 | Collecte du contenu de la Partie B (carte, photos, horaires, GPS) | **Bloquant.** Le développement peut démarrer en parallèle, la mise en ligne non. |
| 1 | Tokens, typographie, base CSS, reset | Le socle. Rien ne commence avant. |
| 2 | Thème clair/sombre + anti-flash | Bascule fonctionnelle sur page nue |
| 3 | Moteur i18n + les 3 JSON (FR complet via Partie C, EN complet, RN provisoire) | Changement de langue fonctionnel |
| 4 | Header, hero, footer | La première impression, **à valider avant tout le reste** |
| 5 | À propos, Services, Événements | Le cœur commercial |
| 6 | La carte, Galerie, lightbox | |
| 7 | Contact, carte de localisation, formulaire, WhatsApp | |
| 8 | Motion : apparitions, parallaxe, bande photo | Ajouté **en dernier**, sur une base solide |
| 9 | Accessibilité, performance, SEO, recette | |

**Faire valider la phase 4 par le client avant d'aller plus loin.** Si le hero ne le fait pas vibrer, tout le reste est à refaire.

---

# PARTIE 14 — PROMPT DE DÉMARRAGE POUR L'AGENT

> Tu vas refondre le site de Lenox Restaurant-Bar (Gitega, Burundi) en HTML, CSS et JavaScript natifs, sans framework.
>
> Le présent fichier est ta référence unique. Lis-le intégralement avant d'écrire une ligne de code.
>
> Le contenu textuel se trouve en **Partie A** (extrait du site actuel, à conserver) et en **Partie C** (fichier `fr.json` prêt à l'emploi). N'invente aucun texte : utilise ceux-là. Là où tu vois «chevrons», c'est une donnée manquante à demander au client, pas à inventer. Ne remplis jamais un prix, une date ou un horaire par une valeur plausible.
>
> Les §1.2 (interdits), §3 (tokens) et §12 (recette) ne sont pas négociables.
>
> Travaille phase par phase selon le §13. À la fin de chaque phase, arrête-toi, présente le résultat et relis ton propre code contre le §1.2 et la recette du §12 avant de continuer.
>
> Critère de réussite : un visiteur ne doit pas pouvoir deviner que ce site a été assemblé à partir d'un gabarit. Chaque section doit avoir une raison d'être visuelle propre. Si une section ressemble à une grille de cartes générique, réécris-la.
>
> En cas de doute sur une décision esthétique, choisis la version la plus sobre et la plus contrastée. L'élégance vient de la retenue et de la précision, jamais de l'accumulation d'effets.

---

*Fin du cahier. Toute modification de ce document doit être répercutée dans la recette du §12.*
