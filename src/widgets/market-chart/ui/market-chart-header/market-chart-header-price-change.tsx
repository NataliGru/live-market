import { ArrowDown, ArrowUp } from 'lucide-react';

import { cn } from '@/shared';

interface MarketChartHeaderPriceChangeProps {
  changePercentDaily: number;
}

export const MarketChartHeaderPriceChange = ({
  changePercentDaily,
}: MarketChartHeaderPriceChangeProps) => {
  const isPositive = changePercentDaily > 0;

  const color = isPositive ? 'text-success' : 'text-danger';

  const arrow = isPositive ? (
    <ArrowUp className={color} strokeWidth={3} />
  ) : (
    <ArrowDown className={color} strokeWidth={3} />
  );

  return (
    <div className='flex flex-col items-center gap-1'>
      <p className={cn('inline-flex gap-1 font-semibold', color)}>
        {arrow} {changePercentDaily}%
      </p>

      <span className='text-text-secondary text-caption'>24h change</span>
    </div>
  );
};
