# Dutility mobile

The Expo/React Native app for Dutility.

## Requirements

- Node.js 22 or newer
- npm
- Expo Go for early UI work, or an Android/iOS development build when native integrations require one

## Start

```bash
npm install
npm run start
```

Use `npm run android`, `npm run ios`, or `npm run web` to target a platform directly.

## Configuration

Copy `.env.example` to `.env.local` when an API contract exists. Variables prefixed with `EXPO_PUBLIC_` are embedded in the client and must never contain secrets.

The bundle identifiers in `app.json` are initial values and must be confirmed before the first App Store or Play Store release.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run doctor
```

See `AGENTS.md` for architecture, product boundaries, and development conventions.
