# Hot 100 Coach / Hot 100 刷题教练

A bilingual Codex skill for practicing LeetCode Hot 100. It coaches pattern recognition, asks for the decisive evidence and invariant, offers one hint at a time, reviews code and counterexamples, and helps rehearse Chinese and English interview explanations.

这是一个中英双语 Codex skill：先判断题型与成立条件，再写不变量、独立编码、核对反例，最后用中英两种语言复述。直接请求完整解法时，它也会直接给出。

## Install / 安装

Clone this repository and copy the whole folder into your Codex skills directory. For the current Codex desktop setup on Windows:

    git clone https://github.com/vacucity/hot100-coach.git
    Copy-Item -Recurse -LiteralPath .\hot100-coach -Destination "$HOME\.codex\skills\hot100-coach"

Start a new Codex chat, then try:

    $hot100-coach 带我练 560 和为 K 的子数组，先让我自己判断题型。
    $hot100-coach Review my Python solution for problem 124 and find the first failing case.

Node.js is needed for the optional bundled-data lookup script:

    node scripts/lookup-problem.mjs 560
    node scripts/lookup-problem.mjs 124 --full
    node scripts/lookup-problem.mjs --groups

The skill's coaching instructions work without Node.js; the script makes exact catalog lookup easier. The Hot 100 Interview Lab website is optional. If available, it adds the original statements, Python sample runner, and execution trace. This repository contains no original problem statements, personal progress, or study PDF. Local sample passes do not establish acceptance on LeetCode hidden tests.

## Files / 文件

- SKILL.md — coaching workflow and feedback rules
- references/recognition.md — 17-category discrimination checklist
- references/problem-index.json — 100 problem titles, cues, routes, and bilingual approach summaries
- scripts/lookup-problem.mjs — local catalog lookup
- scripts/rebuild-index.mjs — maintainer helper to regenerate the index from an Interview Lab site directory

To rebuild the data from a local Interview Lab checkout:

    node scripts/rebuild-index.mjs path/to/hot100-site

Only the curated fields named above are exported. The original statements, sample cases, site code, and PDF are excluded.
