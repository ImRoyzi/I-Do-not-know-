# AppTest project guidance

## Project layout
- frontend/: Expo React Native app
- backend/: Express API server
- root package.json: convenience scripts for starting both sides together

## Working rules
- Keep the backend API in `backend/src/index.js` and expose simple REST endpoints.
- Keep frontend UI code in `frontend/App.tsx` or related files under `frontend/`.
- Prefer small, testable changes and verify with `npm run dev` or the relevant package script after edits.

## Common commands
- `npm run dev` — start both frontend and backend
- `cd backend && npm run dev` — start backend only
- `cd frontend && npm start` — start Expo only
