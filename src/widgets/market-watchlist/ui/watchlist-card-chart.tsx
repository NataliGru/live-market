'use client';

import { useId } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface PricesData {
  price: number;
}

interface WatchlistCardChartProps {
  prices: PricesData[];
  isPositive?: boolean;
}

export const WatchlistCardChart = ({
  prices,
  isPositive,
}: WatchlistCardChartProps) => {
  const id = useId();

  const bottomGradientId = `${id}-bottom`;
  const topGradientId = `${id}-top`;

  const color = isPositive ? 'var(--success)' : 'var(--danger)';

  const values = prices.map(({ price }) => price);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const padding = (max - min || 1) * 0.15;

  const domainMin = min - padding;
  const domainMax = max + padding;

  return (
    <ResponsiveContainer width={50} height={35}>
      <AreaChart
        data={prices}
        margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
      >
        <defs>
          {/* Top */}
          <linearGradient id={topGradientId} x1='0' y1='1' x2='0' y2='0'>
            <stop offset='0%' stopColor={color} stopOpacity={0.2} />
            <stop offset='100%' stopColor={color} stopOpacity={0} />
          </linearGradient>

          {/* Bottom */}
          <linearGradient id={bottomGradientId} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor={color} stopOpacity={0.25} />
            <stop offset='100%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* <YAxis hide domain={[domainMin, domainMax]} /> */}

        {/* Top */}
        <Area
          type='monotone'
          dataKey='price'
          baseValue={domainMax}
          stroke='none'
          fill={`url(#${topGradientId})`}
          fillOpacity={1}
          isAnimationActive={false}
        />

        {/* Bottom */}
        <Area
          type='monotone'
          dataKey='price'
          baseValue={domainMin}
          stroke='none'
          fill={`url(#${bottomGradientId})`}
          fillOpacity={1}
          isAnimationActive={false}
        />

        {/* Main */}
        <Area
          type='monotone'
          dataKey='price'
          stroke={color}
          strokeWidth={1}
          fill='none'
          dot={false}
          activeDot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
