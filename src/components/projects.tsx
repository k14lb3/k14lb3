import { ICONS, URLS } from '@constants';
import { miscs } from '@stylex/miscs.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent } from 'react';
import { Link } from './link';

const styles = stylex.create({
  period: {
    width: '20%',
  },
  header: {
    marginTop: `calc(${miscs.lineHeight} * 2)`,
    marginBottom: `calc(${miscs.lineHeight} * 2)`,
  },
  links: {
    display: 'flex',
    gap: '2ch',
  },
});

export const Projects: FunctionComponent = () => {
  return (
    <section>
      <h2>Projects</h2>
      <table>
        <tbody>
          <tr>
            <td {...stylex.props(styles.period)}>
              <h3>95</h3>
            </td>
            <td>
              <header {...stylex.props(styles.header)}>
                <div {...stylex.props(styles.links)}>
                  <div>
                    <div>
                      {ICONS.WEB} <Link href={URLS[95]}>Website</Link>
                    </div>
                  </div>
                  <div>
                    {ICONS.GITHUB} <Link href={URLS['95_GITHUB']}>GitHub</Link>
                  </div>
                </div>
              </header>
              <p>Very cool Windows 95 clone.</p>
              <p>Stack: TypeScript, React, Next.js, Zustand, StyleX, Biome</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
