import Image from 'next/image';

interface MarketChartHeaderSymbolProps {
  iconUrl: string;
  pair: string;
  name: string;
}

export const MarketChartHeaderSymbol = ({
  iconUrl,
  pair,
  name,
}: MarketChartHeaderSymbolProps) => {
  return (
    <div className='flex flex-row items-center justify-between gap-3'>
      <Image
        src={iconUrl}
        alt={name}
        width={40}
        height={40}
        className='aspect-square rounded-full'
      />

      <div className='flex flex-col gap-1'>
        <h2 className='text-heading-md'>{pair}</h2>

        <p className='text-body text-text-secondary'>{name}</p>
      </div>
    </div>
  );
};
