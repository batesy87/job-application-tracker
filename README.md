# Job Application Tracker

A small application-tracking tool — stages, chase-up rules, pipeline stats — built strictly test-first.

## Why this repo exists

I understand test-driven development, but I'd never worked somewhere that required it day to day. Rather than claim the experience or leave the gap, I set out to build the practice deliberately and in the open.

The application is real and I use it. The point, though, is *how* it was built: every behaviour in `src/` was specified by a failing test before any implementation existed.

## Reading the commit history

The history is the evidence, so it's kept legible on purpose:

- One commit per green test, with the test and the implementation that satisfies it landing together.
- Commit subjects name the **behaviour**, not the file — you should be able to read the requirements off `git log --oneline`.
- Refactors are committed separately and never change behaviour. If a refactor commit touches a test's expectations, that's a bug in my process, not a tidy-up.

```bash
git log --oneline
```

## Stack

| Concern | Tool |
| --- | --- |
| Unit + integration tests | Vitest |
| Component tests | React Testing Library |
| End-to-end | Playwright |
| Database | PostgreSQL, real instances in tests via Testcontainers |

Mocks are used at the boundaries — network, clock, I/O. The data layer is tested against actual PostgreSQL, because a mocked database can happily agree with a query that production would reject.

## Design notes

The domain logic is kept pure: functions that take values and return values, with side effects pushed to the edges. That isn't decoration, it's what TDD pressures you into — code that's hard to test is usually code that's hard to reason about, and the tests surface that early.

## Status

Work in progress, built over a series of evenings. Commits are dated and continuous rather than backfilled.

- [x] Toolchain and first passing test
- [ ] Day 1 — Red/green/refactor rhythm (String Calculator kata, `src/katas/`)
- [ ] Day 2 — Test lists and deliberate refactoring
- [ ] Day 3 — Domain logic, test-first
- [ ] Day 4 — Data layer against real PostgreSQL
- [ ] Day 5 — React components, tested behaviourally
- [ ] Day 6 — One end-to-end journey in Playwright
- [ ] Day 7 — AI-assisted implementation with the test suite as the guardrail

## Running it

```bash
npm install
npm test
```
