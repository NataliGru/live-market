import { Menu } from 'lucide-react';

import { ThemeToggle } from '@/features';
import { Button } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

import { NAVIGATION_LINKS } from '../model/constants';
import { LogoSection } from './logo-section';
import { NavigationLink } from './navigation-link';

export const Mobile = () => {
  return (
    <div className='flex flex-row items-center justify-between gap-1 md:gap-4 lg:hidden'>
      <LogoSection />

      <div className='flex flex-row items-center gap-2 md:gap-5'>
        <ThemeToggle />

        <Sheet>
          <SheetTrigger
            render={
              <Button variant='outline'>
                <Menu />
              </Button>
            }
          />

          <SheetContent className='bg-background w-screen! max-w-none! p-5 sm:max-w-none! lg:p-10'>
            <SheetHeader className='bg-surface text-text-primary rounded-card border-border flex flex-row items-center justify-between gap-3 border-[0.5] p-3 lg:p-5'>
              <SheetClose render={<LogoSection />} nativeButton={false} />
              <ThemeToggle />
            </SheetHeader>

            <nav className='r flex flex-col justify-between gap-2'>
              {NAVIGATION_LINKS.items.map((navigationItem) => (
                <SheetClose
                  key={navigationItem.link}
                  nativeButton={false}
                  render={
                    <NavigationLink
                      link={navigationItem.link}
                      label={navigationItem.text}
                      isExternal={navigationItem?.isExternal}
                    />
                  }
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
