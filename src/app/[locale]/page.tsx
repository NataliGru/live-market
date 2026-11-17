import { MarketChart } from '@/widgets/market-chart/ui';
import { Watchlist } from '@/widgets/market-watchlist/ui/watchlist';

export default function Home() {
  return (
    <div className='flex flex-row gap-3'>
      <Watchlist />

      <div className='flex flex-col gap-4'>
        <MarketChart />
      </div>
    </div>
  );
}
