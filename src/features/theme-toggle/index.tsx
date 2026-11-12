'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/shared/components/ui/button';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='size-17.5' aria-hidden='true' />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant={'ghost'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={'transition-all-300 cursor-pointer'}
    >
      {isDark ? (
        <Moon className='size-6.5 lg:size-7.5 2xl:size-10' strokeWidth={2} />
      ) : (
        <Sun className='size-6.5 lg:size-7.5 2xl:size-10' strokeWidth={2} />
      )}
    </Button>
  );
}
