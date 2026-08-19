# LENOX Restaurant-Bar — Cahier de refonte & instructions d'implémentation

> **Fichier de règles pour l'agent de développement (Cursor / Claude Code / Copilot) ou pour le développeur humain.**
> Site cible : `https://lenoxgitega.com/`
> Objectif : passer d'un site "template correct" à une vitrine **charismatique, élégante et haut de gamme**, digne d'un établissement de 800+ couverts à Gitega.
> Version 1.0

---

## 0. Contexte et intention

**L'établissement.** Lenox Restaurant-Bar, quartier NYABIHARAGE (RN16), Gitega, Burundi. Restaurant, bar, animations live, salle de réception 800+ personnes, parking 50+ places, Wi-Fi, sécurité 24h/24.

**Les publics, par ordre de priorité commerciale :**

1. **Organisateurs d'événements** (mariages, conférences, séminaires, ONG, institutions de la capitale politique). Panier le plus élevé. Ils cherchent : capacité, photos de la salle, parking, sécurité, un contact rapide.
2. **Clients restaurant / bar** du quotidien et du week-end. Ils cherchent : ambiance, carte, horaires, localisation.
3. **Diaspora et visiteurs internationaux**. Ils cherchent : crédibilité, anglais, photos, réservation à distance.

**Le problème du site actuel.** Le contenu est bon, la structure est logique, mais le rendu est générique : hiérarchie typographique plate, grilles de cartes toutes identiques, aucune personnalité chromatique, aucune mise en scène de la salle de réception (l'atout n°1), aucun mouvement, aucune traduction, aucun thème sombre. Le site *informe* mais ne *vend* pas et ne *séduit* pas.

**La cible.** Un visiteur doit sentir, en trois secondes et avant même de lire, que Lenox est le lieu le plus soigné de Gitega. Sensation recherchée : **chaleur maîtrisée**, pas luxe froid. Confiance, hospitalité, ancrage local assumé.

---

## 1. Règles absolues

### 1.1 À faire, sans exception

- **Un seul fichier de tokens** (`:root` + `[data-theme="dark"]`). Aucune valeur de couleur, d'espacement, de rayon ou de durée écrite en dur dans le CSS des composants.
- **Couleurs en OKLCH uniquement.** Pas de hex, pas de HSL, pas de RGB dans le code final.
- **Mobile-first.** Toutes les media queries en `min-width`.
- **Tout texte visible passe par le système i18n.** Zéro chaîne de caractères en dur dans le HTML des sections traduisibles.
- **Tout élément interactif possède ses 6 états** : repos, survol, focus clavier, actif, désactivé, chargement.
- **`prefers-reduced-motion` respecté partout.** Si l'utilisateur le demande, toutes les animations tombent à `0.01ms` et le `scroll-behavior` repasse en `auto`.
- **Contraste WCAG AA minimum** (4.5:1 texte courant, 3:1 texte large et éléments d'interface), **dans les deux thèmes**, vérifié après chaque changement de couleur.

### 1.2 Interdits stricts

Si l'un de ces éléments est sur le point d'être écrit, réécrire le composant autrement.

| Interdit | Pourquoi | À la place |
|---|---|---|
| `#000` et `#fff` purs | Vibration optique, rendu bon marché | Neutres teintés vers la teinte de marque |
| Texte en dégradé (`background-clip: text`) | Cliché "template 2019" | Une couleur pleine, hiérarchie par graisse et taille |
| Bordure latérale colorée (`border-left: 4px`) sur cartes ou encadrés | Signature visuelle de gabarit générique | Bordure complète 1px, fond teinté, ou numéro/icône en tête |
| Glassmorphisme décoratif | Illisible, daté | Surfaces opaques. Exception unique : le header au scroll, avec `backdrop-filter: blur(12px)` et un fond opaque à 92% |
| Grilles de cartes toutes identiques (icône + titre + texte, x6) | Le défaut n°1 du site actuel | Tailles et traitements variés (voir §7.4) |
| Courbes `bounce` / `elastic` | Amateur | Courbes exponentielles ease-out |
| Animation de `width`, `height`, `top`, `left`, `margin` | Recalculs de layout, saccades | `transform` et `opacity` uniquement |
| Carrousel automatique en hero | Nuit au LCP, personne ne regarde la 2e slide | Une image forte, ou une vidéo courte muette |
| Pop-up / modale à l'arrivée | Fait fuir | Bandeau discret en bas si vraiment nécessaire |
| Icônes emoji en guise d'iconographie | Incohérent entre OS | Jeu d'icônes SVG unique (Lucide, trait 1.5px) |
| Tirets cadratins (—) dans les textes | Rendu aléatoire selon les polices et clients | Virgules, deux-points, parenthèses |
| Lorem ipsum, "Nom du plat", images de stock de restaurants américains | Tue la crédibilité | Contenu réel de Lenox, photos réelles |

---

## 2. Stack et architecture des fichiers

Rester en **HTML / CSS / JS natifs** (pas de framework). Le site est une vitrine : la vitesse et la simplicité de maintenance priment. Aucune dépendance lourde.

```
/
├── index.html
├── /assets
│   ├── /css
│   │   ├── tokens.css          # variables : couleurs, typo, espacements, motion
│   │   ├── base.css            # reset, éléments HTML, utilitaires
│   │   ├── layout.css          # grilles, conteneurs, header, footer
│   │   ├── components.css      # boutons, champs, cartes, lightbox, accordéon
│   │   └── sections.css        # styles propres à chaque section
│   ├── /js
│   │   ├── theme.js            # bascule clair/sombre + persistance
│   │   ├── i18n.js             # moteur de traduction
│   │   ├── reveal.js           # animations au scroll (IntersectionObserver)
│   │   ├── gallery.js          # filtres + lightbox
│   │   └── form.js             # validation + envoi + états
│   ├── /i18n
│   │   ├── fr.json
│   │   ├── en.json
│   │   └── rn.json             # Kirundi
│   ├── /img                    # .avif + .webp + fallback .jpg, plusieurs largeurs
│   └── /icons                  # sprite SVG unique
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

**Chargement.** Un seul `<link>` CSS (concaténé en production), scripts en `type="module" defer`. Le script anti-flash du thème est la **seule** exception : inline et bloquant dans le `<head>` (voir §4.3).

---

## 3. Système de design

### 3.1 Stratégie chromatique

**Direction : "Colline et terre cuite".** Un vert profond de plateau (le Kirimiro autour de Gitega) comme couleur de marque engagée, une terre cuite ambrée comme accent rare, des neutres crème tièdes.

**Pourquoi pas noir et or.** C'est le réflexe automatique de tout site de restaurant. Résultat : Lenox ressemblerait à mille autres. Le vert profond + terre cuite est chaleureux, africain sans folklore, mémorable, et se décline parfaitement en thème sombre.

**Répartition visée (thème clair) :** 60% neutres crème, 30% vert de marque (header, footer, sections d'ancrage, typographie), 10% terre cuite (CTA, soulignés, chiffres clés, états actifs). **La terre cuite ne fonctionne que parce qu'elle est rare. Ne jamais la banaliser.**

### 3.2 Tokens de couleur

```css
:root {
  color-scheme: light;

  /* Fonds et surfaces */
  --bg:            oklch(97.5% 0.008 85);   /* crème */
  --surface:       oklch(99.2% 0.004 85);   /* blanc cassé, cartes */
  --surface-2:     oklch(94.5% 0.012 85);   /* zones alternées */
  --surface-inset: oklch(92% 0.014 85);     /* champs, creux */

  /* Texte */
  --ink:           oklch(23% 0.020 155);    /* titres, texte principal */
  --ink-2:         oklch(43% 0.018 155);    /* texte secondaire */
  --ink-3:         oklch(58% 0.014 155);    /* légendes, métadonnées */
  --ink-on-brand:  oklch(97% 0.010 90);

  /* Marque : vert Kirimiro */
  --brand:         oklch(38% 0.060 155);
  --brand-hover:   oklch(32% 0.062 155);
  --brand-press:   oklch(28% 0.060 155);
  --brand-soft:    oklch(93% 0.022 155);    /* fonds de puces, badges */
  --brand-line:    oklch(84% 0.030 155);

  /* Accent : terre cuite de Gitega */
  --accent:        oklch(64% 0.140 55);
  --accent-hover:  oklch(58% 0.142 52);
  --accent-soft:   oklch(94% 0.030 60);
  --accent-ink:    oklch(30% 0.090 50);     /* accent lisible sur crème */

  /* Bordures */
  --line:          oklch(89% 0.012 85);
  --line-strong:   oklch(80% 0.016 85);

  /* Sémantique */
  --ok:            oklch(52% 0.110 155);
  --warn:          oklch(70% 0.130 75);
  --error:         oklch(52% 0.150 28);
  --error-soft:    oklch(95% 0.030 28);

  /* Élévation (thème clair : ombres) */
  --shadow-sm: 0 1px 2px oklch(23% 0.02 155 / 0.05);
  --shadow-md: 0 4px 12px oklch(23% 0.02 155 / 0.07), 0 1px 2px oklch(23% 0.02 155 / 0.05);
  --shadow-lg: 0 16px 40px oklch(23% 0.02 155 / 0.10), 0 2px 6px oklch(23% 0.02 155 / 0.06);
}

[data-theme="dark"] {
  color-scheme: dark;

  /* Profondeur par la clarté des surfaces, pas par l'ombre */
  --bg:            oklch(16% 0.018 155);
  --surface:       oklch(20% 0.020 155);
  --surface-2:     oklch(24% 0.022 155);
  --surface-inset: oklch(13% 0.016 155);

  --ink:           oklch(94% 0.008 88);
  --ink-2:         oklch(78% 0.010 88);
  --ink-3:         oklch(62% 0.012 88);
  --ink-on-brand:  oklch(16% 0.018 155);

  --brand:         oklch(74% 0.085 155);    /* éclairci, désaturé */
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

  /* Ombres quasi supprimées en sombre */
  --shadow-sm: 0 1px 2px oklch(0% 0 0 / 0.30);
  --shadow-md: 0 4px 14px oklch(0% 0 0 / 0.35);
  --shadow-lg: 0 18px 44px oklch(0% 0 0 / 0.45);
}
```

**Règles d'usage.**

- Aucun neutre n'a une chroma nulle. Tout est teinté vers 155 (vert) ou 85 (crème). Le gris pur est mort.
- En thème sombre, jamais de noir pur : le fond descend à 16% de clarté, pas plus bas.
- En thème sombre, la profondeur vient de surfaces **plus claires**, pas d'ombres portées.
- La transparence est un aveu de palette incomplète. Autorisée uniquement pour les anneaux de focus, les survols d'overlay et le fond du header sticky.

### 3.3 Typographie

**Familles.**

| Rôle | Police | Graisses | Usage |
|---|---|---|---|
| Display | **Fraunces** (variable, `opsz` activé) | 400, 600, 700 | h1, h2, chiffres clés, citations |
| Texte et interface | **Manrope** | 400, 500, 600, 700 | paragraphes, navigation, boutons, champs |

Fraunces a du caractère (contraste élevé, terminaisons douces) sans tomber dans le Playfair Display que tout le monde utilise. Manrope apporte la chaleur géométrique nécessaire à l'interface sans concurrencer le display.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Échelle modulaire, ratio 1.333, fluide.**

```css
:root {
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-text: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;

  --text-xs:   0.75rem;                                  /* 12px  légal, crédits photo */
  --text-sm:   0.875rem;                                 /* 14px  métadonnées */
  --text-base: 1rem;                                     /* 16px  plancher absolu */
  --text-lg:   clamp(1.125rem, 0.6vw + 1rem, 1.3125rem); /* chapô */
  --text-xl:   clamp(1.5rem, 1.2vw + 1.2rem, 2rem);      /* h3 */
  --text-2xl:  clamp(2rem, 2.4vw + 1.4rem, 3rem);        /* h2 */
  --text-3xl:  clamp(2.75rem, 5.5vw + 1rem, 5.5rem);     /* h1 hero */

  --leading-tight: 1.05;
  --leading-snug:  1.25;
  --leading-body:  1.6;   /* 16 × 1.6 = 25.6px, unité du rythme vertical */
  --tracking-caps: 0.10em;
  --tracking-display: -0.02em;
}
```

**Règles.**

- Cinq tailles, pas douze. Ratio minimum 1.25 entre deux niveaux consécutifs. Un h1 à 88px face à un chapô à 21px : la hiérarchie doit se voir les yeux plissés.
- Longueur de ligne bloquée entre **62 et 72ch** pour tout paragraphe.
- `text-wrap: balance` sur h1, h2, h3. `text-wrap: pretty` sur les paragraphes. `font-optical-sizing: auto` sur `body`.
- Les libellés en capitales (sur-titres de section, badges) prennent `letter-spacing: var(--tracking-caps)` et `font-weight: 600`, jamais plus de 3 mots.
- `font-variant-numeric: tabular-nums` sur tous les chiffres alignés : capacité, horaires, prix, téléphones.
- En thème sombre, le corps de texte passe de `font-weight: 400` à `380` (Manrope est variable) et gagne `letter-spacing: 0.01em`. Le texte clair sur fond sombre paraît toujours plus gras.

### 3.4 Espacements, rayons, conteneurs

Base 4pt. Nommage sémantique, jamais numérique.

```css
:root {
  --space-3xs: 0.25rem;  /* 4  */
  --space-2xs: 0.5rem;   /* 8  */
  --space-xs:  0.75rem;  /* 12 */
  --space-sm:  1rem;     /* 16 */
  --space-md:  1.5rem;   /* 24 */
  --space-lg:  2rem;     /* 32 */
  --space-xl:  3rem;     /* 48 */
  --space-2xl: 4.5rem;   /* 72 */
  --space-3xl: 7rem;     /* 112 */

  --section-y: clamp(4.5rem, 9vw, 9rem);   /* respiration verticale des sections */
  --gutter:    clamp(1.25rem, 4vw, 3rem);

  --width-content: 68ch;   /* colonnes de texte */
  --width-page:    1240px; /* conteneur standard */
  --width-wide:    1520px; /* galerie, hero */

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
}
```

**Le rythme est une décision, pas un réglage par défaut.** Le même padding partout, c'est de la monotonie. Une section dense (services) respire moins qu'une section de respiration (citation, galerie plein écran). Alterner délibérément : dense, aéré, dense, plein écran.

**Ne pas tout enfermer dans un conteneur.** La galerie et la bande de photos de la salle débordent en pleine largeur. Le texte, lui, reste dans sa mesure.

### 3.5 Motion

```css
:root {
  --dur-instant: 120ms;  /* pression bouton, changement de couleur */
  --dur-fast:    220ms;  /* survols, tooltips */
  --dur-base:    320ms;  /* ouverture menu, accordéon */
  --dur-slow:    480ms;  /* modale, tiroir, lightbox */
  --dur-reveal:  720ms;  /* apparitions au scroll */

  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);
}
```

- Les sorties durent **75%** de l'entrée.
- Jamais `ease` tout court. Jamais de rebond.
- Une seule transition par élément au repos : `transition: transform var(--dur-fast) var(--ease-out-quart), opacity var(--dur-fast) var(--ease-out-quart), background-color var(--dur-instant) linear;`

---

## 4. Thème clair / sombre

### 4.1 Comportement attendu

- **Le thème clair est le défaut absolu.** Un visiteur qui arrive sans préférence enregistrée voit le thème clair, quelle que soit la configuration de son système.
- Trois états gérés en interne : `light`, `dark`, et le choix explicite de l'utilisateur qui écrase tout.
- Le choix persiste dans `localStorage` sous la clé `lenox-theme`.
- Le thème s'applique via l'attribut `data-theme` sur `<html>`.

### 4.2 Le contrôle

- Placé dans le header, à droite, juste avant le sélecteur de langue et le CTA.
- **Un seul bouton, pas un menu déroulant.** Icône soleil en thème clair, lune en thème sombre. Cible tactile 44×44px minimum même si l'icône fait 20px.
- `aria-label` traduit, `aria-pressed` reflétant l'état.
- L'icône fait une rotation de 90° et un fondu croisé sur `--dur-base` avec `--ease-out-quart`. Pas de rebond.
- Sur mobile, le bouton reste dans la barre supérieure, pas enterré dans le menu burger.

### 4.3 Anti-flash (obligatoire)

Sans ce script, l'utilisateur en thème sombre voit un éclair blanc à chaque chargement. Inline, bloquant, dans le `<head>`, **avant tout CSS** :

```html
<script>
  (function () {
    try {
      var t = localStorage.getItem('lenox-theme');
      if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t;
      else document.documentElement.dataset.theme = 'light';
    } catch (e) { document.documentElement.dataset.theme = 'light'; }
  })();
</script>
```

### 4.4 Transition de bascule

Le changement de thème ne doit pas être brutal, mais ne doit pas non plus faire baver toutes les animations de la page. Technique : activer une transition globale sur 260ms, puis la retirer.

```js
function setTheme(next) {
  const root = document.documentElement;
  root.classList.add('theme-transitioning');
  root.dataset.theme = next;
  localStorage.setItem('lenox-theme', next);
  document.querySelector('#theme-toggle')?.setAttribute('aria-pressed', String(next === 'dark'));
  window.setTimeout(() => root.classList.remove('theme-transitioning'), 300);
}
```

```css
.theme-transitioning,
.theme-transitioning *,
.theme-transitioning *::before,
.theme-transitioning *::after {
  transition: background-color 260ms var(--ease-out-quart),
              border-color 260ms var(--ease-out-quart),
              color 260ms var(--ease-out-quart),
              fill 260ms var(--ease-out-quart) !important;
}
```

### 4.5 Points de vigilance

- **Les images ne sont pas neutres.** En thème sombre, appliquer `filter: brightness(0.92) saturate(0.95)` aux photos de galerie pour éviter qu'elles n'éblouissent. Jamais sur le logo.
- Le logo a **deux versions** : une pour fond clair, une pour fond sombre. Les basculer via `<picture>` ou du CSS, pas via `filter: invert()`.
- Vérifier les contrastes des **deux** thèmes après toute modification de token. Le sombre casse plus souvent que le clair.
- L'overlay de la lightbox et le voile du hero ont des valeurs **différentes** selon le thème.
- `<meta name="theme-color">` mis à jour dynamiquement pour la barre d'adresse mobile.

---

## 5. Internationalisation : Français, Kirundi, Anglais

### 5.1 Principes

- **Français par défaut** (marché local dominant, langue administrative).
- Langues : `fr`, `rn` (Kirundi, code ISO 639-1 correct), `en`.
- Persistance dans `localStorage` sous `lenox-lang`. Au premier chargement, si `navigator.language` commence par `en` ou `rn`, proposer cette langue ; sinon français.
- L'attribut `lang` de `<html>` est mis à jour à chaque changement. Indispensable pour les lecteurs d'écran et le SEO.
- **Aucun rechargement de page** au changement de langue. Substitution DOM instantanée.

### 5.2 Le sélecteur

- Dans le header, à côté du bouton de thème. Affiche le code court courant : `FR`, `RN`, `EN`.
- Menu déroulant natif via l'attribut `popover` (fermeture au clic extérieur, gestion du z-index, accessibilité fournies par le navigateur). Pas de div bricolée.
- Chaque option affiche le nom **dans sa propre langue** : `Français`, `Ikirundi`, `English`. Jamais de drapeaux : le Kirundi n'est pas un pays et le drapeau britannique n'est pas la langue anglaise.
- L'option active porte `aria-current="true"` et une pastille terre cuite.
- Ouverture : `opacity 0 → 1` + `translateY(-6px) → 0`, `--dur-base`, `--ease-out-quart`.

### 5.3 Mécanisme

Marquage HTML :

```html
<h2 data-i18n="about.title">À Propos de Lenox</h2>
<input data-i18n-attr="placeholder:form.email.placeholder;aria-label:form.email.label">
<meta name="description" data-i18n-attr="content:meta.description">
```

Moteur `i18n.js` :

```js
const SUPPORTED = ['fr', 'rn', 'en'];
const DEFAULT = 'fr';
const cache = new Map();

async function loadDict(lang) {
  if (cache.has(lang)) return cache.get(lang);
  const res = await fetch(`/assets/i18n/${lang}.json`);
  const dict = await res.json();
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
    el.textContent = get(dict, key) ?? get(fallback, key) ?? key;
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

**Règles de repli.** Si une clé manque en Kirundi ou en anglais, afficher la version française plutôt qu'une clé brute ou une case vide. Jamais de `about.title` visible à l'écran.

### 5.4 Structure des fichiers de traduction

Clés hiérarchiques, nommées par emplacement fonctionnel, jamais par contenu.

```json
{
  "meta": { "title": "...", "description": "..." },
  "nav": { "home": "...", "about": "...", "services": "...", "gallery": "...", "events": "...", "contact": "..." },
  "hero": { "eyebrow": "...", "title": "...", "lead": "...", "cta_primary": "...", "cta_secondary": "..." },
  "about": { "title": "...", "story_title": "...", "story_body": "...", "stat_capacity": "...", "stat_parking": "..." },
  "services": { "title": "...", "restaurant": { "title": "...", "body": "...", "points": ["...", "...", "..."] } },
  "gallery": { "title": "...", "filter_all": "...", "filter_hall": "...", "filter_food": "..." },
  "events": { "title": "...", "wedding": "...", "conference": "...", "seminar": "..." },
  "contact": { "title": "...", "address": "...", "hours": "...", "open_now": "...", "closed_now": "..." },
  "form": { "firstname": "...", "lastname": "...", "email": "...", "phone": "...", "event_type": "...", "message": "...", "submit": "...", "sending": "...", "success": "...", "error": "..." },
  "a11y": { "toggle_theme": "...", "open_menu": "...", "close": "...", "prev_image": "...", "next_image": "..." },
  "footer": { "rights": "...", "made_in": "..." }
}
```

### 5.5 Glossaire de départ

> **À faire valider par un locuteur natif kirundophone avant mise en ligne.** Les colonnes RN ci-dessous sont une base de travail, pas une traduction certifiée. Une faute de langue sur la version kirundi coûterait plus cher en crédibilité locale que l'absence de traduction. **Ne pas publier la version RN sans relecture humaine.**

| Clé | Français | English | Ikirundi (à valider) |
|---|---|---|---|
| nav.home | Accueil | Home | Ahabanza |
| nav.about | À propos | About | Ivyerekeye Lenox |
| nav.services | Services | Services | Serivisi |
| nav.gallery | Galerie | Gallery | Amafoto |
| nav.events | Événements | Events | Ibirori |
| nav.contact | Contact | Contact | Twandikire |
| hero.cta_primary | Réserver une table | Book a table | Gufata ikibanza |
| hero.cta_secondary | Voir la salle | See the hall | Raba inzu y'ibirori |
| about.story_title | Notre histoire | Our story | Kahise kacu |
| services.restaurant | Restaurant | Restaurant | Iresitora |
| services.bar | Bar | Bar | Akabare |
| services.hall | Salle de réception | Reception hall | Inzu y'ibirori |
| services.parking | Parking | Parking | Ubwikinge bw'imodoka |
| services.security | Sécurité | Security | Umutekano |
| contact.hours | Horaires | Opening hours | Amasaha |
| contact.address | Adresse | Address | Aderesi |
| form.submit | Envoyer le message | Send message | Rungika ubutumwa |
| form.success | Merci, message reçu | Thank you, message received | Murakoze, ubutumwa bwaragiye |
| a11y.toggle_theme | Changer de thème | Toggle theme | Hindura ibara ry'urupapuro |

### 5.6 SEO multilingue

```html
<link rel="alternate" hreflang="fr" href="https://lenoxgitega.com/?lang=fr">
<link rel="alternate" hreflang="rn" href="https://lenoxgitega.com/?lang=rn">
<link rel="alternate" hreflang="en" href="https://lenoxgitega.com/?lang=en">
<link rel="alternate" hreflang="x-default" href="https://lenoxgitega.com/">
```

Le paramètre `?lang=` en URL est prioritaire sur le `localStorage` : il rend les liens partageables. Au chargement, lire l'URL en premier.

---

## 6. Mouvement et micro-interactions

Le mouvement doit se **sentir** sans se **voir**. Si une animation attire l'attention sur elle-même, elle est ratée.

### 6.1 Défilement fluide

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

`scroll-padding-top` évite que le header sticky ne recouvre le titre de la section ciblée. Bug classique.

### 6.2 Apparitions au scroll

`IntersectionObserver`, seuil 0.15, `rootMargin: "0px 0px -8% 0px"`, **déclenchement unique** (`unobserve` après apparition). Aucune animation ne se rejoue au scroll inverse : c'est agaçant.

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

- Décalage en cascade plafonné : **6 éléments maximum**, soit 420ms au total. Au-delà, l'utilisateur attend.
- Retirer `will-change` après l'apparition (dans le callback `transitionend`).
- Amplitude maximale : 24px. Au-delà, ça devient une diapositive PowerPoint.
- Le contenu du hero n'attend pas le scroll : il apparaît au chargement, en cascade de 3 temps (sur-titre, titre, boutons).

### 6.3 Header

- Transparent au-dessus du hero, sans bordure.
- Au-delà de 80px de scroll : fond `--surface` à 92% d'opacité, `backdrop-filter: blur(12px)`, bordure basse 1px `--line`, hauteur réduite de 88px à 68px. Transition sur `--dur-base`.
- **Ne pas animer la hauteur.** Animer le `padding` du contenu interne et le `scale` du logo (`transform: scale(0.88)`).
- Masquage au scroll vers le bas, réapparition au scroll vers le haut (`transform: translateY(-100%)`), avec un seuil de 12px pour éviter le tremblement.
- Le lien de navigation de la section visible porte un état actif : un souligné terre cuite de 2px, animé en `transform: scaleX()` depuis la gauche.

### 6.4 Catalogue des survols

| Élément | Comportement |
|---|---|
| Bouton primaire | `translateY(-2px)` + ombre `--shadow-md` + fond `--brand-hover`. Sur `:active`, `translateY(0)` et `scale(0.985)` en `--dur-instant`. |
| Bouton secondaire (contour) | La bordure s'épaissit optiquement (`box-shadow: inset 0 0 0 1px`), le fond passe à `--brand-soft`. |
| Lien texte | Souligné animé : `background-image` linéaire, `background-size: 0% 1.5px → 100% 1.5px`, position bottom left, `--dur-fast`. Pas de `text-decoration` qui clignote. |
| Lien de navigation | Souligné terre cuite en `scaleX` depuis la gauche, origine inversée à la sortie (sort vers la droite). |
| Carte service | L'ombre monte d'un cran, le titre passe en `--brand`, l'icône fait `translateX(3px)`. La carte elle-même monte de 3px maximum. Discrétion. |
| Photo de galerie | L'image passe en `scale(1.06)` **dans** son cadre en `overflow: hidden`, sur 600ms `--ease-out-quart`. Un voile dégradé du bas monte avec la légende. Le cadre ne bouge pas. |
| Chiffre clé (800+, 50+) | Compteur animé au premier passage dans le viewport, 1200ms, easing out. Une seule fois. |
| Champ de formulaire | La bordure passe à `--brand`, un anneau `0 0 0 3px var(--brand-soft)` apparaît, le libellé flottant monte et rétrécit. |
| Bouton de thème | Rotation 90° + fondu croisé des icônes. |
| Élément tactile | Tous les effets de survol sont neutralisés sous `@media (hover: none)`. Sur mobile, l'état `:active` prend le relais. |

### 6.5 Effets signature (à faire avec parcimonie)

Deux effets marquants maximum sur toute la page. Au-delà, c'est une foire.

1. **Parallaxe du hero.** L'image de fond se déplace à 0.4× la vitesse du scroll, via `transform: translate3d()` dans un `requestAnimationFrame` throttlé. Désactivé sous 768px et sous `prefers-reduced-motion`.
2. **Bande photo horizontale de la salle de réception.** Défilement horizontal continu et lent (30s, linéaire, en boucle), mis en pause au survol. C'est l'atout commercial n°1 de Lenox : il mérite une mise en scène.

Optionnel, si le budget de temps le permet : révélation de titre par masque (`clip-path` animé, lignes qui montent), uniquement sur le h1 du hero.

### 6.6 Ce qu'il ne faut pas animer

Les prix, les horaires, les numéros de téléphone, les messages d'erreur, tout élément que l'utilisateur cherche activement. L'information critique s'affiche, elle ne se met pas en scène.

---

## 7. Refonte section par section

### 7.1 En-tête et navigation

- Logo Lenox à gauche (version texte typographique en Fraunces 600 si le logo vectoriel n'est pas disponible en qualité suffisante).
- Navigation centrée : Accueil, À propos, Services, Galerie, Événements, Contact.
- À droite : sélecteur de langue, bouton de thème, CTA plein terre cuite **"Réserver"**.
- Mobile : menu plein écran (pas un tiroir latéral étriqué), fond `--bg` opaque, entrées en Fraunces à `--text-xl`, apparition en cascade de 60ms par item, fermeture sur Échap et au clic d'un lien. Le focus est piégé dans le menu ouvert, `inert` sur le reste de la page.
- Lien d'évitement "Aller au contenu" en premier élément focusable, visible uniquement au focus clavier.

### 7.2 Hero

**Le problème actuel :** un bloc de texte sur un fond, sans hiérarchie ni preuve.

**La refonte.**

- Hauteur `min(92vh, 900px)`. Pas 100vh : laisser voir le début de la section suivante invite au scroll.
- Image de fond : la **salle de réception dressée**, pas une assiette. C'est ce qui différencie Lenox. Voile dégradé de bas en haut (`--brand` à 78% d'opacité en bas, 20% en haut) pour garantir la lisibilité.
- Composition en trois temps :
  1. Sur-titre en capitales espacées, terre cuite : `GITEGA · NYABIHARAGE · DEPUIS 20XX`
  2. h1 en Fraunces 700, `--text-3xl`, `--leading-tight` : **"La table et la salle qui font les grands jours de Gitega"**. Le titre actuel ("LENOX / Restaurant-Bar") décrit ; celui-ci promet.
  3. Chapô, 2 lignes maximum, `--text-lg`, 60ch.
- Deux CTA : **"Réserver une table"** (plein terre cuite) et **"Organiser un événement"** (contour clair). Le second est le plus rentable : il n'est pas secondaire, il est ciblé.
- Bandeau de preuve en bas du hero, sur une seule ligne, séparé par des points médians : `800+ invités · 50+ places de parking · Sécurité 24h/24 · Wi-Fi gratuit`. Ce n'est pas un bloc de statistiques en grosses cartes : c'est une ligne de confiance, discrète et dense.
- Indicateur de scroll : un trait vertical de 32px qui s'anime de haut en bas en boucle lente. Disparaît au premier scroll.

### 7.3 À propos

- Mise en page **asymétrique**, 7 colonnes de texte / 5 colonnes d'image, pas du 50/50. Le 50/50 est mou.
- Photo verticale de l'équipe ou de la salle, légèrement débordante hors du conteneur, avec une bande terre cuite décalée derrière (décalage de 24px en bas à droite). Simple, élégant, non générique.
- Les quatre chiffres (800+, 50+, etc.) : en Fraunces, `--text-2xl`, en `--brand`, avec un libellé en capitales espacées dessous. Alignés sur une ligne horizontale séparée par des filets verticaux 1px, **pas** dans quatre cartes.
- Ajouter une citation du propriétaire ou du chef, en Fraunces 400 italique, `--text-xl`, dans une bande de couleur `--brand` pleine largeur. C'est la respiration de la page et le moment humain.

### 7.4 Services

**Le problème actuel :** six cartes rigoureusement identiques. C'est l'anti-design par excellence.

**La refonte : une grille éditoriale asymétrique.**

- **Salle de réception** : bloc large, 2 colonnes sur 3, avec photo de fond et texte en surimpression. C'est le produit vedette.
- **Restaurant** et **Bar** : deux blocs moyens côte à côte, avec une photo carrée en tête et la liste des points en dessous.
- **Animations** : bloc large horizontal, photo à gauche, texte à droite, avec une mention "Lenox Live Band" en avant.
- **Parking** et **Sécurité** : deux blocs compacts, sans photo, icône + une ligne. Ce sont des rassurances, pas des arguments de vente. Ils ne méritent pas le même poids visuel.

Les listes de points ne prennent pas de coche verte générique : un tiret court terre cuite, ou un numéro en Fraunces. Sobre.

### 7.5 Galerie

**Le problème actuel :** douze vignettes intitulées "Salle de réception" à l'identique. Aucune valeur informative.

**La refonte.**

- **Filtres** : Tout · Salle · Restaurant · Bar · Événements · Cuisine. Boutons pilules, actif en `--brand` plein. La transition de filtrage utilise la **View Transition API** si disponible, avec repli sur un simple fondu de 200ms.
- **Grille en mosaïque**, pas un damier régulier : `grid-auto-flow: dense` avec quelques éléments en `grid-column: span 2` ou `grid-row: span 2`. Les photos les plus fortes prennent plus de place.
- **Légendes réelles et distinctes.** "Salle de réception" douze fois, c'est du remplissage. Écrire : "Mariage de 600 invités, mars 2025", "Dressage cocktail", "Le bar au coucher du soleil". Chaque légende doit apprendre quelque chose.
- **Lightbox** : élément `<dialog>` natif avec `showModal()` (piège de focus et fermeture Échap gratuits). Navigation clavier flèches, glissement tactile, compteur "4 / 12", légende affichée. Fond `--surface-inset` opaque, pas un noir transparent. Entrée en `scale(0.96) → 1` + fondu sur `--dur-slow`, sortie sur 75% de cette durée.
- Toutes les images en `loading="lazy"` sauf les deux premières, avec `width`/`height` explicites pour réserver l'espace. Le CLS doit rester à zéro.

### 7.6 Événements (nouvelle section)

La section la plus rentable, absente du site actuel. À placer entre Services et Galerie.

- Trois formules présentées en colonnes : **Mariage**, **Conférence & séminaire**, **Soirée d'entreprise**.
- Pour chacune : capacité indicative, configuration de salle (théâtre, banquet, cocktail), services inclus, et un CTA "Demander un devis" qui pré-remplit le champ "Type d'événement" du formulaire de contact.
- Un plan ou une photo de la salle en configuration, pour rendre les 800 places tangibles. Un chiffre abstrait ne convainc pas ; une photo de salle pleine, si.
- Bandeau de logos ou de mentions des institutions déjà accueillies, si l'autorisation est obtenue. Preuve sociale maximale à Gitega.

### 7.7 Carte / Menu (nouvelle section)

- Sélection éditoriale de 6 à 9 plats signature, pas la carte complète. Nom, courte description, prix en BIF avec `tabular-nums`.
- Mise en page en deux colonnes typographiques, avec une ligne de points de conduite (leader dots) entre le nom et le prix. Traitement classique de carte imprimée, très élégant en web quand c'est bien fait.
- Onglets : Petit-déjeuner · Déjeuner & dîner · Bar. Transition de contenu en fondu, hauteur gérée par `grid-template-rows: 0fr → 1fr`.
- Lien "Télécharger la carte complète (PDF)".

### 7.8 Contact

- Mise en page en deux colonnes : informations à gauche, formulaire à droite. Sur mobile, les informations passent **en premier** : un client sur téléphone veut appeler, pas remplir un formulaire.
- **Carte interactive intégrée** (OpenStreetMap via Leaflet, ou Google Maps en iframe `loading="lazy"`), avec marqueur sur NYABIHARAGE RN16 et bouton "Ouvrir dans Maps". La carte est stylée selon le thème actif.
- **Indicateur d'ouverture en direct** : une pastille verte pulsante et le texte "Ouvert maintenant" ou "Fermé, ouvre à 07h00", calculé en JS sur le fuseau `Africa/Bujumbura`. Détail à fort impact de crédibilité.
- Numéros de téléphone en liens `tel:` cliquables, format international : `+257 22 40 51 64` et `+257 65 186 498`.
- **Bouton WhatsApp flottant** en bas à droite, avec message pré-rempli traduit selon la langue active. Au Burundi, WhatsApp convertit mieux que n'importe quel formulaire. Le bouton apparaît après 400px de scroll, en `scale(0.8) → 1` + fondu.

### 7.9 Formulaire

- Champs : Prénom, Nom, Email, Téléphone, Type d'événement (select), Date souhaitée (optionnel), Nombre d'invités (optionnel), Message.
- **Libellés flottants**, jamais de placeholder utilisé comme libellé. Le placeholder disparaît à la saisie, le libellé doit rester.
- Validation **à la sortie du champ** (`blur`), jamais à la frappe. Corriger quelqu'un pendant qu'il tape est hostile.
- États d'erreur : bordure `--error`, message sous le champ avec `role="alert"`, `aria-invalid="true"`, icône. Pas de secousse.
- Bouton d'envoi : état de chargement avec libellé "Envoi en cours" et un indicateur circulaire, bouton désactivé, largeur figée pour éviter le saut de layout.
- Succès : le formulaire est remplacé, sur place, par un message de confirmation avec coche animée et le rappel du délai de réponse. Pas d'alerte navigateur, pas de redirection.
- Honeypot anti-spam (champ caché) + limitation de fréquence côté serveur.

### 7.10 Pied de page

- Fond `--brand` plein, texte `--ink-on-brand`. C'est l'ancrage visuel de la page.
- Quatre colonnes : identité et baseline, navigation, contact, horaires.
- Réseaux sociaux en icônes SVG monochromes, survol en terre cuite.
- Ligne de bas : `© 2026 Lenox Restaurant-Bar · Gitega, Burundi` et mention du concepteur.
- Le sélecteur de langue est **répété** dans le footer. Beaucoup d'utilisateurs le cherchent là.

---

## 8. Accessibilité

Non négociable, et bon pour le SEO.

- Un seul `<h1>` par page. Hiérarchie de titres sans saut de niveau.
- Structure sémantique : `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Toute image porte un `alt` descriptif et traduit. Les images purement décoratives ont `alt=""`.
- `:focus-visible` visible partout : anneau de 3px en `--accent` avec `outline-offset: 2px`. **Jamais `outline: none` sans remplacement.**
- Navigation clavier complète : menu, sélecteur de langue, lightbox, onglets, accordéon.
- Cibles tactiles de 44×44px minimum, quel que soit l'aspect visuel.
- Contrastes vérifiés dans les deux thèmes. Attention particulière à la terre cuite sur crème : utiliser `--accent-ink` pour le texte, `--accent` uniquement pour les fonds et bordures.
- La bande photo défilante et le parallaxe sont désactivés sous `prefers-reduced-motion`.
- Test au lecteur d'écran sur le parcours principal : arrivée, navigation, formulaire.

---

## 9. Performance

Le Burundi est un marché majoritairement mobile, souvent en 3G. **La performance n'est pas une optimisation, c'est une condition d'accès.**

| Métrique | Cible |
|---|---|
| LCP | < 2,0 s en 3G rapide simulée |
| CLS | < 0,05 |
| INP | < 200 ms |
| Poids total première vue | < 900 Ko |
| Lighthouse Performance | ≥ 92 mobile |

**Actions.**

- Images en **AVIF** avec repli **WebP** puis JPEG, via `<picture>`. Plusieurs largeurs en `srcset` (480, 768, 1200, 1920) avec un `sizes` correct.
- `width` et `height` explicites sur **chaque** image. C'est la première cause de CLS.
- `fetchpriority="high"` sur l'image du hero, `loading="lazy"` + `decoding="async"` sur tout le reste.
- Polices : `display=swap`, préconnexion, et **subset latin uniquement**. Ne charger que les graisses réellement utilisées (4 maximum au total).
- CSS critique inline pour le hero, reste du CSS chargé normalement.
- Aucune bibliothèque JS lourde. jQuery est interdit. Les animations sont en CSS ou en `IntersectionObserver`.
- La carte (Maps ou Leaflet) est chargée **à la demande** : une image statique cliquable qui charge la carte réelle au clic. Économie de 400 Ko+.
- Les listeners de scroll passent par `requestAnimationFrame` et sont `{ passive: true }`.

---

## 10. SEO et métadonnées

- `<title>` unique et traduit : `Lenox Restaurant-Bar Gitega | Salle de réception 800 places, restaurant et bar`
- Meta description traduite, 150 à 160 caractères, avec un appel à l'action.
- Open Graph et Twitter Card complets, image de partage 1200×630 montrant la salle.
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
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Quartier NYABIHARAGE, RN16",
    "addressLocality": "Gitega",
    "addressCountry": "BI"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "-3.4264", "longitude": "29.9306" },
  "openingHours": "Mo-Su 07:00-23:00",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuit", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Salle de réception 800 places", "value": true }
  ]
}
```

> Corriger les coordonnées GPS avec la position réelle de l'établissement et les horaires exacts avant mise en ligne.

- Ajouter un profil **Google Business** relié au site. Pour un établissement local, c'est souvent la première source de trafic, devant le site lui-même.

---

## 11. Responsive

| Palier | Comportement |
|---|---|
| < 640px | Une colonne. Navigation en menu plein écran. Informations de contact avant le formulaire. Hero à `min-height: 88vh`, h1 plafonné à 2,75rem. Galerie en 1 colonne, 6 images visibles puis "Voir plus". Parallaxe désactivé. |
| 640 à 1023px | Deux colonnes pour les services et la galerie. Navigation toujours en burger. Grille éditoriale simplifiée. |
| 1024 à 1279px | Navigation horizontale complète. Grille éditoriale asymétrique active. Contact en deux colonnes. |
| ≥ 1280px | Pleine composition. Marges généreuses, `--width-page` à 1240px, galerie élargie à `--width-wide`. |

Privilégier le dimensionnement intrinsèque (`clamp`, `auto-fit`, `minmax`) aux media queries. Utiliser `@container` pour les composants réutilisés dans des contextes de largeurs différentes.

**Ne pas rétrécir le desktop.** Sur mobile, la hiérarchie change : appeler et localiser passent devant tout le reste.

---

## 12. Contenu à produire (hors code)

Le meilleur design du monde ne sauve pas du contenu faible. À réunir avant le développement :

1. **Photographie professionnelle.** C'est l'investissement le plus rentable de tout le projet. Minimum : salle vide dressée, salle en événement, façade de nuit, bar, 5 plats signature, équipe. Lumière naturelle ou dorée, jamais de flash direct.
2. **Légendes réelles** pour chacune des 12+ photos.
3. **Prix et carte** à jour, en BIF.
4. **Horaires exacts** par jour de la semaine.
5. **Coordonnées GPS** précises.
6. **2 à 3 témoignages** clients réels avec nom, fonction et si possible photo.
7. **Traduction kirundi validée** par un locuteur natif.
8. **Année de création** de l'établissement, pour la ligne d'ancrage du hero.

---

## 13. Recette finale

À cocher intégralement avant mise en ligne. Une case non cochée = pas de mise en ligne.

**Design**
- [ ] Le test du plissement des yeux passe : la hiérarchie reste lisible sur chaque section floutée.
- [ ] Aucun interdit du §1.2 présent dans le code.
- [ ] Aucune couleur en dur hors du fichier de tokens.
- [ ] Le rythme d'espacement varie entre les sections, il n'est pas uniforme.
- [ ] Les cartes de services ne sont pas six blocs identiques.

**Thème**
- [ ] Aucun flash blanc au chargement en thème sombre.
- [ ] Le choix persiste après rechargement et navigation.
- [ ] Contrastes AA validés dans les deux thèmes, sur chaque section.
- [ ] Le logo est correct sur les deux fonds.
- [ ] La barre d'adresse mobile suit le thème.

**Langues**
- [ ] Zéro texte en dur : chaque chaîne visible passe par le système i18n.
- [ ] Les trois fichiers JSON ont exactement les mêmes clés.
- [ ] `<html lang>` change avec la langue.
- [ ] Aucune clé brute affichée, repli français fonctionnel.
- [ ] La version kirundi a été relue par un natif.
- [ ] Les mises en page tiennent avec les textes anglais (souvent plus courts) et kirundi (souvent plus longs). Tester les débordements de boutons.

**Interaction**
- [ ] Navigation clavier complète, focus toujours visible.
- [ ] `prefers-reduced-motion` neutralise réellement toutes les animations.
- [ ] Aucune animation ne se rejoue au scroll inverse.
- [ ] Le formulaire gère : vide, erreur, chargement, succès, échec réseau.
- [ ] Les états de survol sont neutralisés sur tactile.

**Technique**
- [ ] Lighthouse ≥ 92 / 95 / 100 / 100 en mobile.
- [ ] CLS < 0,05, aucune image sans dimensions.
- [ ] Testé sur Chrome, Safari iOS, Firefox, et un Android d'entrée de gamme en 3G bridée.
- [ ] JSON-LD validé par l'outil de test des résultats enrichis de Google.
- [ ] HTTPS, redirection www, page 404 personnalisée et traduite.
- [ ] Le formulaire envoie réellement un email et il arrive dans la boîte, pas dans les spams.

---

## 14. Ordre d'exécution

| Phase | Contenu | Livrable |
|---|---|---|
| 1 | Tokens, typographie, base CSS, reset | Le socle. Rien d'autre ne commence avant. |
| 2 | Thème clair/sombre + anti-flash | Bascule fonctionnelle sur une page nue |
| 3 | Moteur i18n + les 3 JSON (FR complet, EN complet, RN provisoire) | Changement de langue fonctionnel |
| 4 | Header, hero, footer | La première impression, validée avant tout le reste |
| 5 | À propos, Services, Événements | Le cœur commercial |
| 6 | Galerie + lightbox | |
| 7 | Menu, Contact, carte, formulaire, WhatsApp | |
| 8 | Motion : apparitions, parallaxe, bande photo | Ajouté **en dernier**, sur une base déjà solide |
| 9 | Accessibilité, performance, SEO, recette | |

**Faire valider la phase 4 par le client avant d'aller plus loin.** Si le hero ne le fait pas vibrer, tout le reste est à refaire.

---

## 15. Prompt de démarrage pour l'agent de développement

> Tu vas refondre le site de Lenox Restaurant-Bar (Gitega, Burundi) en HTML, CSS et JavaScript natifs, sans framework.
>
> Le présent fichier est ta référence unique. Lis-le intégralement avant d'écrire une ligne de code. Les §1.2 (interdits), §3 (tokens) et §13 (recette) ne sont pas négociables.
>
> Travaille phase par phase selon le §14. À la fin de chaque phase, arrête-toi, présente le résultat et relis ton propre code contre le §1.2 et la recette du §13 avant de continuer.
>
> Critère de réussite : un visiteur ne doit pas pouvoir deviner que ce site a été assemblé à partir d'un gabarit. Chaque section doit avoir une raison d'être visuelle propre. Si une section ressemble à une grille de cartes générique, réécris-la.
>
> En cas de doute sur une décision esthétique, choisis la version la plus sobre et la plus contrastée. L'élégance vient de la retenue et de la précision, jamais de l'accumulation d'effets.

---

*Fin du cahier. Toute modification de ce document doit être répercutée dans la recette du §13.*
