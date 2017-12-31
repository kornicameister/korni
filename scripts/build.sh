#!/bin/bash

# constants
DOT_ENV=${PWD}/.env.production
PACKAGE_JSON=${PWD}/package.json

# variables injected from travis environmental variables
REACT_APP_GA_KEY=${KORNI_GA_ID}
KORNI_VERSION=$(node -p -e "require('${PWD}/package.json').version")

# helper functions
update_dot_env() {
  echo ">>> Creating ${DOT_ENV} file for producation build"

  cat >"${DOT_ENV}" <<EOL
REACT_APP_GA_KEY=${REACT_APP_GA_KEY}
REACT_APP_VERSION=${KORNI_VERSION}
EOL

}

check_env() {
  echo ">>> Checking required environmental variable presence"

  if [ -z "$KORNI_GA_ID" ]; then
    die ">>> - \"KORNI_GA_ID\" is empty"
  fi
}

build() {
  echo ">>> Running production build"

  react-scripts-ts build
}

clean() {
  echo ">>> Cleaning ${DOT_ENV}"
  rm -rf $DOT_ENV
}

die() {
  echo "$*" 1>&2 ; exit 1;
}

echo ">>> Running build script" && check_env && update_dot_env && build && clean
