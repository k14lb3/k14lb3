import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import type { FunctionComponent } from 'react';

const styles = stylex.create({
  base: {
    position: 'relative',
    aspectRatio: '1/1',
    height: '100vh',
    maxHeight: '14ch',
  },
});

type Props = {
  style?: stylex.StyleXStyles;
};

export const Me: FunctionComponent<Props> = ({ style }) => {
  return (
    <div {...stylex.props(styles.base, style)}>
      <Image src='/images/me.png' fill={true} unoptimized={true} alt='me' />
    </div>
  );
};
