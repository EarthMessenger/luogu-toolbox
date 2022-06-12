import * as path from "path";
import * as fs from "fs";
import * as pkg from "./package.json";

import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const getBanner = () => {
    const res = fs
        .readFileSync(path.resolve(__dirname, "public/banner.txt"))
        .toString()
        .replace("PKG.VERSION", pkg.version)
        .replace("PKG.AUTHOR", pkg.author)
        .replace("PKG.DESCRIPTION", pkg.description);
    return res;
};

export default defineConfig({
    input: path.resolve(__dirname, "src/index.ts"),
    output: [
        {
            name: "luoguToolbox",
            file: path.resolve(__dirname, "dist/luogu-toolbox.user.js"),
            format: "iife",
            banner: getBanner(),
        },
    ],
    plugins: [
        typescript(),
        nodeResolve(),
        commonjs(),
        postcss({
            modules: true,
        }),
    ],
});
