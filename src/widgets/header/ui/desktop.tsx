import { ThemeToggle } from '@/features';

import { NAVIGATION_LINKS } from '../model/constants';
import { LogoSection } from './logo-section';
import { NavigationLink } from './navigation-link';
import { StatusButton } from './status-button';

export const Desktop = () => {
  return (
    <div className='hidden flex-row items-center justify-between gap-4 lg:flex'>
      <div className='flex flex-row items-center justify-between gap-5'>
        <LogoSection />

        <div className='text-caption text-text-secondary flex flex-row items-center justify-between gap-3'>
          <StatusButton />

          <p>
            WebSocket powered{' '}
            <span className='mx-2' aria-hidden='true'>
              ●
            </span>{' '}
            Binance public stream
          </p>
        </div>
      </div>

      <nav className='flex flex-row items-center justify-between gap-2'>
        {NAVIGATION_LINKS.items.map((navigationItem) => (
          <NavigationLink
            key={navigationItem.link}
            link={navigationItem.link}
            label={navigationItem.text}
            isExternal={navigationItem?.isExternal}
          />
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
};
