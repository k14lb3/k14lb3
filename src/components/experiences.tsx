import { ICONS } from '@constants';
import { miscs } from '@stylex/miscs.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent } from 'react';
import { Link } from './link';

const styles = stylex.create({
  base: {},
  header: {
    marginBottom: `calc(${miscs.lineHeight} * 2)`,
  },
  role: {
    marginBottom: 0,
  },
});

export const Experiences: FunctionComponent = () => {
  return (
    <section>
      <h2>Experiences</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Sept 2022 - Present</h3>
            </td>
            <td>
              <header {...stylex.props(styles.header)}>
                <h3 {...stylex.props(styles.role)}>
                  Software Development Engineer
                </h3>
                <p>
                  {ICONS.WEB}{' '}
                  <Link href='https://www.restoplus.com/'>Restoplus</Link> -
                  Adelaide, South Australia
                </p>
              </header>
              <ul>
                <li>
                  Writing code responsible for millions of dollars in
                  transactions, innovating on new features, optimizing systems,
                  collaborating with the team and performing peer reviews.
                </li>
                <li>
                  Transforming business requirements and user feedback into
                  product features that involve developing in different
                  languages and technologies in both back and front-end layers.
                </li>
                <li>
                  Providing complementary skills/expertise to the team and
                  continuously learning from peers and seniors.
                </li>
              </ul>
              <p>
                Stack: TypeScript, React, Next.js, MobX, Firebase, Node.js,
                Express, Google Cloud Platform
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
