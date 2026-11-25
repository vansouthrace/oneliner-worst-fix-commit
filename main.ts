// One line for the make.fun bounty: a commit message for the bug fix that made everything worse.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "fix: login crash fixed; logout now crashes instead, for balance";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
