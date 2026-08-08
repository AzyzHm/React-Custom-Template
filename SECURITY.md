# Security Policy

## Supported Versions

This is a template repository intended to be used as a starting point for new projects. Security
fixes are applied to the `main` branch only.

| Version | Supported |
| ------- | --------- |
| main    | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this template (e.g. an unsafe default configuration,
a vulnerable dependency, or an insecure pattern baked into the generated code), please **do not**
open a public issue.

Instead:

1. Open a [GitHub Security Advisory](https://github.com/AzyzHm/React-Custom-Template/security/advisories/new)
   for this repository, **or**
2. Contact the maintainer directly with a description of the issue, steps to reproduce, and its
   potential impact.

Please include as much detail as possible so the issue can be triaged quickly:

- A clear description of the vulnerability
- Steps to reproduce (or a proof of concept)
- The potential impact if exploited
- Any suggested remediation, if you have one

## Response Expectations

- You should receive an acknowledgment within **5 business days**
- We'll aim to provide an initial assessment within **10 business days**
- Once confirmed, a fix will be prioritized based on severity and released as soon as reasonably
  possible

## Dependency Security

This template uses `npm audit` and GitHub's Dependabot alerts (recommended to enable on repos
generated from this template) to help keep dependencies up to date. Consider adding a
`dependabot.yml` to your generated project for automated dependency update PRs.

Thank you for helping keep this project and its users safe.
