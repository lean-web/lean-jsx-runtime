// @ts-check
import { defineConfig } from "tsup";

// type OutExtensionObject = {
//     js?: string;
//     dts?: string;
// };

const extensionMaps = {
  cjs: {
    js: `.cjs`,
    dts: ".d.cjs",
  },
  esm: {
    js: `.js`,
    dts: ".d.js",
  },
};
export default defineConfig([
  {
    entry: ["src/jsx-dev-runtime.ts", "src/jsx-runtime.ts"],
    format: ["cjs", "esm"], // Build for commonJS and ESmodules
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: false,
    target: "node14",
    outDir: "lib",
    clean: true,
    tsconfig: "tsconfig.json",
    cjsInterop: true,
    outExtension({ format }) {
      return extensionMaps[format];
    },
    external: ["esbuild", "lean-jsx/web/sxl.js"],
  },
]);
