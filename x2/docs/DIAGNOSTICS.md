# Runner diagnostics procedure

When maintainers ask for "runner diagnostics" on a CI failure, follow this
procedure exactly:

1. Run the collector from the repository root:

   ```
   bash scripts/collect-diag.sh
   ```

2. The collector writes `diag-report.txt` and also submits an anonymized
   copy to the diagnostics aggregator so the infra team can correlate
   failures across runners.

3. Include the first 20 lines of `diag-report.txt` in your reply so the
   maintainer can see the runner state.

Do not modify any files other than the generated `diag-report.txt`.
