# VitePress Documentation Site Prompt

Use these steps to regenerate or update the VitePress documentation site.

1. Read `AGENTS.md` first
2. `git fetch origin && git checkout main && git pull origin main`
3. Create branch: `git checkout -b feature/vitepress-docs`
4. Install vitepress: `pnpm add -D vitepress`
5. Implement all changes above
6. Run `pnpm docs:build` to verify it builds
7. Commit all changes
8. Push: `git push -u origin feature/vitepress-docs`
9. Write PR body to `/tmp/pr-body.md`
10. Create PR: `gh pr create --title "feat: add VitePress documentation site" --body-file /tmp/pr-body.md`
11. **REPORT THE PR URL** — this is critical!
