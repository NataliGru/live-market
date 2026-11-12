import { MarketPair } from '@/entities/market/model/types';

export const MOCK_MARKET_PAIRS: MarketPair[] = [
  {
    symbol: 'BTCUSDT',
    pair: 'BTC/USDT',
    name: 'Bitcoin',
    price: 67450.2,
    changePercent: 2.45,
    sparkline: [100, 102, 201, 105, 103, 108],
    iconUrl: './market-icons/BTC.svg',
  },
  {
    symbol: 'ETHUSDT',
    pair: 'ETH/USDT',
    name: 'Ethereum',
    price: 3245.18,
    changePercent: -1.32,
    sparkline: [180, 82, 79, 24, 83, 86],
    iconUrl: './market-icons/ETH.svg',
  },
];
