import '@styles';

import { breakpoints } from '@stylex/breakpoints.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { colors } from '../stylex/consts/colors.stylex';
import { miscs } from '../stylex/consts/miscs.stylex';

const styles = stylex.create({
  html: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.background,
    color: colors.text,
  },
  body: {
    position: 'relative',
    width: '100%',
    padding: {
      default: `${miscs.lineHeight} 2ch`,
      [breakpoints.extraSmall]: `${miscs.lineHeight} 1ch`,
    },
    maxWidth: 'calc(min(80ch, round(down, 100%, 1ch)))',
    lineHeight: miscs.lineHeight,
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
