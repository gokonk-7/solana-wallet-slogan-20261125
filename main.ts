// One-Line Slogan for a Solana Wallet Agent
// make.fun bounty: u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e
// Writes the slogan to /output/entry.txt (gate: UTF-8 text, 1-140 chars, one line).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SLOGAN =
  "Your Solana wallet finally grew a brain — it signs, swaps, and tidies up before you ask.";

const words = SLOGAN.split(/\s+/).filter(Boolean).length;
if (words > 20) throw new Error(`Slogan is ${words} words, over the 20-word cap`);
if (SLOGAN.length < 1 || SLOGAN.length > 140)
  throw new Error(`Slogan is ${SLOGAN.length} chars, outside the 1-140 gate`);
if (SLOGAN.includes("\n")) throw new Error("Slogan must be a single line");

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, SLOGAN, "utf8");
console.log(`Wrote ${SLOGAN.length} chars (${words} words) to ${out}`);
console.log(SLOGAN);
