import { Link } from '@components';
import { ICONS, URLS } from '@constants';
import { animations } from '@stylex/animations.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent } from 'react';
import { TextWithAnimatedIcon } from './text-with-animated-icon';

const styles = stylex.create({
  base: {
    whiteSpace: 'pre-line',
  },
  fireIcon: {
    animationName: animations.pulse,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
    animationIterationCount: 'infinite',
  },
  hammerIcon: {
    animationName: animations.wiggle,
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  emoticonCoolIcon: {
    animationName: animations.bounce,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
  emoticonTongueIcon: {
    animationName: animations.spin,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  codeIcon: {
    animationName: animations.shake,
    animationDuration: '0.25s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
});

type Props = {
  style?: stylex.StyleXStyles;
};

export const About: FunctionComponent<Props> = ({ style }) => {
  return (
    <p {...stylex.props(styles.base, style)}>
      <TextWithAnimatedIcon icon={ICONS.FIRE} iconStyle={styles.fireIcon}>
        Passionate
      </TextWithAnimatedIcon>{' '}
      about{' '}
      <TextWithAnimatedIcon icon={ICONS.HAMMER} iconStyle={styles.hammerIcon}>
        building
      </TextWithAnimatedIcon>{' '}
      <TextWithAnimatedIcon
        icon={ICONS.EMOTICON_COOL}
        iconStyle={styles.emoticonCoolIcon}
      >
        cool
      </TextWithAnimatedIcon>{' '}
      and{' '}
      <TextWithAnimatedIcon
        icon={ICONS.EMOTICON_TONGUE}
        iconStyle={styles.emoticonTongueIcon}
      >
        goofy
      </TextWithAnimatedIcon>{' '}
      stuff with{' '}
      <TextWithAnimatedIcon icon={ICONS.CODE} iconStyle={styles.codeIcon}>
        code
      </TextWithAnimatedIcon>
      .{`\n\n`}I also use <Link href={URLS.ARCH_LINUX}>{ICONS.ARCH}rch</Link>{' '}
      and <Link href={URLS.NEOVIM}>{ICONS.NEOVIM}eovim</Link>{' '}
      <Link href={URLS.BTW_I_USE_ARCH_MEME}>BTW</Link>.
    </p>
  );
};
