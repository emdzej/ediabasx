#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p build
cmake -S . -B build "$@"
cmake --build build
