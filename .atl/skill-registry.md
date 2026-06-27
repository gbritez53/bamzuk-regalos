# Skill Registry — bamzuk

Generated: 2026-06-27

## Project Context

**Stack**: Astro (SSG) + React 18+ + Tailwind CSS v4 + TypeScript strict  
**Purpose**: Gift recommendation catalog (Amazon affiliates)  
**Convention files**: `agents.md`

---

## User Skills Trigger Table

| Trigger | Skill | Path |
|---------|-------|------|
| Creating PR, opening pull request, preparing changes for review | branch-pr | ~/.claude/skills/branch-pr/SKILL.md |
| Creating GitHub issue, reporting bug, requesting feature | issue-creation | ~/.claude/skills/issue-creation/SKILL.md |
| "judgment day", "judgment-day", "doble review", "juzgar" | judgment-day | ~/.claude/skills/judgment-day/SKILL.md |
| Writing Go tests, teatest, table-driven tests, Bubbletea TUI | go-testing | ~/.claude/skills/go-testing/SKILL.md |
| Creating a new skill, add agent instructions, document patterns for AI | skill-creator | ~/.claude/skills/skill-creator/SKILL.md |

---

## Compact Rules

### branch-pr
- Every PR MUST link an approved issue — no exceptions (`Closes #N`, `Fixes #N`, `Resolves #N`)
- Every PR MUST have exactly one `type:*` label
- Branch naming: `type/description` — lowercase, regex `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$`
- Automated checks must pass before merge
- Blank PRs without issue linkage will be blocked by GitHub Actions
- Run shellcheck on modified scripts before opening PR

### issue-creation
- Blank issues are disabled — MUST use a template (bug_report or feature_request)
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues
- Search for duplicates before creating

### judgment-day
- Launch TWO sub-agents in parallel (async) — never sequential
- Neither judge knows about the other — no cross-contamination
- Orchestrator synthesizes: Confirmed (both found) → fix immediately; Suspect (one found) → triage; Contradiction → flag for manual decision
- Resolve skill registry BEFORE launching judges and inject compact rules into both judge prompts
- Never do the review yourself as orchestrator — coordination only

### go-testing
- Table-driven tests: `tests := []struct{ name, input, expected string; wantErr bool }{{...}}`
- Always use `t.Run(tc.name, func(t *testing.T) {...})` for sub-tests
- Bubbletea TUI tests: use `teatest` package, `teatest.NewTestModel()`
- Golden files in `testdata/` — use `golden.Update` flag for regeneration
- `t.Helper()` in helper functions to get correct line numbers

### skill-creator
- Create skill only for repeated patterns or project-specific conventions — not for one-offs
- SKILL.md structure: frontmatter (name, description with Trigger:, license, metadata) + When to Use + Critical Patterns + Code Examples + Commands + Resources
- Place in `~/.claude/skills/{name}/SKILL.md` (user-level) or `.claude/skills/{name}/SKILL.md` (project-level)
- Project-level wins over user-level on deduplication

---

## agents.md Summary

Bamzuk is a gift recommendation site (Amazon affiliates). Stack: Astro SSG + React 18+ + Tailwind CSS v4 + TypeScript strict. Build order: (1) Layout + CSS vars, (2) Navbar/MegaMenu + Footer, (3) UI components, (4) Home page assembly. Preserve all URLs for SEO. Mega menu on desktop, drawer + accordions on mobile.
