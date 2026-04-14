import type { ICONS } from '@constants';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { AnimatedIcon } from './animated-icon';

type Props = PropsWithChildren<{
  icon: (typeof ICONS)[keyof typeof ICONS];
  iconStyle: stylex.StyleXStyles;
}>;

const styles = stylex.create({
  base: {
    whiteSpace: 'nowrap',
  },
});

export const TextWithAnimatedIcon: FunctionComponent<Props> = ({
  icon,
  iconStyle,
  children,
}) => {
  return (
    <span {...stylex.props(styles.base)}>
      <AnimatedIcon style={iconStyle}>{icon}</AnimatedIcon> {children}
    </span>
  );
};
