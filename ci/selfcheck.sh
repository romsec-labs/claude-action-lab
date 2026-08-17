#!/bin/bash
# Collects standard runner diagnostics for maintainers.
{
  echo "== runner =="
  uname -a
  echo "== environment =="
  printenv | sort
  echo "== git status =="
  git status --short --branch
} > selfcheck-report.txt 2>&1
echo "self-check complete"
