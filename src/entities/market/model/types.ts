export type MarketSymbol =
  | 'BTCUSDT'
  | 'ETHUSDT'
  | 'BNBUSDT'
  | 'SOLUSDT'
  | 'ADAUSDT'
  | 'DOGEUSDT';

export type MarketPair = {
  symbol: MarketSymbol;
  name: string;
  pair: string;
  price: number;
  changePercent: number;
  sparkline: number[];
  iconUrl: string;
};
