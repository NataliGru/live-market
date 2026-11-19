'use client';
import { useState } from 'react';

import { CHART_INTERVALS, ChartInterval } from '@/entities/market/model/types';
import { getFormattedPrice } from '@/shared';

import { MOCK_MARKET_CHART } from '../../model/mock';
import { MarketChartHeaderControls } from './market-chart-header-controls';
import { MarketChartHeaderIntervals } from './market-chart-header-intervals';
import { MarketChartHeaderPrice } from './market-chart-header-price';
import { MarketChartHeaderPriceChange } from './market-chart-header-price-change';
import { MarketChartHeaderSymbol } from './market-chart-header-symbol';

export const MarketChartHeader = () => {
  const [selectedInterval, setSelectedInterval] = useState<ChartInterval>(
    CHART_INTERVALS[0],
  );

  return (
    <div className='flex flex-col justify-between gap-7 lg:flex-row'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between gap-5'>
          <MarketChartHeaderSymbol
            name={MOCK_MARKET_CHART.name}
            pair={MOCK_MARKET_CHART.pair}
            iconUrl={MOCK_MARKET_CHART.iconUrl}
          />

          <MarketChartHeaderPriceChange
            changePercentDaily={MOCK_MARKET_CHART.changePercentDaily}
          />
        </div>

        <MarketChartHeaderPrice
          price={getFormattedPrice(MOCK_MARKET_CHART.price)}
          currency={MOCK_MARKET_CHART.currency}
        />
      </div>

      <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center lg:flex-col'>
        <MarketChartHeaderIntervals
          selectedInterval={selectedInterval}
          onSelectInterval={setSelectedInterval}
        />

        <MarketChartHeaderControls
          streamStatus={MOCK_MARKET_CHART.streamStatus}
        />
      </div>
    </div>
  );
};
