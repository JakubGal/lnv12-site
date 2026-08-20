import { spawnSync } from "node:child_process";
import { access, copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const prerendered = path.join(dist, "server", "prerendered-routes");
const cli = path.join(root, "node_modules", "vinext", "dist", "cli.js");

await rm(dist, { recursive: true, force: true });

const build = spawnSync(process.execPath, [cli, "build", "--prerender-all"], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
});

const generatedIndex = path.join(prerendered, "index.html");

try {
  await access(generatedIndex);
} catch {
  process.exit(build.status ?? 1);
}

// vinext 1.0.0-beta.2 can finish its Windows build and then trip a libuv
// shutdown assertion. Fresh output above proves the export completed; CI on
// Linux still treats any non-zero build result as a real failure.
if (build.status !== 0 && process.platform !== "win32") {
  process.exit(build.status ?? 1);
}

await mkdir(client, { recursive: true });
await copyFile(generatedIndex, path.join(client, "index.html"));
await copyFile(path.join(prerendered, "404.html"), path.join(client, "404.html"));
await writeFile(path.join(client, ".nojekyll"), "");
await writeFile(path.join(client, "CNAME"), "lnv.sk\n");

console.log("\nStatic GitHub Pages export is ready in dist/client.");
