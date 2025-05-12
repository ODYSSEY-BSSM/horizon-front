const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { dts } = require('rollup-plugin-dts');

const createConfig = (packageJson, options = {}) => {
  const { peerDependencies = {}, dependencies = {} } = packageJson;
  const external = [...Object.keys(peerDependencies), ...Object.keys(dependencies)];

  return [
    {
      input: 'src/index.ts',
      output: [
        {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true,
        },
        {
          file: packageJson.module,
          format: 'esm',
          sourcemap: true,
        },
      ],
      external,
      plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
        }),
      ],
    },
    {
      input: 'src/index.ts',
      output: {
        file: packageJson.types,
        format: 'es',
      },
      external,
      plugins: [dts()],
    },
  ];
};

module.exports = createConfig;
