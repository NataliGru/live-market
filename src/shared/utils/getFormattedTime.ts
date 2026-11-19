export const getFormattedTime = (timestamp: number) =>
  new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Europe/Kyiv',
  }).format(timestamp);
