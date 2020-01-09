# wypm

Package management for Wenyan Lang 

> 🚧 Please note this is not an official tool (yet). The usage and APIs may have breaking changes frequently.

## Install 

```bash
npm i -g @antfu/wypm
```

## Usage

```bash
wypm i 子曰
```

or 

```bash
wypm i ziyue
```

It will download the code of [`子曰`](https://github.com/antfu/ziyue-wy) to the current directory `藏經閣/子曰`

Think of `藏經閣` like the `node_modules` of Node.js. You may also want to include `藏經閣` into your `.gitignore`

### 📦 Publish Your Own Packages

It's quite simple, create a git repo on Github with `序.wy` in the root. 

Then modify the [`registry-packages.ts`](https://github.com/antfu/wypm/blob/master/registry-packages.ts) file in this repo and create a PR. Once the PR gets merged, people can install your package through `wypm`!

For more details, please refer to the [`registry-packages.ts`](https://github.com/antfu/wypm/blob/master/registry-packages.ts) itself.

Also, you can check out [`子曰<antfu/ziyue-wy>`](https://github.com/antfu/ziyue-wy) as an example.

## Avaliable Packages

<!--GENERATED_DO_NOT_MODIFY-->
<!--package_list_start-->

- [子曰](https://github.com/antfu/ziyue-wy/tree/master) - Cowsay for Wenyan Lang - by [antfu](https://github.com/antfu>)

<!--package_list_end-->

## License

[MIT License](https://github.com/antfu/wypm/blob/master/LICENSE) © 2020 [Anthony Fu](https://github.com/antfu)
