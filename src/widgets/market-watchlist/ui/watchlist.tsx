import { WatchlistList } from './watchlist-list';

export const Watchlist = () => {
  return (
    <section className='bg-surface text-text-primary rounded-card border-border border-[0.5] p-3 lg:p-5'>
      <h3 className='sm:text-heading-sm lg:text-heading-md text-md font-medium'>
        Watchlist
      </h3>

      <WatchlistList />
    </section>
  );
};
