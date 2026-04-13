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
        '@stylex/animation.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/animation.stylex.ts'),
        ],
        '@stylex/color.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/color.stylex.ts'),
        ],
        '@stylex/misc.stylex.ts': [
          path.join(dirname, 'src/stylex/consts/misc.stylex.ts'),
        ],
      },
    },
  ],
];
