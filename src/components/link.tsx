import * as stylex from '@stylexjs/stylex';
import type { AnchorHTMLAttributes, FunctionComponent } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> & {
  style?: stylex.StyleXStyles;
};

const styles = stylex.create({
  base: {
    whiteSpace: 'nowrap',
  },
});

export const Link: FunctionComponent<Props> = ({ style, ...rest }) => {
  return (
    <a
      {...rest}
      {...stylex.props(styles.base, style)}
      target='_blank'
      rel='noopener noreferrer'
    />
  );
};
