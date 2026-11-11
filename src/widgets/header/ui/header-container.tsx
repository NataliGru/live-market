import { Desktop } from './desktop';
import { Mobile } from './mobile';

export const HeaderContainer = () => {
  return (
    <header className='bg-surface text-text-primary rounded-card border-border border-[0.5] p-3 lg:p-5'>
      <Mobile />

      <Desktop />
    </header>
  );
};
