export type Resolution = 'TIME_SERIES_INTRADAY' | 'TIME_SERIES_DAILY';
export const defaultResolution: Resolution = 'TIME_SERIES_DAILY';
export const baseUrl = 'https://www.alphavantage.co/query';
export const defaultSymbol = 'IBM';
export const defaultInterval = '60min';
