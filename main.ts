import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "fix: stop the crash by catching every exception and ignoring it; nothing crashes now, nothing works";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
