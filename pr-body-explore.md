## Summary
- add `ediabas explore <file>` interactive TUI using Ink
- implement navigation/items/content/details panels with keyboard controls and search
- add terminal resize handling and help view

## Testing
- `pnpm -C packages/cli build`
- `node packages/cli/dist/index.js explore test-data/d_motor.prg`

## Notes
- Includes local stdout-dimensions hook mirroring ink-use-stdout-dimensions behavior to avoid CJS/ESM incompatibility with Ink v5.

Fixes #36
