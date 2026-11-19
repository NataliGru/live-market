export type MarketSymbol =
  | 'BTCUSDT'
  | 'ETHUSDT'
  | 'BNBUSDT'
  | 'SOLUSDT'
  | 'ADAUSDT'
  | 'DOGEUSDT';

export interface MarketPair {
  symbol: MarketSymbol;
  name: string;
  pair: string;
  price: number;
  changePercent: number;
  sparkline: number[];
  iconUrl: string;
}

export type ChartPoint = {
  timestamp: number;
  price: number;
};

export const CHART_INTERVALS = ['30s', '1m', '5m', '15m', '1h'] as const;

export type ChartInterval = (typeof CHART_INTERVALS)[number];

export type StreamStatus =
  | 'connecting'
  | 'connected'
  | 'reconnecting'
  | 'disconnected';

export interface MarketChartData {
  symbol: MarketSymbol;
  name: string;
  pair: string;
  iconUrl: string;
  currency: string;
  price: number;
  changePercentDaily: number;
  interval: ChartInterval;
  streamStatus: StreamStatus;
  chartData: ChartPoint[];
}

export type TradeSide = 'buy' | 'sell';

export interface RecentTrade {
  id: number;
  symbol: MarketSymbol;
  timestamp: number;
  price: number;
  quantity: number;
  side: TradeSide;
}
