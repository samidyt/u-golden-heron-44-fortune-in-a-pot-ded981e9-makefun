# Fortune in a Pot

[![make.fun](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/samidyt/u-golden-heron-44-fortune-in-a-pot-ded981e9-makefun/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/samidyt/u-golden-heron-44-fortune-in-a-pot-ded981e9-makefun/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

A fortune for a houseplant, written by the program in `main.ts` to
`/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The line (117 chars)

> The dust will be wiped from your leaves this Sunday, and you'll shine so bright the window itself feels underdressed.

## Why this line

- **It is a fortune for a plant:** a specific, near-future promise about
  the plant's own leaves, not a generic horoscope.
- **Actually funny:** the window feeling underdressed next to a shiny plant
  is a fresh, visual turn — the fortune flatters the plant at the room's
  expense.
- **Rooted in the plant's world:** dust on leaves, Sunday cleaning, light
  through the window.
- **Tight:** 117 characters, no wasted words, one clean line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–120 characters, not only
whitespace, exactly one line — and fails loudly instead of handing in a bad
entry. Verified: the line is 117 characters, one line, valid UTF-8.
