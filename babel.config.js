import path from 'node:path';

/** @type {string[]} */
export const presets = ['next/babel'];

const dirname = import.meta.dirname;

/** @type {import('@babel/core').PluginItem[]} */
export const plugins = [
  [
    '@stylexjs/babel-plugin',
    {
      dev: process.env.NODE_ENV !== 'production',
      treeshakeCompensation: true,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: dirname,
      },
      aliases: {
        '@stylex/animations.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/animations.stylex.ts'),
        ],
        '@stylex/breakpoints.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/breakpoints.stylex.ts'),
        ],
        '@stylex/colors.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/colors.stylex.ts'),
        ],
        '@stylex/miscs.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/miscs.stylex.ts'),
        ],
      },
    },
  ],
];
