# Dutility mobile

This repository contains the Expo/React Native app for Dutility, a catalog of everyday PDF, image, video, audio, document, text, file, archive, URL/QR, and AI utilities.

The web product in `../dutility-frontend` is the product reference. Its catalog currently contains 91 tools in 10 categories. Only PDF to Word and PDF to Image have published workspace pages, and those pages do not yet call a conversion backend.

## Product boundaries

- Do not invent API endpoints, authentication behavior, billing rules, credit values, or file-retention promises.
- Conversion, Clerk authentication, payments, and job history remain unimplemented until their contracts are defined.
- Keep API surfaces separate: web health checks use `GET /status`; the Expo app uses `GET /mobile/status` on the deployed backend.
- Do not point mobile code at the web status route or add `/api` to these paths; Azure Functions' default `/api` prefix is disabled.
- The first two functional modules are `pdf-to-word` and `pdf-to-image`; mobile conversion requests must use the backend's `/mobile/` API surface.
- Keep `.env.example` and the local `.env` present for Expo. `EXPO_PUBLIC_API_BASE_URL` must point to the deployed mobile API base URL; never commit secrets in either file.
- A published workspace means that a route and interface exist; it does not imply that server-side conversion exists.
- Keep copy factual and concise. Never claim that a file is processed locally, private, deleted, or secure unless the implementation proves it.

## Expo documentation

Expo changes every SDK release. Before editing Expo, EAS, Expo Router, or React Native APIs:

1. Read the major version of `expo` in `package.json`.
2. Use the matching docs at `https://docs.expo.dev/versions/v<major>.0.0/`.
3. Read `https://docs.expo.dev/llms.txt` and follow the relevant linked page.

Use `npx expo install <package>` for dependencies so Expo selects SDK-compatible versions. Do not add `ios/` or `android/` directories; this project uses Continuous Native Generation through `app.json` and config plugins.

## Project structure

- `src/app/`: routes and route layouts only.
- `src/components/`: reusable presentational components.
- `src/data/`: typed product catalog data.
- `src/theme/`: design tokens and typography.
- `src/config/`: public runtime configuration. Never put secrets in `EXPO_PUBLIC_*` variables.
- `assets/`: app icons, splash assets, and static media.

Use the `@/` alias for imports from `src/`. Keep business and integration logic out of route components as those concerns are added.

## Navigation

- Use Expo Router for all navigation.
- Use `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Tool details use `/tool/[slug]`. Slugs come from `src/data/catalog.ts`.
- Prefer one navigator until the product genuinely needs tabs. Do not add placeholder tabs for future features.

## Design system

Dutility is light-first and uses IBM Plex Sans.

- Canvas: `#F7F7F9`
- Surface: `#FFFFFF`
- Ink: `#23232D`
- Muted ink: `#656574`
- Primary indigo: `#6366F1`
- Soft indigo: `#ECECFF`

Use tokens from `src/theme/tokens.ts`; do not scatter new brand colors or spacing constants through screens. Favor compact, legible utility interfaces over decorative cards. Preserve safe-area insets, 44-point minimum touch targets, visible pressed states, screen-reader labels, dynamic text wrapping, and reduced-motion preferences.

Use React Native primitives in shared files. Platform-specific DOM or CSS belongs only in `.web.tsx` files.

## Adding a tool

1. Add the tool to `src/data/catalog.ts` with an existing category ID and unique slug.
2. Keep the catalog description aligned with the web frontend.
3. Reuse `/tool/[slug]` unless the tool truly needs a specialized route.
4. Put tool-specific workflows under a future `src/features/<tool-slug>/` directory rather than expanding the route file.
5. Add validation, progress, cancellation, success, failure, and result-sharing states when processing is implemented.

## Commands and quality gates

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
npm run typecheck
npm run doctor
```

Before declaring work complete, run lint and typecheck. Run Expo Doctor after dependency or app-config changes. For routing, asset, or bundling changes, also export the affected platform.

Do not run `npm audit fix --force`; it may replace Expo packages with SDK-incompatible versions.
