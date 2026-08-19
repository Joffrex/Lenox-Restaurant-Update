/**
 * LENOX Restaurant-Bar — Internationalisation (i18n)
 * Dictionnaires inline (pas de fetch) → fonctionne via file:// et HTTP
 * FR / EN / RN (Kirundi) — repli français
 */

(function () {
  'use strict';

  // ============================================================
  // DICTIONNAIRES INLINE — pas de fetch(), pas de dépendance serveur
  // ============================================================
  var DICTS = {
    fr: {
      meta: {
        title: "Lenox Restaurant-Bar Gitega | Salle de réception 800 places, restaurant et bar",
        description: "Restaurant, bar et salle de réception de 800 places à Gitega, quartier NYABIHARAGE. Cuisine africaine et internationale, animations live, parking 50 places, sécurité 24h/24."
      },
      nav: { home: "Accueil", about: "À propos", services: "Services", menu: "La carte", events: "Événements", gallery: "Galerie", contact: "Contact", book: "Réserver" },
      hero: {
        eyebrow: "Gitega · Quartier NYABIHARAGE · Depuis 20XX",
        title: "La table et la salle qui font les grands jours de Gitega",
        lead: "Un lieu convivial pour vos événements et vos cérémonies. Cuisine savoureuse, boissons raffinées, ambiance chaleureuse.",
        cta_primary: "Réserver une table",
        cta_secondary: "Organiser un événement",
        proof: "800+ invités · 50+ places de parking · Sécurité 24h/24 · Wi-Fi gratuit",
        scroll: "Découvrir"
      },
      about: {
        title: "À Propos de Lenox",
        lead: "Lenox Restaurant-Bar est votre destination de choix à Gitega pour une expérience culinaire exceptionnelle et des moments inoubliables.",
        story_title: "Notre Histoire",
        story_p1: "Situé au cœur de Gitega dans le quartier NYABIHARAGE, Lenox Restaurant-Bar est un établissement qui allie tradition et modernité. Nous nous engageons à offrir une expérience gastronomique unique dans une ambiance conviviale et chaleureuse.",
        story_p2: "Notre équipe passionnée travaille chaque jour pour vous proposer des plats savoureux, des boissons de qualité et des services d'exception pour tous vos événements.",
        quote: "«citation du propriétaire ou du chef»",
        quote_author: "«Nom», «fonction»",
        stats: { capacity_value: "800+", capacity_label: "Capacité d'accueil", parking_value: "50+", parking_label: "Places de parking", years_value: "«nb»", years_label: "Années à Gitega", events_value: "«nb»", events_label: "Événements par an" },
        highlights: {
          cuisine_title: "Cuisine Variée", cuisine_body: "Petits déjeuners, déjeuners et dîners savoureux avec des spécialités locales et internationales.",
          shows_title: "Animations", shows_body: "Musique live, karaoké, et performances de groupes en direct pour animer vos soirées.",
          events_title: "Événements", events_body: "Salle de réception pour plus de 800 personnes, idéale pour mariages et conférences.",
          wifi_title: "Wi-Fi Gratuit", wifi_body: "Connexion Internet haut débit disponible pour tous nos clients."
        }
      },
      services: {
        title: "Nos Services",
        lead: "Découvrez la gamme complète de services que nous offrons pour faire de chaque moment une expérience mémorable.",
        restaurant: { title: "Restaurant", body: "Petits déjeuners, déjeuners et dîners savoureux avec une cuisine variée alliant spécialités locales et internationales.", points: ["Cuisine africaine authentique", "Plats internationaux", "Service continu"] },
        bar: { title: "Bar", body: "Large gamme de boissons incluant les produits Brarudi, boissons internationales, vins, champagnes et cocktails.", points: ["Bières locales", "Vins et champagnes", "Cocktails avec ou sans alcool"] },
        shows: { title: "Animations", body: "Musique live, karaoké, performances de groupes et ambiance boîte de nuit pour prolonger vos soirées.", points: ["Lenox Live Band", "Karaoké", "Ambiance boîte de nuit"] },
        hall: { title: "Salle de Réception", body: "Espace pouvant accueillir plus de 800 personnes pour vos cérémonies, mariages, conférences et séminaires.", points: ["Capacité 800+ personnes", "Équipements modernes", "Service traiteur"] },
        parking: { title: "Parking", body: "Parking spacieux sécurisé pouvant accueillir plus de 50 voitures pour le confort de nos clients.", points: ["50+ places", "Sécurisé", "Accès facile"] },
        security: { title: "Sécurité", body: "Sécurité de haut niveau pour garantir la tranquillité d'esprit de nos invités lors de tous les événements.", points: ["Surveillance 24h/24", "Personnel qualifié", "Environnement sûr"] }
      },
      menu: {
        title: "La Carte",
        lead: "Une sélection de nos plats signature. Carte complète disponible sur place.",
        tab_breakfast: "Petit-déjeuner",
        tab_main: "Déjeuner & dîner",
        tab_bar: "Bar",
        currency: "BIF",
        download: "Télécharger la carte complète (PDF)",
        note: "Les prix sont indiqués en francs burundais, service compris."
      },
      events: {
        title: "Vos Événements",
        lead: "Mariages, conférences, séminaires : une salle de 800 places, un parking de 50 voitures, une équipe qui gère tout.",
        wedding_title: "Mariage",
        wedding_body: "Salle en configuration banquet, service traiteur, sonorisation et Lenox Live Band.",
        conference_title: "Conférence & séminaire",
        conference_body: "Configuration théâtre, Wi-Fi haut débit, pauses café et déjeuners sur place.",
        corporate_title: "Soirée d'entreprise",
        corporate_body: "Cocktail dînatoire, bar complet, animation et sécurité dédiée.",
        capacity_label: "Capacité",
        layout_label: "Configuration",
        included_label: "Inclus",
        cta: "Demander un devis"
      },
      gallery: {
        title: "Galerie",
        lead: "Découvrez nos espaces élégants, notre cuisine raffinée et l'ambiance unique qui fait de Lenox un lieu d'exception.",
        filter_all: "Tout",
        filter_hall: "Salle",
        filter_restaurant: "Restaurant",
        filter_bar: "Bar",
        filter_events: "Événements",
        filter_food: "Cuisine",
        load_more: "Voir plus de photos",
        counter: "{current} / {total}"
      },
      contact: {
        title: "Contactez-Nous",
        lead: "Nous sommes là pour vous accompagner dans l'organisation de vos événements et répondre à toutes vos questions.",
        info_title: "Informations de Contact",
        address_label: "Adresse",
        address_value: "Gitega, Quartier NYABIHARAGE, RN16",
        phone_label: "Téléphone",
        phone_1: "+257 22 40 51 64",
        phone_2: "+257 65 186 498",
        email_label: "Email",
        email_value: "lenoxgitega@gmail.com",
        hours_label: "Horaires",
        hours_value: "Ouvert tous les jours, service continu",
        open_now: "Ouvert maintenant",
        closed_now: "Fermé, ouvre à {time}",
        directions: "Ouvrir dans Maps",
        whatsapp: "Écrire sur WhatsApp",
        whatsapp_prefill: "Bonjour Lenox, je souhaite avoir des informations sur",
        amenities_title: "Services Disponibles",
        amenities: ["Parking 50+ places", "Wi-Fi gratuit", "Salle 800+ personnes", "Sécurité 24h/24"]
      },
      form: {
        title: "Envoyez-nous un Message",
        firstname: "Prénom",
        lastname: "Nom",
        email: "Email",
        phone: "Téléphone",
        event_type: "Type d'événement",
        event_options: ["Mariage", "Conférence", "Séminaire", "Anniversaire", "Soirée d'entreprise", "Réservation de table", "Autre"],
        date: "Date souhaitée",
        guests: "Nombre d'invités",
        message: "Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours",
        success_title: "Message reçu",
        success_body: "Merci. Notre équipe vous répond sous 24 heures. Pour une demande urgente, appelez le +257 65 186 498.",
        error: "L'envoi a échoué. Réessayez ou appelez-nous directement.",
        required: "Ce champ est requis",
        invalid_email: "Adresse email invalide",
        invalid_phone: "Numéro de téléphone invalide"
      },
      a11y: {
        skip_to_content: "Aller au contenu",
        toggle_theme: "Changer de thème",
        theme_light: "Thème clair",
        theme_dark: "Thème sombre",
        select_language: "Choisir la langue",
        open_menu: "Ouvrir le menu",
        close_menu: "Fermer le menu",
        close: "Fermer",
        prev_image: "Image précédente",
        next_image: "Image suivante"
      },
      footer: {
        tagline: "Restaurant, bar et salle de réception au cœur de Gitega.",
        nav_title: "Navigation",
        contact_title: "Contact",
        hours_title: "Horaires",
        follow: "Suivez-nous",
        rights: "© 2026 Lenox Restaurant-Bar. Tous droits réservés.",
        location: "Gitega, Burundi"
      }
    },

    en: {
      meta: {
        title: "Lenox Restaurant-Bar Gitega | Reception Hall 800 seats, restaurant and bar",
        description: "Restaurant, bar and reception hall for 800 guests in Gitega, NYABIHARAGE district. African and international cuisine, live entertainment, 50 parking spaces, 24/7 security."
      },
      nav: { home: "Home", about: "About", services: "Services", menu: "Menu", events: "Events", gallery: "Gallery", contact: "Contact", book: "Book" },
      hero: {
        eyebrow: "Gitega · NYABIHARAGE District · Since 20XX",
        title: "The table and hall that make Gitega's greatest days",
        lead: "A welcoming venue for your events and ceremonies. Delicious cuisine, refined drinks, warm atmosphere.",
        cta_primary: "Book a Table",
        cta_secondary: "Plan an Event",
        proof: "800+ guests · 50+ parking spaces · 24/7 security · Free Wi-Fi",
        scroll: "Discover"
      },
      about: {
        title: "About Lenox",
        lead: "Lenox Restaurant-Bar is your premier destination in Gitega for an exceptional dining experience and unforgettable moments.",
        story_title: "Our Story",
        story_p1: "Located in the heart of Gitega in the NYABIHARAGE district, Lenox Restaurant-Bar is an establishment that blends tradition and modernity. We are committed to offering a unique gastronomic experience in a friendly and warm atmosphere.",
        story_p2: "Our passionate team works every day to bring you delicious food, quality drinks and exceptional services for all your events.",
        quote: "«owner or chef quote»",
        quote_author: "«Name», «title»",
        stats: { capacity_value: "800+", capacity_label: "Capacity", parking_value: "50+", parking_label: "Parking Spaces", years_value: "«n»", years_label: "Years in Gitega", events_value: "«n»", events_label: "Events per year" },
        highlights: {
          cuisine_title: "Varied Cuisine", cuisine_body: "Breakfasts, lunches and dinners with local and international specialties.",
          shows_title: "Entertainment", shows_body: "Live music, karaoke, and live band performances to liven up your evenings.",
          events_title: "Events", events_body: "Reception hall for over 800 people, ideal for weddings and conferences.",
          wifi_title: "Free Wi-Fi", wifi_body: "High-speed internet connection available for all our customers."
        }
      },
      services: {
        title: "Our Services",
        lead: "Discover the full range of services we offer to make every moment a memorable experience.",
        restaurant: { title: "Restaurant", body: "Breakfasts, lunches and dinners with a varied menu combining local and international specialties.", points: ["Authentic African cuisine", "International dishes", "Continuous service"] },
        bar: { title: "Bar", body: "Wide range of drinks including Brarudi products, international beverages, wines, champagnes and cocktails.", points: ["Local beers", "Wines and champagnes", "Cocktails with or without alcohol"] },
        shows: { title: "Entertainment", body: "Live music, karaoke, band performances and nightclub atmosphere to extend your evenings.", points: ["Lenox Live Band", "Karaoke", "Nightclub atmosphere"] },
        hall: { title: "Reception Hall", body: "Space for over 800 people for your ceremonies, weddings, conferences and seminars.", points: ["800+ person capacity", "Modern equipment", "Catering service"] },
        parking: { title: "Parking", body: "Secure spacious parking for over 50 cars for the comfort of our customers.", points: ["50+ spaces", "Secured", "Easy access"] },
        security: { title: "Security", body: "High-level security to ensure peace of mind for our guests at all events.", points: ["24/7 surveillance", "Qualified staff", "Safe environment"] }
      },
      menu: {
        title: "Our Menu",
        lead: "A selection of our signature dishes. Full menu available on site.",
        tab_breakfast: "Breakfast",
        tab_main: "Lunch & dinner",
        tab_bar: "Bar",
        currency: "BIF",
        download: "Download full menu (PDF)",
        note: "Prices are in Burundian francs, service included."
      },
      events: {
        title: "Your Events",
        lead: "Weddings, conferences, seminars: an 800-seat hall, 50-car parking, a team that handles everything.",
        wedding_title: "Wedding",
        wedding_body: "Banquet layout, catering service, sound system and Lenox Live Band.",
        conference_title: "Conference & seminar",
        conference_body: "Theatre layout, high-speed Wi-Fi, coffee breaks and lunches on site.",
        corporate_title: "Corporate evening",
        corporate_body: "Cocktail dinner, full bar, entertainment and dedicated security.",
        capacity_label: "Capacity",
        layout_label: "Layout",
        included_label: "Included",
        cta: "Request a quote"
      },
      gallery: {
        title: "Gallery",
        lead: "Discover our elegant spaces, refined cuisine and the unique atmosphere that makes Lenox an exceptional venue.",
        filter_all: "All",
        filter_hall: "Hall",
        filter_restaurant: "Restaurant",
        filter_bar: "Bar",
        filter_events: "Events",
        filter_food: "Food",
        load_more: "See more photos",
        counter: "{current} / {total}"
      },
      contact: {
        title: "Contact Us",
        lead: "We are here to help you organise your events and answer all your questions.",
        info_title: "Contact Information",
        address_label: "Address",
        address_value: "Gitega, NYABIHARAGE District, RN16",
        phone_label: "Phone",
        phone_1: "+257 22 40 51 64",
        phone_2: "+257 65 186 498",
        email_label: "Email",
        email_value: "lenoxgitega@gmail.com",
        hours_label: "Hours",
        hours_value: "Open every day, continuous service",
        open_now: "Open now",
        closed_now: "Closed, opens at {time}",
        directions: "Open in Maps",
        whatsapp: "Message on WhatsApp",
        whatsapp_prefill: "Hello Lenox, I would like information about",
        amenities_title: "Available Services",
        amenities: ["Parking 50+ spaces", "Free Wi-Fi", "Hall 800+ people", "24/7 security"]
      },
      form: {
        title: "Send Us a Message",
        firstname: "First name",
        lastname: "Last name",
        email: "Email",
        phone: "Phone",
        event_type: "Event type",
        event_options: ["Wedding", "Conference", "Seminar", "Birthday", "Corporate evening", "Table reservation", "Other"],
        date: "Preferred date",
        guests: "Number of guests",
        message: "Message",
        submit: "Send Message",
        sending: "Sending",
        success_title: "Message received",
        success_body: "Thank you. Our team will reply within 24 hours. For urgent requests, call +257 65 186 498.",
        error: "Sending failed. Please try again or call us directly.",
        required: "This field is required",
        invalid_email: "Invalid email address",
        invalid_phone: "Invalid phone number"
      },
      a11y: {
        skip_to_content: "Skip to content",
        toggle_theme: "Toggle theme",
        theme_light: "Light theme",
        theme_dark: "Dark theme",
        select_language: "Select language",
        open_menu: "Open menu",
        close_menu: "Close menu",
        close: "Close",
        prev_image: "Previous image",
        next_image: "Next image"
      },
      footer: {
        tagline: "Restaurant, bar and reception hall in the heart of Gitega.",
        nav_title: "Navigation",
        contact_title: "Contact",
        hours_title: "Hours",
        follow: "Follow us",
        rights: "© 2026 Lenox Restaurant-Bar. All rights reserved.",
        location: "Gitega, Burundi"
      }
    },

    rn: {
      meta: {
        title: "Lenox Restaurant-Bar Gitega | Ingoro y'ingoma 800, resitora na bari",
        description: "Resitora, bari n'ingoro y'ingoma ya 800 i Gitega, umurwa wa NYABIHARAGE. Ivyokurya vy'Afurika n'ivyo kwisi, imyina y'ubuhanga, ahantu ho kuhagara 50, umurinzi 24/24."
      },
      nav: { home: "Ahabanza", about: "Ivyerekeye", services: "Serivisi", menu: "Integuro", events: "Ibirori", gallery: "Amafoyo", contact: "Twandikire", book: "Buka" },
      hero: {
        eyebrow: "Gitega · NYABIHARAGE · Kuva 20XX",
        title: "Imeza n'ingoro bigira ibihe bikomeye i Gitega",
        lead: "Ahantu heza k'ibirori n'imihango yanyu. Ivyokurya biryohera, inzoga ziringaniye, ubushake bwiza.",
        cta_primary: "Buka imeza",
        cta_secondary: "Tegura ikirori",
        proof: "800+ ba ngenzi · 50+ ahantu ho kuhagara · Umurinzi 24/24 · Wi-Fi ubuntu",
        scroll: "Menya"
      },
      about: {
        title: "Ivyerekeye Lenox",
        lead: "Lenox Restaurant-Bar ni ahantu heza mu Gitega ku bihe biteye igikundiro n'imirimo itazibagirwa.",
        story_title: "Inkuru yacu",
        story_p1: "Lenox Restaurant-Bar iri mu mutima w'i Gitega, umurwa wa NYABIHARAGE. Tuhuza amasoko n'ubucyane. Twiteze gutanga ibihe vya kirya mu bwoko bushimishije.",
        story_p2: "Itsinda ryacu rikunda akazi rikorera buri munsi kugira ngo ritange ivyokurya biryohera, inzoga ziringaniye n'ibikorwa vya mbonera kw'ibirori vyanyu vyose.",
        quote: "«ijambo ry'umunyamuryango»",
        quote_author: "«Izina», «umurimo»",
        stats: { capacity_value: "800+", capacity_label: "Ubushobozi bwo kwakira", parking_value: "50+", parking_label: "Ahantu ho kuhagara", years_value: "«n»", years_label: "Imyaka i Gitega", events_value: "«n»", events_label: "Ibirori ku mwaka" },
        highlights: {
          cuisine_title: "Ivyokurya bitandukanye", cuisine_body: "Ifunguro ry'igitondo, umunsi n'ijoro hamwe n'ivyihariye vy'aho n'ivy'iwabo.",
          shows_title: "Imyina", shows_body: "Umuziki uzozimu, kariyoke n'imyina y'amatsinda mu buzima.",
          events_title: "Ibirori", events_body: "Ingoro y'ingoma y'abantu 800+, yiza ku bihumbi n'ibiganiro.",
          wifi_title: "Wi-Fi ubuntu", wifi_body: "Interineti yihuta itangwa neza ku bakiriye bacu bose."
        }
      },
      services: {
        title: "Serivisi zacu",
        lead: "Menya serivisi zose turoranye kugira ngo buri kanya gibe igihe kidakozwe.",
        restaurant: { title: "Resitora", body: "Ituriro rya gatondo, umunsi n'ijoro kugira ngo umunywanyi aguhe ivyo kurya bitandukanye.", points: ["Ivyokurya vy'Afurika", "Ivyokurya vy'amahanga", "Serivisi itaziguye"] },
        bar: { title: "Bari", body: "Inzoga nyinshi harimo ivya Brarudi, ivya mahanga, divayi, sampanya n'imiburiburi.", points: ["Inzoga z'aho", "Divayi na sampanya", "Imiburiburi"] },
        shows: { title: "Imyina", body: "Umuziki uzozimu, kariyoke n'imyina y'amatsinda kugira ngo iyiro yawe irambe.", points: ["Lenox Live Band", "Kariyoke", "Iyiro ya bari"] },
        hall: { title: "Ingoro y'ingoma", body: "Ingoro y'abantu 800+ k'imihango yanyu, ibihumbi, ibiganiro n'amaseminari.", points: ["Ubushobozi 800+", "Ivyuma binoze", "Serivisi y'ibiryo"] },
        parking: { title: "Ahantu ho kuhagara", body: "Ahantu heza n'ababasha ho kuhagara imodoka 50+ kw'ugufasha ababonye.", points: ["50+ ahantu", "Nziza", "Kugera neza"] },
        security: { title: "Umutekano", body: "Umutekano w'urwego rwo hejuru kugira ngo ngenzi zacu ziture mu mahoro.", points: ["Umurinzi 24/24", "Abakozi bize", "Ahantu heza"] }
      },
      menu: {
        title: "Integuro",
        lead: "Amafunguro yacu adasanzwe. Integuro yuzuye itangwa aho.",
        tab_breakfast: "Ifunguro ry'igitondo",
        tab_main: "Umunsi & ijoro",
        tab_bar: "Bari",
        currency: "BIF",
        download: "Kurura integuro yuzuye (PDF)",
        note: "Amafaranga atangwa mu mafaranga y'Uburundi, serivisi irimo."
      },
      events: {
        title: "Ibirori vyanyu",
        lead: "Ibihumbi, ibiganiro, amaseminari: ingoro 800, ahantu ho kuhagara 50, itsinda rikorera vyose.",
        wedding_title: "Ubukwe",
        wedding_body: "Ingoro mu gitereko, serivisi y'ibiryo, amajwi na Lenox Live Band.",
        conference_title: "Ikiganiro na saminari",
        conference_body: "Ingoro ya tikatero, Wi-Fi yihuta, amfumu y'ikawa n'ibiryo aho.",
        corporate_title: "Iyiro y'ikigo",
        corporate_body: "Iyiro ya kokteli, bari yuzuye, imyina n'umutekano wubutse.",
        capacity_label: "Ubushobozi",
        layout_label: "Ingendo",
        included_label: "Birimwo",
        cta: "Saba igiciro"
      },
      gallery: {
        title: "Amafoyo",
        lead: "Reba ibibanza vyanyu vya kiraro, ivyokurya binoze n'ishusho yihariye igira Lenox ahantu hadasanzwe.",
        filter_all: "Vyose",
        filter_hall: "Ingoro",
        filter_restaurant: "Resitora",
        filter_bar: "Bari",
        filter_events: "Ibirori",
        filter_food: "Ivyokurya",
        load_more: "Reba amafoto menshi",
        counter: "{current} / {total}"
      },
      contact: {
        title: "Twandikire",
        lead: "Turi hano kugira ngo tubasite gutegura ibirori vyanyu no gusubiza ibibazo vyanyu vyose.",
        info_title: "Amakuru yo Gutumanahana",
        address_label: "Aderesi",
        address_value: "Gitega, NYABIHARAGE, RN16",
        phone_label: "Telefoni",
        phone_1: "+257 22 40 51 64",
        phone_2: "+257 65 186 498",
        email_label: "Imeyili",
        email_value: "lenoxgitega@gmail.com",
        hours_label: "Amasaha",
        hours_value: "Buri munsi, serivisi itaziguye",
        open_now: "Buri ngenzi",
        closed_now: "Bimazwe, bifunguye saa {time}",
        directions: "Fungura mu Maps",
        whatsapp: "Andikira kuri WhatsApp",
        whatsapp_prefill: "Bonjour Lenox, ndashaka amakuru ku",
        amenities_title: "Serivisi Zihari",
        amenities: ["Ahantu ho kuhagara 50+", "Wi-Fi ubuntu", "Ingoro 800+", "Umurinzi 24/24"]
      },
      form: {
        title: "Turongere Ubutumwa",
        firstname: "Izina ry'imbere",
        lastname: "Izina",
        email: "Imeyili",
        phone: "Telefoni",
        event_type: "Ubwoko bw'ikirori",
        event_options: ["Ubukwe", "Ikiganiro", "Saminari", "Isabukuru", "Iyiro y'ikigo", "Gufata imeza", "Ikindi"],
        date: "Italiki mushaka",
        guests: "Umubare w'abashitsi",
        message: "Ubutumwa",
        submit: "Rungika Ubutumwa",
        sending: "Birungikwa",
        success_title: "Ubutumwa bwaronkejwe",
        success_body: "Murakoze. Itsinda ryacu rizasubiza mu masaha 24. Ku nyungu y'uruhare, hamagara +257 65 186 498.",
        error: "Kurungika byananiye. Ongera ugerageze canke uduhamagare.",
        required: "Uru ruzuba rusabwa",
        invalid_email: "Imeyili si yiza",
        invalid_phone: "Inomero ya telefoni si yiza"
      },
      a11y: {
        skip_to_content: "Jya ku bikorwa",
        toggle_theme: "Hindura ishusho",
        theme_light: "Ishusho y'urubura",
        theme_dark: "Ishusho y'ijoro",
        select_language: "Hitamo ururimi",
        open_menu: "Fungura menu",
        close_menu: "Funga menu",
        close: "Funga",
        prev_image: "Ifoto ya mbere",
        next_image: "Ifoto ikurikira"
      },
      footer: {
        tagline: "Resitora, bari n'ingoro y'ingoma mu mutima w'i Gitega.",
        nav_title: "Ubuyobozi",
        contact_title: "Gutumanahana",
        hours_title: "Amasaha",
        follow: "Dukurikire",
        rights: "© 2026 Lenox Restaurant-Bar. Uburenganzira bwose buhariwe.",
        location: "Gitega, Uburundi"
      }
    }
  };

  // ============================================================
  // CONFIGURATION
  // ============================================================
  var SUPPORTED_LANGS = ['fr', 'en', 'rn'];
  var DEFAULT_LANG = 'fr';
  var STORAGE_KEY = 'lenox-lang';

  // ============================================================
  // UTILITAIRES
  // ============================================================
  function getNested(obj, path) {
    if (!obj) return undefined;
    return path.split('.').reduce(function (o, k) {
      return o ? o[k] : undefined;
    }, obj);
  }

  // ============================================================
  // DÉTECTER LA LANGUE INITIALE
  // Priorité : ?lang= > localStorage > défaut
  // ============================================================
  function detectInitialLang() {
    var urlParams = new URLSearchParams(window.location.search);
    var urlLang = urlParams.get('lang');
    if (urlLang && SUPPORTED_LANGS.indexOf(urlLang) !== -1) return urlLang;

    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) return stored;

    return DEFAULT_LANG;
  }

  // ============================================================
  // APPLIQUER LES TRADUCTIONS AU DOM
  // ============================================================
  function applyTranslations(lang) {
    var dict = DICTS[lang] || {};
    var fallback = DICTS[DEFAULT_LANG] || {};

    // Éléments avec data-i18n (contenu textuel)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var value = getNested(dict, key) !== undefined ? getNested(dict, key) : getNested(fallback, key);
      if (value !== undefined && value !== null && typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Éléments avec data-i18n-attr (attributs)
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var attrPairs = el.dataset.i18nAttr.split(';');
      attrPairs.forEach(function (pair) {
        var parts = pair.split(':');
        var attr = parts[0];
        var key = parts.slice(1).join(':'); // gère les clés avec ':'
        if (attr && key) {
          var value = getNested(dict, key) !== undefined ? getNested(dict, key) : getNested(fallback, key);
          if (value !== undefined && value !== null) {
            el.setAttribute(attr, String(value));
          }
        }
      });
    });

    // Attribut lang sur <html>
    document.documentElement.lang = lang;

    // Mettre à jour le sélecteur visuel
    updateLanguageSelector(lang);
  }

  // ============================================================
  // METTRE À JOUR LE SÉLECTEUR DE LANGUE (popover)
  // ============================================================
  function updateLanguageSelector(lang) {
    var codes = { fr: 'FR', en: 'EN', rn: 'RN' };

    // Code court affiché sur les boutons
    document.querySelectorAll('.lang-current').forEach(function (el) {
      el.textContent = codes[lang] || 'FR';
    });

    // Marquer l'option active avec aria-current + pastille
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      if (opt.dataset.lang === lang) {
        opt.setAttribute('aria-current', 'true');
      } else {
        opt.removeAttribute('aria-current');
      }
    });
  }

  // ============================================================
  // CHANGER LA LANGUE
  // ============================================================
  function setLang(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;

    applyTranslations(lang);
    localStorage.setItem(STORAGE_KEY, lang);

    // Mettre à jour l'URL sans recharger
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) { /* file:// peut bloquer replaceState dans certains navigateurs */ }

    // Événement pour autres modules
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  // ============================================================
  // INITIALISER LES SÉLECTEURS POPOVER NATIFS
  // ============================================================
  function initLanguageSelector() {
    document.querySelectorAll('.lang-menu').forEach(function (menu) {
      // Clic sur une option de langue
      menu.addEventListener('click', function (e) {
        var option = e.target.closest('.lang-option');
        if (!option) return;

        var lang = option.dataset.lang;
        if (lang) {
          setLang(lang);
          // Fermer le popover (API native)
          if (typeof menu.hidePopover === 'function') {
            menu.hidePopover();
          }
        }
      });

      // Synchroniser aria-expanded du bouton déclencheur
      var toggleId = menu.getAttribute('popovertarget');
      if (toggleId) {
        var toggle = document.getElementById(toggleId);
        if (toggle) {
          menu.addEventListener('toggle', function () {
            var isOpen = menu.matches(':popover-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
          });
        }
      }
    });
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  function init() {
    var initialLang = detectInitialLang();
    applyTranslations(initialLang);
    localStorage.setItem(STORAGE_KEY, initialLang);

    // Mettre à jour l'URL initiale
    try {
      var url = new URL(window.location.href);
      if (!url.searchParams.has('lang')) {
        url.searchParams.set('lang', initialLang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) { /* file:// peut bloquer */ }

    initLanguageSelector();

    // API publique
    window.LenoxI18n = {
      setLang: setLang,
      getLang: function () { return document.documentElement.lang; },
      supportedLangs: SUPPORTED_LANGS
    };
  }

  // Attendre que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
