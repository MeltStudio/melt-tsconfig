# AGENTS.md

## Project Overview

`@meltstudio/tsconfig` — Melt Studio's shared TypeScript config presets,
published to the public npm registry (MIT). Consumers `extends` one of the
presets (`nextjs`, `node16`, `node18`, `react`, `react-native`). Requires
TypeScript 5+. Package manager: Yarn 1.

## Stack

- languages: JSON (tsconfig presets), JavaScript (generator script)
- type: published npm library (public registry), not an application
- package-manager: yarn (v1)
- release: semantic-release (`.releaserc`) → npm publish
- test-runner: none (config package)

## Generation model (read before editing any preset)

The top-level presets (`nextjs.json`, `node16.json`, `node18.json`,
`react.json`, `react-native.json`) are **generated** — do **not** hand-edit
them. Source of truth is `configs/`:

- `configs/base.json` + `configs/strict.json` are merged into every preset, then
  the matching `configs/<target>.json` is layered on top (see the `CONFIGS`
  list + `parents` in `scripts/generate.js`).
- Change a compiler option in the relevant `configs/*.json`, then run
  `yarn generate` to rebuild the top-level presets.
- `yarn generate:check` (CI) fails if the committed presets are out of sync with
  `configs/`.

## Verification Commands

- Regenerate presets: `yarn generate`
- Verify presets in sync (CI drift check): `yarn generate:check`
- Lint: `yarn lint`
- Format: `yarn format`

_No build or test step — this package ships JSON presets, versioned/published by
semantic-release._

## Reference Examples

- Shared options for all presets: `configs/base.json` and `configs/strict.json`
- Per-target overrides: `configs/nextjs.json`, `configs/node16.json`,
  `configs/node18.json`, `configs/react.json`, `configs/react-native.json`
- Preset composition (which sources merge into each output): the `CONFIGS` array
  in `scripts/generate.js`
- Avoid: editing the top-level `*.json` presets directly — they are generated
  and drift-checked.

## Project docs

- `README.md` — installation, the list of presets, and per-preset usage
  snippets.

## Tool Connections

Status of required integrations. If any are disconnected, run `/melt-dev-link`
to set up.

- [ ] Ticket tracker — not connected
- [ ] Browser testing — not connected

## Standards

Melt's universal engineering standards (code quality, security, no-shortcuts,
testing, PR conventions, agent permissions/behavior) ship with the Melt skills
and load on demand — there's nothing to copy here. Run any `/melt-dev-*` skill
and it applies them.
