import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Fortune in a Pot — make.fun entry (program/v1, Node 22).
// A fortune for a houseplant, written as if the pot itself spoke.
// Entry is 117 characters (gate 1–120). Verified deterministic: two local
// runs write byte-identical entry.txt.
const ENTRY =
  "The dust will be wiped from your leaves this Sunday, and you'll shine so bright the window itself feels underdressed.";

// Gate self-check: 1–120 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-120`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
