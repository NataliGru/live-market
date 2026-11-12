'use client';
import Image from 'next/image';

import { MarketPair } from '@/entities/market/model/types';
import { cn } from '@/shared';

import { WatchlistCardChart } from './watchlist-card-chart';

interface WatchlistCardProps {
  watchlistItem: MarketPair;
  isSelected?: boolean;
}
export const WatchlistCard = ({ watchlistItem }: WatchlistCardProps) => {
  const isPositive = watchlistItem.changePercent > 0;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(watchlistItem.price);

  const prices = watchlistItem.sparkline.map((price) => ({
    price,
  }));

  return (
    <li className='rounded-card flex w-full flex-row items-center justify-between gap-4 p-1'>
      <div className='flex flex-row items-center gap-2'>
        <Image
          src={watchlistItem.iconUrl}
          alt={watchlistItem.name}
          width={24}
          height={24}
          className='rounded-full'
        />

        <div className='flex flex-col justify-between gap-2'>
          <h4 className='text-body font-medium'>{watchlistItem.pair}</h4>

          <p className='text-caption text-text-secondary'>
            {watchlistItem.name}
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-1'>
        <p className='text-caption font-medium'>{formattedPrice}</p>

        <p
          className={cn(
            'text-xs font-medium',
            isPositive ? 'text-success' : 'text-danger',
          )}
        >
          {watchlistItem.changePercent > 0 ? '+' : ''}
          {watchlistItem.changePercent.toFixed(2)}%
        </p>
      </div>

      <WatchlistCardChart prices={prices} isPositive={isPositive} />
    </li>
  );
};
