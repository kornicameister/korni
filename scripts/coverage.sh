#!/bin/bash

CODACY_PROJECT_TOKEN=${CODACY_PROJECT_TOKEN}

if [ -z "$CODACY_PROJECT_TOKEN" ]; then
  die ">>> - \"CODACY_PROJECT_TOKEN\" is empty"
fi

die() {
  echo "$*" 1>&2 ; exit 1;
}

run() {
  echo ">>> Running coverage calculation" && react-scripts-ts test --env=jsdom --silent --coverage
  echo ">>> Running codacy==$(codacy-coverage --version)" && codacy-coverage --language typescript --verbose < ./coverage/lcov.info
  rm -rf ./coverage
}

run
