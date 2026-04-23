#!/usr/bin/env bash
# Assemble the Pages deployment directory from OpenNext build output.
# Cloudflare Pages with _worker.js requires all worker dependencies
# to live alongside _worker.js in the deploy directory.
set -e

OUT=".open-next/pages-out"

rm -rf "$OUT"
mkdir -p "$OUT"

# Static assets
cp -r .open-next/assets/. "$OUT/"

# Worker entry point
cp .open-next/worker.js "$OUT/_worker.js"

# Worker dependencies (imported by _worker.js via relative paths)
cp -r .open-next/cloudflare "$OUT/cloudflare"
cp -r .open-next/middleware "$OUT/middleware"
cp -r .open-next/server-functions "$OUT/server-functions"
cp -r .open-next/.build "$OUT/.build"

echo "Pages output assembled at $OUT"
