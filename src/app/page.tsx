import { About, Contacts, Me } from '@components';
import { PERSONAL_DETAILS } from '@constants';
import { breakpoints } from '@stylex/breakpoints.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { JSX } from 'react';

const styles = stylex.create({
  fullName: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: {
      default: 'center',
      [breakpoints.small]: 'left',
    },
  },
  section: {
    display: 'grid',
    gridTemplateAreas: {
      default: `
      "about    about"
      "contacts me"
    `,
      [breakpoints.small]: `
      "about    me"
      "contacts me"
    `,
    },
    gridTemplateRows: 'min-content 1fr',
    gridTemplateColumns: {
      default: '50% 50%',
      [breakpoints.small]: '70% 30%',
    },
  },
  about: {
    gridArea: 'about',
    alignSelf: 'start',
    textAlign: {
      default: 'center',
      [breakpoints.small]: 'left',
    },
  },
  contacts: {
    gridArea: 'contacts',
    justifySelf: {
      default: 'center',
      [breakpoints.small]: 'normal',
    },
  },
  me: {
    gridArea: 'me',
    justifySelf: 'center',
    alignSelf: 'center',
  },
});

export default (): JSX.Element => {
  return (
    <main>
      <header>
        <h1 {...stylex.props(styles.fullName)}>{PERSONAL_DETAILS.FULL_NAME}</h1>
      </header>
      <section {...stylex.props(styles.section)}>
        <About style={styles.about} />
        <Contacts style={styles.contacts} />
        <Me style={styles.me} />
      </section>
    </main>
  );
};
