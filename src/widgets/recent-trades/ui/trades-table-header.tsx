import { TableHead, TableHeader, TableRow } from '@/shared/components/ui/table';

export const TradesTableHeader = () => {
  return (
    <TableHeader>
      <TableRow className='hover:bg-transparent'>
        <TableHead className='bg-card rounded-l-lg text-center'>Time</TableHead>
        <TableHead className='bg-card text-center'>Price</TableHead>
        <TableHead className='bg-card text-center'>Quantity</TableHead>
        <TableHead className='bg-card rounded-r-lg text-center'>Side</TableHead>
      </TableRow>
    </TableHeader>
  );
};
