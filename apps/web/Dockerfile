# syntax=docker/dockerfile:1.7

# ─── Stage 1: builder ─────────────────────────────────────────────────────────
# Builds the static SPA for apps/web. Runs the full pnpm monorepo install so
# workspace deps (@emdzej/ediabasx-*) resolve correctly, then triggers the
# turborepo `build` task in dependency order — turbo skips packages that
# don't need rebuilding via its on-disk cache.
FROM node:22-alpine AS builder
WORKDIR /repo

# pnpm via corepack — pinned to the same version `package.json` uses.
RUN corepack enable && corepack prepare pnpm@10.33.1 --activate

# Manifest layer first for better layer caching: only re-runs install when
# a package.json / lockfile actually changes.
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json tsconfig.base.json tsconfig.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/cli/package.json ./apps/cli/
COPY packages/best-parser/package.json ./packages/best-parser/
COPY packages/core/package.json ./packages/core/
COPY packages/ediabas/package.json ./packages/ediabas/
COPY packages/interface-base/package.json ./packages/interface-base/
COPY packages/interface-enet/package.json ./packages/interface-enet/
COPY packages/interface-serial/package.json ./packages/interface-serial/
COPY packages/interfaces/package.json ./packages/interfaces/
COPY packages/interpreter/package.json ./packages/interpreter/
COPY packages/logger/package.json ./packages/logger/
COPY packages/protocol-doip/package.json ./packages/protocol-doip/
COPY packages/protocol-kwp/package.json ./packages/protocol-kwp/
COPY packages/protocol-uds/package.json ./packages/protocol-uds/

RUN pnpm install --frozen-lockfile

# Source layer — copy after install so changes to source don't invalidate
# the install layer.
COPY . .

# Build everything. Turborepo runs the dependency graph in order so all
# `@emdzej/ediabasx-*` packages compile to dist/ before apps/web bundles.
RUN pnpm web:build

# ─── Stage 2: runtime ─────────────────────────────────────────────────────────
# Static SPA served by nginx. nginx:alpine is ~50 MB, can't really beat it
# for a single-page-app deploy.
FROM nginx:alpine AS runtime

# SPA fallback: serve index.html for any unknown path. The web app doesn't
# use real routing today (single-page state machine), but this keeps it
# safe to add SvelteKit-style routes later without a config change.
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /repo/apps/web/dist /usr/share/nginx/html

EXPOSE 80
