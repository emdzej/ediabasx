# Development

## Prerequisites
- Node.js + pnpm (see root `package.json`)
- `pnpm install`

## Build, Test, Lint
```bash
pnpm build        # turbo run build
pnpm test         # turbo run test
pnpm lint         # turbo run lint
pnpm typecheck    # turbo run typecheck
```

## Adding New Opcodes
1. Implement opcode behavior in `packages/interpreter/src/operations/` (choose the appropriate module).
2. Register the opcode handler in `packages/interpreter/src/interpreter.ts` inside `getHandler()`.
3. Add/extend tests in `packages/interpreter/src/*.spec.ts` for the new opcode behavior.
4. Update docs if the opcode affects user-facing behavior.

## Adding New Interfaces
1. Create a new interface class extending `EdiabasInterface` in a new package (e.g. `packages/interface-xyz`).
2. Export the interface from that package’s `src/index.ts`.
3. Register the interface in `@ediabas/interfaces`:
   - Add metadata in `packages/interfaces/src/registry.ts`
   - Register construction logic in `packages/interfaces/src/factory.ts`
4. Update CLI docs and examples if new options are added.

## Contributing Guidelines
- Use feature branches: `feature/issue-XXX-short-desc`
- Commit format: `type(scope): message` (conventional commits)
- Keep TypeScript strict and run tests for new functionality
- Update documentation when behavior changes
