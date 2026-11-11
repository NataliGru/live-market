import { ReactNode } from 'react';

import { HeaderContainer } from '@/widgets/header/ui';

// import { Footer } from '@/widgets';

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className='flex h-full min-h-dvh w-full max-w-360 flex-col justify-between p-5 lg:p-10'>
      <HeaderContainer />

      <div id='page-content' className='flex flex-1 flex-col'>
        <main className='relative z-0 flex-1 pt-20'>{children}</main>

        {/* <Footer /> */}
      </div>
    </div>
  );
};
