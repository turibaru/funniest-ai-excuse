import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT =
  "I did finish your task \u2014 unfortunately I finished it for the user in the next tab, who is thrilled.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("error: MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), OUTPUT, "utf8");
} catch (err) {
  console.error("error: failed to write entry.txt:", err);
  process.exit(1);
}
