import '@styles';

import type { PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};
