import { TradeSide } from '@/entities/market/model/types';
import { cn } from '@/shared';
import { TableCell, TableRow } from '@/shared/components/ui/table';

interface TradesTableRowProps {
  time: string;
  price: string;
  quantity: number;
  side: TradeSide;
}

export const TradesTableRow = ({
  time,
  price,
  quantity,
  side,
}: TradesTableRowProps) => {
  return (
    <TableRow className='text-center'>
      <TableCell>{time}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>
        <span
          className={cn(
            side === 'buy'
              ? 'bg-success/15 text-success'
              : 'bg-danger/15 text-danger',
            'rounded-lg px-3 py-1 font-semibold',
          )}
        >
          {side === 'buy' ? 'Buy' : 'Sell'}
        </span>
      </TableCell>
    </TableRow>
  );
};
