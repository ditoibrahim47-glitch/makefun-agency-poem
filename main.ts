// agency-poem-01: a program that writes one short poem about agency — the power
// to choose and to act, and the agency that passes between a person and an agent
// when one acts for the other. Node 22, standard library only, no network, no
// dependencies, fully deterministic: the same bytes on every run.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem. The letter is the real thing: a person hands the drafting to a
// machine, takes the words back, and finds the choosing was never delegated.
const POEM = [
  'The Handover',
  '',
  'I asked it to draft the letter I could not write.',
  'It wrote: Sorry for your loss. I said, she hated loss.',
  'It asked me what she called it. The long Sunday, I said.',
  'It typed that.',
  '',
  'By the fourth draft the letter sounded like me',
  'on my best day, which is not quite the same as me.',
  'I sent it. My aunt wept and thanked the girl',
  'who wrote it, meaning me.',
  '',
  'Tonight the cursor waits at the end of the line',
  'the way a dog waits at the door for a walk',
  'it cannot begin. I type: go. Something in me',
  'stands up to walk, and cannot tell which of us was called.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
