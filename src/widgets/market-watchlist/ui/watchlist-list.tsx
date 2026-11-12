import { MOCK_MARKET_PAIRS } from '../model/mock';
import { WatchlistCard } from './watchlist-card';

export const WatchlistList = () => {
  return (
    <ul className='flex max-w-70 flex-col gap-2'>
      {MOCK_MARKET_PAIRS.map((pair) => (
        <WatchlistCard key={pair.symbol} watchlistItem={pair} />
      ))}
    </ul>
  );
};
