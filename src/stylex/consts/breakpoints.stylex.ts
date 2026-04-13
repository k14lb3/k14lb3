import * as stylex from '@stylexjs/stylex';

export const breakpoints = stylex.defineConsts({
  extraSmall: '@media (min-width: 480px)',
  small: '@media (min-width: 640px)',
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 1024px)',
});
