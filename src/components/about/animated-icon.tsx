import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  style?: stylex.StyleXStyles;
}>;

const styles = stylex.create({
  base: {
    display: 'inline-block',
  },
});

export const AnimatedIcon: FunctionComponent<Props> = ({ style, children }) => {
  return <span {...stylex.props(styles.base, style)}>{children}</span>;
};
