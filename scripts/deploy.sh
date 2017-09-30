#!/usr/bin/env bash

if [ "$TRAVIS" = "true" ]; then
  git config --global user.email "gh-pages@localhost"
  git config --global user.name "npm gh-pages"
fi

if [ -z "$GITHUB_TOKEN" ]; then
    echo "GITHUB_TOKEN is not set, bad...."
    return 1
fi

yarn install --silent
if [ ! -d "${PWD}/build"]; then
    yarn build
fi

./node_modules/.bin/gh-pages \
  --silent \
  --repo https://$GITHUB_TOKEN@github.com/MoOx/statinamic.git \
  --dist build/
