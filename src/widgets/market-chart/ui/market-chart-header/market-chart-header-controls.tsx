import { StreamStatus } from '@/entities/market/model/types';
import { Button } from '@/shared/components/ui/button';

import { STREAM_BUTTON_STATES } from '../../model/constants';

interface MarketChartHeaderControlsProps {
  streamStatus: StreamStatus;
}

export const MarketChartHeaderControls = ({
  streamStatus,
}: MarketChartHeaderControlsProps) => {
  const buttons = STREAM_BUTTON_STATES[streamStatus];

  return (
    <div className='flex flex-row flex-wrap items-baseline justify-between gap-3 md:justify-normal'>
      {Object.entries(buttons).map(
        ([action, { label, icon: Icon, isLoading }]) => (
          <Button key={action} variant='outline' aria-busy={isLoading}>
            <Icon
              aria-hidden='true'
              className={isLoading ? 'motion-safe:animate-spin' : undefined}
            />
            {label}
          </Button>
        ),
      )}
    </div>
  );
};
