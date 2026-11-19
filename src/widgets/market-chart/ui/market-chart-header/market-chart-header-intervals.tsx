import { CHART_INTERVALS, ChartInterval } from '@/entities/market/model/types';
import { cn } from '@/shared';
import { Button } from '@/shared/components/ui/button';

interface MarketChartHeaderIntervalsProps {
  selectedInterval: ChartInterval;
  onSelectInterval: (newInterval: ChartInterval) => void;
}

export const MarketChartHeaderIntervals = ({
  selectedInterval,
  onSelectInterval,
}: MarketChartHeaderIntervalsProps) => {
  return (
    <div className='bg-card text-text-primary border-border flex flex-row items-center justify-between gap-1 rounded-md border-[0.5]'>
      {CHART_INTERVALS.map((interval) => (
        <Button
          key={interval}
          variant={selectedInterval === interval ? 'default' : 'ghost'}
          className={cn(
            selectedInterval !== interval && 'hover:cursor-pointer',
            'w-12',
          )}
          onClick={() => onSelectInterval(interval)}
        >
          {interval}
        </Button>
      ))}
    </div>
  );
};
