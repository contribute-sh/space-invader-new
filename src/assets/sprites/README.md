# Sprites

This directory reserves hi-res gameplay sprite assets.

- Purpose: PNG and SVG art for ships, invaders, bullets, explosions, and bunkers.
- Naming: use kebab-case filenames such as `invader-a.png` and `player-ship.png`.
- Preload discipline: per `CONSTITUTION.md`, every sprite used in gameplay must load before gameplay starts, with no mid-game asset pops.
- Future work: a dedicated asset manifest module will enumerate these files for preload orchestration.
