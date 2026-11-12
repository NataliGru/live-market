import './globals.css';

import { Geist, Montserrat_Alternates, Roboto_Serif } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { cn } from '@/shared';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

type Props = {
  children: ReactNode;
};

const robotoSerif = Roboto_Serif({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto-serif',
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat-alternates',
});

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html
      className={cn('h-full', 'font-sans', geist.variable)}
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          montserratAlternates.className,
          robotoSerif.variable,
          montserratAlternates.variable,
          'flex h-full flex-col items-center',
        )}
      >
        {children}
      </body>
    </html>
  );
}
