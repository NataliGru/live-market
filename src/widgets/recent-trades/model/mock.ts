import { RecentTrade } from '@/entities/market/model/types';

export const MOCK_RECENT_TRADES: RecentTrade[] = [
  {
    id: 1,
    symbol: 'BTCUSDT',
    timestamp: Date.UTC(2026, 10, 19, 14, 50, 32, 128),
    price: 67421.32,
    quantity: 0.0124,
    side: 'buy',
  },
  {
    id: 2,
    symbol: 'BTCUSDT',
    timestamp: Date.UTC(2026, 10, 19, 14, 50, 31, 892),
    price: 67418.11,
    quantity: 0.0031,
    side: 'sell',
  },
  {
    id: 3,
    symbol: 'BTCUSDT',
    timestamp: Date.UTC(2026, 10, 19, 14, 50, 31, 654),
    price: 67420.05,
    quantity: 0.0187,
    side: 'buy',
  },
  {
    id: 4,
    symbol: 'BTCUSDT',
    timestamp: Date.UTC(2026, 10, 19, 14, 50, 31, 421),
    price: 67417.23,
    quantity: 0.0056,
    side: 'sell',
  },
  {
    id: 5,
    symbol: 'BTCUSDT',
    timestamp: Date.UTC(2026, 10, 19, 14, 50, 31, 187),
    price: 67416.9,
    quantity: 0.0214,
    side: 'buy',
  },
];
