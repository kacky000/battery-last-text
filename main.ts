// Writes the entry: the phone battery's last text to the charger it waited for all day (at most 200 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "you said you'd be home by lunch. it's 11pm, i'm at 1%, and i just watched you plug the earbuds in first. don't come back. ok come back. please come b";
const limit = 200;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
