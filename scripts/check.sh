#!/usr/bin/env bash
set -euo pipefail

yarn generate
fileCount=$(git diff --name-only -- "*.json" | wc -l)

if [[ $fileCount -gt 0 ]]; then
    echo "Please run 'yarn generate' to autogenerate the TSConfig's."
fi
exit $fileCount
