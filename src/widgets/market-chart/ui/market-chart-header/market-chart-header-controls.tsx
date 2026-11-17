import { StreamStatus } from '@/entities/market/model/types';
import { Button } from '@/shared/components/ui/button';

interface MarketChartHeaderControlsProps {
  streamStatus: StreamStatus;
}

export const MarketChartHeaderControls = ({
  streamStatus,
}: MarketChartHeaderControlsProps) => {
  return (
    <div className='flex flex-row items-baseline gap-3'>
      <Button>{streamStatus}</Button>
    </div>
  );
};
