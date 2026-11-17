interface MarketChartHeaderPriceProps {
  price: string;
  currency: string;
}

export const MarketChartHeaderPrice = ({
  price,
  currency,
}: MarketChartHeaderPriceProps) => {
  return (
    <div className='flex flex-row items-baseline gap-3'>
      <h2 className='text-heading-lg'>{price}</h2>

      <p className='text-text-secondary'>{currency}</p>
    </div>
  );
};
