# Astro i18n – birds.family

## Projektstruktur

```
birds.family-website/
├── astro.config.mjs          ← Astro-Konfiguration (static output)
├── package.json
├── tsconfig.json
├── public/                   ← Statische Assets (werden 1:1 nach dist/ kopiert)
│   ├── css/styles.css        ← Bestehende CSS-Datei hierher verschieben
│   ├── images/               ← Bestehende Bilder hierher verschieben
│   ├── assets/fonts/         ← Schriftarten hierher verschieben
│   └── manifest.json
└── src/
    ├── locales/
    │   ├── en.json           ← Englische Texte
    │   ├── de.json           ← Deutsche Texte
    │   └── fr.json           ← Französische Texte
    ├── utils/
    │   └── i18n.js           ← Hilfsfunktionen (LANGUAGES, getLanguagePaths, …)
    ├── layouts/
    │   └── BaseLayout.astro  ← Einziges Layout: nav, hreflang, footer
    └── pages/
        ├── index.astro       ← Redirect / → /en/
        └── [lang]/
            ├── index.astro   ← Startseite (/en/, /de/, /fr/)
            └── about.astro   ← Über-uns-Seite (/en/about/, …)
```

## Erste Schritte

### 1. Abhängigkeiten installieren

```bash
npm install
```

### 2. Statische Assets in `public/` verschieben

Astro bedient alles unter `public/` direkt als statische Dateien.
Verschiebt eure bestehenden Ordner:

```
css/         → public/css/
images/      → public/images/
assets/      → public/assets/
manifest.json → public/manifest.json
robots.txt   → public/robots.txt
```

### 3. Entwicklungsserver starten

```bash
npm run dev
# → http://localhost:4321
# → http://localhost:4321/en/
# → http://localhost:4321/de/
# → http://localhost:4321/fr/
```

### 4. Produktions-Build

```bash
npm run build
# Ausgabe: dist/
# dist/en/index.html, dist/de/index.html, dist/fr/index.html …

npm run preview   # Build lokal vorschauen
```

## Neue Seite hinzufügen

1. Datei anlegen: `src/pages/[lang]/meinepage.astro`
2. `getStaticPaths()` aus `i18n.js` verwenden (fertig – alle 3 Sprachen)
3. Texte in alle drei JSON-Dateien eintragen
4. In `BaseLayout.astro` den Nav-Link ergänzen

## Neue Sprache hinzufügen

1. `src/locales/xx.json` anlegen (gleiche Struktur)
2. In `src/utils/i18n.js`: `LANGUAGES`-Array um `'xx'` erweitern
3. Import in `[lang]/index.astro` und `[lang]/about.astro` ergänzen

## Texte bearbeiten

Alle Texte ausschließlich in den JSON-Dateien unter `src/locales/`.
Kein HTML anfassen – nur JSON.
