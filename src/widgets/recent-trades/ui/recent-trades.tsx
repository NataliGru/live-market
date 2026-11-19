import { SlidersVertical } from 'lucide-react';

import { TradesTable } from './trades-table';

interface RecentTradesProps {
  tradePair: string;
}

export const RecentTrades = ({ tradePair }: RecentTradesProps) => {
  return (
    <section className='bg-surface text-text-primary rounded-card border-border flex flex-col gap-5 border-[0.5] p-3 lg:p-5'>
      <div className='flex flex-row gap-3'>
        <SlidersVertical className='text-text-secondary' />

        <h2 className='text-heading-md'>Recent Trades</h2>

        <p className='text-text-secondary self-end'>{tradePair}</p>
      </div>

      <TradesTable />
    </section>
  );
};
