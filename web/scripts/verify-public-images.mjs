/**
 * Ensures portfolio images exist under src/assets/portfolio/ (bundled by webpack).
 * Copy from public/: cp public/headshot.jpeg public/dog.jpg public/pickleball.webp public/tacos.jpg src/assets/portfolio/
 * Run: npm run verify:images
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetDir = path.join(__dirname, "..", "src", "assets", "portfolio");

const required = [
  "headshot.jpeg",
  "dog.jpg",
  "pickleball.webp",
  "tacos.jpg",
];

let allOk = true;

console.log(`Checking ${assetDir}\n`);

for (const name of required) {
  const filePath = path.join(assetDir, name);
  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ Missing: src/assets/portfolio/${name}`);
    allOk = false;
    continue;
  }
  const st = fs.statSync(filePath);
  if (st.size === 0) {
    console.error(`  ✗ Empty file (0 bytes): src/assets/portfolio/${name}`);
    allOk = false;
    continue;
  }
  console.log(`  ✓ src/assets/portfolio/${name} (${st.size} bytes)`);
}

if (!allOk) {
  console.error(
    "\nAdd the four images to src/assets/portfolio/ (copy from public/ if needed).",
  );
  process.exit(1);
}

console.log("\nAll portfolio images present.");
process.exit(0);
