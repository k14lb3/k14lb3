import '@styles';

import { breakpoints } from '@stylex/breakpoints.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { color } from '../stylex/consts/color.stylex';
import { misc } from '../stylex/consts/misc.stylex';

const styles = stylex.create({
  html: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: color.background,
    color: color.text,
  },
  body: {
    position: 'relative',
    width: '100%',
    padding: {
      default: `${misc.lineHeight} 2ch`,
      [breakpoints.extraSmall]: `${misc.lineHeight} 1ch`,
    },
    maxWidth: 'calc(min(80ch, round(down, 100%, 1ch)))',
    lineHeight: misc.lineHeight,
    overflowX: 'hidden',
  },
});

export default ({ children }: PropsWithChildren) => {
  return (
    <html lang='en' {...stylex.props(styles.html)}>
      <body {...stylex.props(styles.body)}>{children}</body>
    </html>
  );
};
