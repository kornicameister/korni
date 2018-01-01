#!/bin/bash

CODACY_PROJECT_TOKEN=${CODACY_PROJECT_TOKEN}

if [ -z "$CODACY_PROJECT_TOKEN" ]; then
  die ">>> - \"CODACY_PROJECT_TOKEN\" is empty"
fi

die() {
  echo "$*" 1>&2 ; exit 1;
}

run() {
  react-scripts-ts test --env=jsdom --silent --coverage
  cat ./coverage/lcov.info | codacy-coverage
  rm -rf ./coverage
}

run
