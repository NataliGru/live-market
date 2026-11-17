import { MarketChartData } from '@/entities/market/model/types';

const CURRENT_PRICE = 67421.32;
const START_PRICE = 66900;

const POINT_COUNT = 60;
const INTERVAL_MS = 60_000;

// Фіксований початок історії
const START_TIMESTAMP = Date.UTC(2026, 10, 17, 14, 0);

const generateChartData = () => {
  return Array.from({ length: POINT_COUNT }, (_, index) => {
    const progress = index / (POINT_COUNT - 1);

    // Загальний висхідний тренд
    const trend = START_PRICE + (CURRENT_PRICE - START_PRICE) * progress;

    // Коливання ціни
    const fluctuation =
      Math.sin(index * 0.65) * 75 +
      Math.sin(index * 1.8) * 35 +
      Math.sin(index * 0.17) * 90;

    const price =
      index === POINT_COUNT - 1
        ? CURRENT_PRICE
        : Number((trend + fluctuation).toFixed(2));

    return {
      timestamp: START_TIMESTAMP + index * INTERVAL_MS,
      price,
    };
  });
};

export const MOCK_MARKET_CHART: MarketChartData = {
  symbol: 'BTCUSDT',
  pair: 'BTC/USDT',
  name: 'Bitcoin',
  iconUrl: '/market-icons/BTC.svg',
  currency: 'USDT',
  price: CURRENT_PRICE,
  changePercentDaily: 2.14,
  interval: '1m',
  streamStatus: 'connected',
  chartData: generateChartData(),
};
