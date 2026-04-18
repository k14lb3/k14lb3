import { ICONS } from '@constants';
import { getDurationText } from '@lib';
import { miscs } from '@stylex/miscs.stylex.ts';
import * as stylex from '@stylexjs/stylex';
import type { FunctionComponent } from 'react';
import { Link } from './link';

const styles = stylex.create({
  period: {
    width: '20%',
  },
  duration: {
    marginBlock: `calc(${miscs.lineHeight} * 2)`,
  },
  company: {
    display: 'inline-block',
  },
});

export const Experiences: FunctionComponent = () => {
  return (
    <section>
      <h2>Experiences</h2>
      <table>
        <tbody>
          <tr>
            <td {...stylex.props(styles.period)}>
              <p {...stylex.props(styles.duration)}>
                Sept 2022 - Present •{' '}
                {getDurationText({ startDate: new Date('2022-09-01') })}
              </p>
            </td>
            <td>
              <p>
                <strong>Software Development Engineer</strong>
                <span {...stylex.props(styles.company)}>
                  {ICONS.WEB}{' '}
                  <Link href='https://www.restoplus.com/'>Restoplus</Link> -
                  Adelaide, South Australia
                </span>
              </p>
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
