import { MarketChart } from '@/widgets/market-chart/ui';
import { Watchlist } from '@/widgets/market-watchlist/ui/watchlist';
import { RecentTrades } from '@/widgets/recent-trades/ui';

export default function Home() {
  return (
    <div className='flex flex-row gap-3'>
      <Watchlist />

      <div className='flex min-w-0 flex-1 flex-col gap-4'>
        <MarketChart />

        <RecentTrades tradePair='BTC/USDT' />
      </div>
    </div>
  );
}
