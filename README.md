# wypm

Package management for Wenyan Lang 

> 🚧 Please note this it not an official tool (yet). The usage and APIs may have breaking changes frequently.

## Install 

```bash
npm i -g @antfu/wypm
```

## Usage

```bash
wypm i ziyue
```

It will download the code of [`子曰`](https://github.com/antfu/ziyue-wy) to the current directory `藏經閣/子曰`

`藏經閣` is just like `node_modules` for Wenyan. You may also want to include `藏經閣` into your `.gitignore`

## Publish Your Own Packages

It's quite simple, create a git repo on Github with `序.wy` in the root. 

Then modify the `registry-index.json` file in this repo and create a PR. Once the PR gets merged, people can install packages through `wypm`!

> More document about this coming soon...