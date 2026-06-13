# Copilot project instructions

This repository contains a React Native Expo frontend and an Express backend.

## Priorities
- Keep the frontend and backend independent but easy to connect.
- Prefer simple, documented API routes on the backend.
- Use TypeScript in the frontend where possible.
- Verify changes with the relevant package scripts before finalizing.

## Suggested workflow
1. Update backend endpoints in `backend/src/index.js` when API changes are needed.
2. Update Expo screens or components in `frontend/` when UI changes are needed.
3. Run `npm run dev` to confirm the app boots and the API responds.
