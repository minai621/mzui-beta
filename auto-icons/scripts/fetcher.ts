import fs from "fs";

import { execFile as rawExecFile } from "node:child_process";
import util from "node:util";
import path from "path";
import { fileURLToPath } from "url";
import { icons } from "../src/icons.ts";
import { IconSetGitSource } from "./_type";

const execFile = util.promisify(rawExecFile);

interface Context {
  distBaseDir: string;
  iconDir(name: string): string;
}

const __dirname = fileURLToPath(new URL(".", import.meta.url));

async function main() {
  const PQueue = (await import("p-queue")).default;
  const distBaseDir = path.join(__dirname, "../icons");
  const ctx: Context = {
    distBaseDir,
    iconDir(name: string) {
      return path.join(distBaseDir, name);
    },
  };

  // rm all icons and mkdir dist
  await fs.promises.rm(distBaseDir, {
    recursive: true,
    force: true,
  });
  await fs.promises.mkdir(distBaseDir, {
    recursive: true,
  });

  const queue = new PQueue({ concurrency: 10 });
  for (const icon of icons) {
    if (!icon.source) {
      continue;
    }
    const { source } = icon;
    queue.add(() => gitCloneIcon(source, ctx));
  }

  await queue.onIdle();
}

async function gitCloneIcon(source: IconSetGitSource, ctx: Context) {
  console.log(
    `start clone icon: ${source.url}/${source.remoteDir}@${source.branch}`
  );
  await execFile(
    "git",
    ["clone", "--filter=tree:0", "--no-checkout", source.url, source.localName],
    {
      cwd: ctx.distBaseDir,
    }
  );

  await execFile(
    "git",
    ["sparse-checkout", "set", "--cone", "--skip-checks", source.remoteDir],
    {
      cwd: ctx.iconDir(source.localName),
    }
  );

  await execFile("git", ["checkout", source.hash], {
    cwd: ctx.iconDir(source.localName),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
