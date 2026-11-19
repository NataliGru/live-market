import { MOCK_MARKET_CHART } from '../model/mock';
import { MarketChartHeader } from './market-chart-header/market-chart-header';
import { MarketChartChart } from './markey-chart-chart';

export const MarketChart = () => {
  return (
    <section className='bg-surface text-text-primary rounded-card border-border flex flex-col gap-10 border-[0.5] p-3 lg:gap-6 lg:p-5'>
      <MarketChartHeader />

      <MarketChartChart chartPoints={MOCK_MARKET_CHART.chartData} />
    </section>
  );
};
