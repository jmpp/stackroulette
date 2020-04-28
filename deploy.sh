#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploying to a custom domain
echo 'stackroulette.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploying to https://jmpp.github.io/stackroulette
git push -f git@github.com:jmpp/stackroulette.git master:gh-pages

cd -