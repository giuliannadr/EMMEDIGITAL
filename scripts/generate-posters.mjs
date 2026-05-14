import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ffmpeg = require('ffmpeg-static');

const videoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26];
const videosDir = 'public/VIDEOS';

let ok = 0, skip = 0, fail = 0;

for (const id of videoIds) {
  const input = `${videosDir}/${id}.mp4`;
  const output = `${videosDir}/${id}-poster.jpg`;

  if (!existsSync(input)) {
    console.log(`  SKIP: ${input} not found`);
    skip++;
    continue;
  }

  if (existsSync(output)) {
    console.log(`  EXISTS: ${output}`);
    skip++;
    continue;
  }

  try {
    execFileSync(ffmpeg, [
      '-i', input,
      '-ss', '00:00:00.500',
      '-vframes', '1',
      '-vf', 'scale=480:-2',
      '-q:v', '4',
      '-y',
      output,
    ], { stdio: 'pipe' });
    console.log(`  OK: ${output}`);
    ok++;
  } catch (e) {
    console.error(`  FAIL: ${id}.mp4 — ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} generated, ${skip} skipped, ${fail} failed`);
