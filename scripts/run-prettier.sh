#!/bin/sh

set -e

find . \
     \( \
     -name '*.js' \
     -o -name '*.json' \
     -o -name '*.md' \
     \) \
     -not -path './node_modules/*' \
     -not -path './flow-typed/*' \
     -print0 | xargs --null "$(npm bin)/prettier" --write
