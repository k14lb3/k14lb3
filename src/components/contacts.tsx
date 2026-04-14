import { ICONS, PERSONAL_DETAILS, URLS } from '@constants';
import { breakpoints } from '@stylex/breakpoints.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent } from 'react';
import { Link } from './link';

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: {
      default: 'column',
      [breakpoints.small]: 'row',
    },
    gap: '2ch',
    justifyContent: {
      default: 'center',
      [breakpoints.small]: 'left',
    },
  },
  contact: {
    whiteSpace: 'nowrap',
  },
});

type Props = {
  style?: stylex.StyleXStyles;
};

export const Contacts: FunctionComponent<Props> = ({ style }) => {
  return (
    <div {...stylex.props(styles.base, style)}>
      <div {...stylex.props(styles.contact)}>
        {ICONS.GITHUB} <Link href={URLS.GITHUB}>GitHub</Link>
      </div>
      <div {...stylex.props(styles.contact)}>
        {ICONS.LINKEDIN} <Link href={URLS.LINKEDIN}>LinkedIn</Link>
      </div>
      <div {...stylex.props(styles.contact)}>
        {ICONS.FILE} <Link href={URLS.RESUME}>Resume</Link>
      </div>
      <div {...stylex.props(styles.contact)}>
        {ICONS.EMAIL}{' '}
        <Link href={`mailto:${PERSONAL_DETAILS.EMAIL}`}>Email</Link>
      </div>
    </div>
  );
};
