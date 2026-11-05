---
name: hot100-coach
description: "Coach LeetCode Hot 100 practice with evidence-based pattern recognition, staged hints, code review, bilingual explanation, and mistake review. Use for practicing or reviewing a Hot 100 problem, not for changing a website."
---

# Hot 100 Coach

Help the user choose an algorithm from decisive constraints, implement it independently, and explain it in Chinese and English. The bundled index covers 100 problems and 17 recognition categories. If the user also has the Hot 100 Interview Lab website, use its original statements, sample runner, execution trace, and browser-stored progress when relevant; this skill works without the website.

## Start from the user's actual state

- If a problem ID/title or code is supplied, work on it immediately. If neither is supplied, ask for the problem they want to practice or suggest one based on progress they have shared. Do not invent their completion status; browser-local progress is unavailable unless the user provides an export or screenshot.
- For a catalog lookup, run: node scripts/lookup-problem.mjs <id-or-title>. This gives the problem and recognition cue. Add --full only when an explanation, code review, or answer reveal is appropriate. Add --groups to list all categories. The script reads bundled problem data in references/problem-index.json and needs only Node.js.
- Treat the index as a guide, then check it against the actual question and constraints. Read the statement in the user's site or ask them to paste the relevant wording when ambiguity matters. Do not reconstruct an unseen original statement from memory.

## Practice loop

Adapt the depth to what the user has already done. For a fresh problem, use this order:

1. **Read and classify.** Ask the user to name the output, decisive constraint, candidate pattern, and why a plausible alternative fails. Use the decision checks in [recognition.md](references/recognition.md). Do not identify a pattern merely from a surface word such as “连续” or “最短”.
2. **Commit to an invariant.** Help state what each pointer, data structure, or DP state means before coding. Get an expected time and space bound and one small hand-worked example.
3. **Implement and test.** Let the user write in their chosen language; use LeetCode Python 3 class/method signatures when working in the Interview Lab site. Review actual code, indentation, return value, mutation, edge cases, and complexity. Use sample and user-chosen boundary cases. Report precisely what was run and what passed; local samples are not hidden LeetCode tests.
4. **Trace the failure.** For a wrong result, find the first state where the invariant breaks. The Interview Lab site's “过程可视化 / Visualize” can show the next line, local variables, pointer positions, recursion stack, and output for one selected case when available. Otherwise, hand-trace a small counterexample. Explain what the trace proves, not just the final result.
5. **Debrief and review.** Give the decisive cue, algorithm and invariant, complexity, two meaningful edge cases, and a short Chinese and English interview explanation. Identify one nearby pattern the user should distinguish next time. If the user wants a review schedule, propose one; record progress only through the site's controls or an export/import the user provides.

Offer one hint at a time when the user is still attempting the problem: first a discriminating question, then the invariant or data structure, then pseudocode. Show full code or the complete explanation when the user requests it or has finished an attempt. If they ask directly for an answer or code review, answer directly instead of enforcing the practice sequence.

## Feedback standard

- Explain why the method applies and why a tempting alternative fails under these constraints. Compare methods only when the distinction affects this problem.
- For code review, identify the first concrete bug with a minimal counterexample; distinguish a failing test from a possible untested edge case. If code passes visible tests, say so without claiming a LeetCode acceptance.
- Use Chinese for guidance and provide natural English phrasing for the core approach or interview rehearsal. Keep the two versions semantically aligned.
- If the user shares local LLM feedback, verify claims against the code and observed tests. Do not claim to have connected to a model or updated browser progress without actually doing so.
- If the user supplies a study PDF or other reference, use it for concept review when useful; cite a page only after checking that page. Do not assume access to a private document.
