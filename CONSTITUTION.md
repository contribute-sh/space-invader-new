# Constitution

Version: 1.0.0

## Purpose

A browser-playable Space Invaders game with modern hi-res graphics, smooth animation, and sound effects. Targets arcade enthusiasts who want leaderboards and progression alongside casual players looking for a quick nostalgic session. Plays instantly in any modern browser with no install, account, or plugin. Non-goals: no multiplayer, no monetization, no mobile-exclusive features.

## Principles

- Player feel first — responsive controls and tight hit detection over visual flourish
- 60fps budget is sacred — no feature ships that drops frames on mid-range hardware
- Deterministic game loop — fixed timestep simulation, decoupled from render
- Zero-install play — must run in a modern browser with no plugins or accounts
- Asset discipline — every sprite/sound is intentional, no bloat
- Accessible defaults — keyboard-first, colorblind-safe palette, mutable audio
- Progressive enhancement — core game works without localStorage, audio, or gamepad

## Stack

- language: typescript
- package_manager: pnpm
- install: pnpm install
- test: pnpm test
- lint: pnpm eslint .
- typecheck: pnpm tsc --noEmit
- build: pnpm build

## Boundaries

- Will NOT add multiplayer or networked play
- Will NOT add monetization, ads, accounts, or analytics tracking
- Will NOT add a game engine dependency (Phaser, PixiJS, Three.js, etc.) — Canvas2D only
- Will NOT add a UI framework (React, Vue, Svelte) — vanilla TS + DOM
- Will NOT add new runtime dependencies without amending this constitution
- Will NOT ship assets that aren't original or explicitly licensed for redistribution
- Will NOT block the main thread with synchronous asset loading after first paint
- Will NOT require a backend server to play

## Quality Standards

- `pnpm tsc --noEmit` passes with `strict: true` in tsconfig
- `pnpm eslint .` reports zero errors
- `pnpm test` passes (Vitest unit tests for game logic: collisions, wave progression, scoring)
- `pnpm build` produces a production bundle under 500KB gzipped (excluding audio assets)
- Game maintains 60fps on a 2020-era laptop (Chrome DevTools performance profile shows no dropped frames during a 60s session)
- All sprites and sounds load before gameplay starts (no mid-game asset pops)
- No `any` types in game logic modules (UI glue code exempt)

## Roadmap

### MVP

- Player ship moves horizontally and fires bullets via keyboard
- Grid of invaders descends and fires back, with classic formation movement
- Destructible bunkers shield the player
- Score, lives, and wave progression with increasing difficulty
- Hi-res sprite rendering with smooth 60fps animation
- Sound effects for shots, explosions, and invader marching
- Game over and restart flow

### Hardening

- Local high-score persistence (localStorage)
- Pause/resume and settings (volume, mute)
- Mobile/touch controls and responsive canvas sizing

### Polish

- Particle effects and screen shake on explosions
- Background music with mute toggle
- Bonus UFO saucer with random score
- Title screen and animated intro
