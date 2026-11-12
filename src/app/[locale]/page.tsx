import { Watchlist } from '@/widgets/market-watchlist/ui/watchlist';

export default function Home() {
  return (
    <div className='flex flex-row gap-3'>
      <Watchlist />
    </div>
  );
}
