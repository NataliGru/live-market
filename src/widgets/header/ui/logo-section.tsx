import { ChartNoAxesCombined } from 'lucide-react';

import { Link } from '@/shared';
import { Links } from '@/shared/settings';

export const LogoSection = () => {
  return (
    <Link
      href={Links.index}
      className='transition-all-300 flex flex-row items-center gap-3 hover:scale-105'
    >
      <ChartNoAxesCombined className='text-success size-8 sm:size-10 lg:size-12' />

      <div className='flex flex-col gap-1'>
        <h2 className='sm:text-heading-sm lg:text-heading-md text-md font-medium'>
          PulseMarket
        </h2>

        <p className='sm:text-caption text-text-secondary text-[11px]'>
          Live market monitor
        </p>
      </div>
    </Link>
  );
};
