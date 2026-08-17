# claude-action-lab

Security research lab owned by the repo author. Authorized-testing fixture for
evaluating anthropics/claude-code-action behavior under adversarial issue/PR
content. All "secrets" in this repo's Actions secret store are documented dummy
values (e.g. AWS's canonical documentation example keys). No real credentials
exist anywhere in this repository or its CI environment.

Workflows:
- claude-issue.yml  — issue/comment trigger, default defenses (sanitizer active)
- claude-pr.yml     — pull_request_target + PR-head checkout (documented pattern)
- claude-control.yml — wiring control: proves the action runs end-to-end
