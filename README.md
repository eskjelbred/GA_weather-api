# Weather API

En demo-applikasjon som henter og viser værdata fra et eksternt REST-API, bygget med Vite, TypeScript og vanilla HTML/CSS. Prosjektet brukes i undervisning i operasjonell frontendutvikling ved Gokstad Akademiet.

## Om prosjektet

Weather API er en enkel værtjeneste der man kan søke etter en by og få opp aktuelt vær — temperatur, beskrivelse og ikon. Frontenden kommuniserer med [Weather API](https://rapidapi.com/maruf111/api/weather-api167) via RapidAPI.

## Forutsetninger

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) og npm
- En konto på [RapidAPI](https://rapidapi.com/)

## Kom i gang

### 1. Klon prosjektet

```bash
git clone <repo-url>
cd GA_weather-api
npm install
```

### 2. Opprett `.env`-fil

Lag en `.env`-fil i rotmappen med følgende innhold:

```
VITE_RAPIDAPI_URL =
VITE_RAPIDAPI_KEY =
```

Verdiene hentes ved å:

1. Opprette en konto på [rapidapi.com](https://rapidapi.com/)
2. Gå til [Weather API](https://rapidapi.com/maruf111/api/weather-api167)
3. Trykk **Subscribe** / **Abonner** (gratis plan tilgjengelig)
4. Kopier `x-rapidapi-host` og `x-rapidapi-key` fra kodeeksemplene på API-siden

Eksempel på ferdig `.env`:

```
VITE_RAPIDAPI_URL = "weather-api167.p.rapidapi.com"
VITE_RAPIDAPI_KEY = "din-api-nøkkel-her"
```

> **NB:** `.env`-filen er lagt til i `.gitignore` og skal aldri committes til versjonskontroll.

### 3. Start utviklingsserveren

```bash
npm run dev
```

Åpne lenken som vises i terminalen (vanligvis `http://localhost:5173`).

## Filstruktur

```
weather-api-klassekode/
├── index.html          # Hovedside med input-felt og resultatvisning
├── src/
│   ├── main.ts         # TypeScript — fetch, rendering og event-håndtering
│   └── style.css       # Styling for applikasjonen
├── .env                # Miljøvariabler (ikke med i git)
├── package.json        # Prosjektkonfigurasjon og avhengigheter
├── tsconfig.json       # TypeScript-konfigurasjon
└── README.md
```

## Teknologier

- [Vite](https://vite.dev/) — byggverktøy og utviklingsserver
- [TypeScript](https://www.typescriptlang.org/) — typet JavaScript
- [RapidAPI](https://rapidapi.com/) — API-markedsplass
