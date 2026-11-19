import { getFormattedPrice, getFormattedTime } from '@/shared';
import { Table, TableBody } from '@/shared/components/ui/table';

import { MOCK_RECENT_TRADES } from '../model/mock';
import { TradesTableHeader } from './trades-table-header';
import { TradesTableRow } from './trades-table-row';

export const TradesTable = () => {
  return (
    <Table className='border-separate border-spacing-0'>
      <TradesTableHeader />
      <TableBody className='[&_tr:not(:last-child)>td]:border-b'>
        {MOCK_RECENT_TRADES.map((trade) => (
          <TradesTableRow
            key={trade.id}
            time={getFormattedTime(trade.timestamp)}
            price={getFormattedPrice(trade.price)}
            quantity={trade.quantity}
            side={trade.side}
          />
        ))}
      </TableBody>
    </Table>
  );
};
