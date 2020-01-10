# 文淵閣 wyg, `wenyan-get`

Package management for Wenyan Lang 

> 🚧 Please note this is not an official tool (yet). The usage and APIs may have breaking changes frequently.

## Install 

```bash
npm i -g @antfu/wyg
```

## Usage

```bash
wyg i 子曰
```

or 

```bash
wyg i ziyue
```

It will download the package [`子曰`](https://github.com/antfu/ziyue-wy) under `藏書樓/子曰`. You can think of `藏書樓` as the Wenyan version of `node_modules`. 

> 💡 You may want to include `藏書樓` into your `.gitignore` as well

Then write code as you always do

```
吾嘗觀「「子曰」」之書。方悟「子曰」之義。

子曰「「巧言令色，鮮矣仁！」」。
```

*Please note you have to use Wenyan v0.2.2 or above to import correctly*

### Publish Your Own Packages

Please check out [wyg-registry](https://github.com/antfu/wyg-registry)

## License

[MIT License](https://github.com/antfu/wyg/blob/master/LICENSE) © 2020 [Anthony Fu](https://github.com/antfu)
