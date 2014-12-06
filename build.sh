#!/usr/bin/env bash

# Clean dist
rm -rf ./dist
mkdir -p ./dist

# Copy
cp ./src/phoneAU.js ./dist/phoneAU-$(./node_modules/.bin/pkg version).js

# Minify
./node_modules/.bin/uglifyjs ./src/phoneAU.js -c -o ./dist/phoneAU-$(./node_modules/.bin/pkg version).min.js
cp ./dist/phoneAU-$(./node_modules/.bin/pkg version).min.js ./dist/phoneAU-latest.min.js
