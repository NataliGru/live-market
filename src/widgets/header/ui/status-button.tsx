import { Button } from '@/shared/components/ui/button';

export const StatusButton = () => {
  return (
    <Button
      variant={'success'}
      className={'transition-all-300 gap-2 rounded-3xl text-xs'}
    >
      <span className='bg-success h-3 w-3 rounded-full' />
      LIVE
    </Button>
  );
};
