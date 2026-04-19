# Space Invaders

Space Invaders is a browser-based clone built for instant, zero-install play: open it in a modern browser and jump straight into a fast, keyboard-first arcade session with hi-res visuals, smooth animation, and sound. The project stays deliberately lightweight, following the standards in [CONSTITUTION.md](CONSTITUTION.md) for responsive controls, deterministic gameplay, and no accounts, plugins, or backend requirements.

## Getting Started

Install dependencies, then start the local Vite dev server:

```bash
pnpm install
pnpm dev
```

Additional project scripts:

- `pnpm test` runs the Vitest test suite.
- `pnpm typecheck` runs TypeScript in no-emit mode.
- `pnpm lint` runs ESLint.
- `pnpm build` creates a production build with Vite.

## Controls

- `Left Arrow` or `A`: move left
- `Right Arrow` or `D`: move right
- `Space`: fire
- Pause/resume is planned in the roadmap in [CONSTITUTION.md](CONSTITUTION.md); the exact key binding is not defined yet.

## Browser Support

The game targets modern evergreen browsers with Canvas and Web Audio support, including current versions of Chrome, Firefox, Safari, and Edge.

## Roadmap And Standards

For the project roadmap, technical boundaries, and quality bar, see [CONSTITUTION.md](CONSTITUTION.md).
