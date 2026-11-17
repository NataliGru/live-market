import { MarketChartHeader } from './market-chart-header/market-chart-header';

export const MarketChart = () => {
  return (
    <section className='bg-surface text-text-primary rounded-card border-border flex flex-col gap-2 border-[0.5] p-3 lg:p-5'>
      <MarketChartHeader />
    </section>
  );
};
