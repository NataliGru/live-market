interface MarketChartHeaderPriceProps {
  price: string;
  currency: string;
}

export const MarketChartHeaderPrice = ({
  price,
  currency,
}: MarketChartHeaderPriceProps) => {
  return (
    <div className='flex flex-row items-baseline justify-center gap-3 md:justify-normal'>
      <h2 className='text-heading-lg'>{price}</h2>

      <p className='text-text-secondary'>{currency}</p>
    </div>
  );
};
