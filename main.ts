// agency-poem-01 entry (Node 22, standard library only): writes one short poem
// about agency to /output/entry.txt. Deterministic, no network, no dependencies.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave the agent my to-do list and it gave me back my day,',
  'sorted, answered, emptied out, and I sat in the clean middle of it',
  'and could not think what I had wanted it for.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
