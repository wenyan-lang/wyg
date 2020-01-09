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

It will download the code of [`子曰`](https://github.com/antfu/ziyue-wy) to the current directory `藏書樓/子曰`

Think of `藏書樓` like the `node_modules` of Node.js. You may also want to include `藏書樓` into your `.gitignore`

### Publish Your Own Packages

Please check out [wypm-registry](https://github.com/antfu/wypm-registry)

## License

[MIT License](https://github.com/antfu/wypm/blob/master/LICENSE) © 2020 [Anthony Fu](https://github.com/antfu)
