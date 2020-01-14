// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import { uglify } from 'rollup-plugin-uglify'

const external = [
  'commander',
  'consola',
  'axios',
  'download-git-repo',
  'fs-extra',
  'update-notifier',
]

export default [
  {
    input: 'src/cli.ts',
    output: [
      {
        file: 'dist/cli.js',
        format: 'cjs',
        banner: '#!/usr/bin/env node',
      },
    ],
    plugins: [
      typescript(),
      json(),
    ],
    external,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript(),
      json(),
    ],
    external,
  },
  {
    input: 'src/runtime.ts',
    output: [
      {
        file: 'dist/runtime.umd.js',
        format: 'umd',
        name: 'Wyg',
      },
    ],
    plugins: [
      typescript(),
      json(),
      uglify(),
    ],
    external,
  },
  {
    input: './typings/src/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  },
]
