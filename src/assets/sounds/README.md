# Sounds

This directory reserves gameplay sound assets.

- Purpose: WAV, OGG, and MP3 files for shots, explosions, and invader march steps.
- Naming: use kebab-case filenames such as `player-shot.wav` and `invader-step-1.ogg`.
- Preload discipline: per `CONSTITUTION.md`, every sound used in gameplay must load before gameplay starts, with no mid-game asset pops.
- Future work: a dedicated asset manifest module will enumerate these files for preload orchestration.
