// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [{
    input: `src/index.ts`,
    output: [
      {
        file: `dist/index.js`,
        format: 'cjs',
      },
    ],
    plugins: [
      typescript(),
    ],
    external: [],
  },
  {
    input: `./typings/index.d.ts`,
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  }
]