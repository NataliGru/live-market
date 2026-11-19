'use client';

import { useId } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { ChartPoint } from '@/entities/market/model/types';
import { getFormattedPrice, getFormattedTime } from '@/shared';

const axisLine = { stroke: 'var(--border)' };
const axisTick = { fill: 'var(--text-secondary)', fontSize: 11 };

interface MarketChartChartProps {
  chartPoints: ChartPoint[];
}

export const MarketChartChart = ({ chartPoints }: MarketChartChartProps) => {
  const gradientId = useId();
  const lastPoint = chartPoints.at(-1);

  if (!lastPoint) {
    return (
      <div className='text-text-secondary grid h-56 place-items-center text-sm sm:h-72'>
        No price data
      </div>
    );
  }

  const color = 'var(--success)';

  const valuesY = chartPoints.map(({ price }) => price);

  const min = Math.min(...valuesY);
  const max = Math.max(...valuesY);

  const padding = (max - min || 1) * 0.15;

  const domainMin = min - padding;
  const domainMax = max + padding;

  return (
    <AreaChart
      style={{
        width: '100%',
        height: 'clamp(224px, 32vw, 320px)',
      }}
      responsive
      data={chartPoints}
      margin={{ top: 10, right: 78, bottom: 0, left: 0 }}
    >
      <defs>
        <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='100%'>
          <stop offset='0%' stopColor={color} stopOpacity={0.28} />
          <stop offset='100%' stopColor={color} stopOpacity={0.02} />
        </linearGradient>
      </defs>

      <CartesianGrid
        stroke='var(--border)'
        strokeOpacity={0.5}
        strokeDasharray='5 5'
      />

      <YAxis
        width='auto'
        domain={[domainMin, domainMax]}
        niceTicks='snap125'
        axisLine={axisLine}
        tickLine={axisLine}
        tick={axisTick}
        tickFormatter={(price: number) => getFormattedPrice(price)}
      />

      <XAxis
        dataKey='timestamp'
        type='number'
        scale='utc'
        domain={['dataMin', 'dataMax']}
        tickCount={9}
        minTickGap={20}
        axisLine={axisLine}
        tickLine={axisLine}
        tick={axisTick}
        tickFormatter={(timestamp: number) => getFormattedTime(timestamp)}
      />

      <Tooltip
        cursor={{
          stroke: 'var(--text-secondary)',
          strokeDasharray: '3 3',
          strokeOpacity: 0.6,
        }}
        contentStyle={{
          background: 'var(--surface)',
          borderColor: 'var(--border)',
          borderRadius: 8,
          color: 'var(--text-secondary)',
        }}
        labelFormatter={(timestamp) => getFormattedTime(Number(timestamp))}
        formatter={(price) => [getFormattedPrice(Number(price)), 'Price']}
      />

      <Area
        type='linear'
        dataKey='price'
        stroke={color}
        strokeWidth={1.5}
        baseValue={domainMin}
        dot={false}
        activeDot={{ r: 4, fill: color, stroke: 'var(--surface)' }}
        fillOpacity={1}
        fill={`url(#${gradientId})`}
        isAnimationActive={false}
      />

      <ReferenceDot
        x={lastPoint.timestamp}
        y={lastPoint.price}
        shape={({ cx, cy }) => (
          <g transform={`translate(${cx} ${cy})`}>
            <circle r={3} fill={color} />
            <rect x={6} y={-9} width={68} height={18} rx={3} fill={color} />
            <text
              x={40}
              y={0}
              dominantBaseline='central'
              textAnchor='middle'
              fontSize={11}
              fontWeight={600}
              fill='var(--background)'
            >
              {getFormattedPrice(lastPoint.price)}
            </text>
          </g>
        )}
      />
    </AreaChart>
  );
};
