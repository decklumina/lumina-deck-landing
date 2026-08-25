import { cp, mkdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const standalone = new URL("../.next/standalone/", import.meta.url);

await mkdir(standalone, { recursive: true });
await cp(new URL("public/", root), new URL("public/", standalone), {
  recursive: true,
});
await mkdir(new URL(".next/", standalone), { recursive: true });
await cp(
  new URL(".next/static/", root),
  new URL(".next/static/", standalone),
  { recursive: true },
);
