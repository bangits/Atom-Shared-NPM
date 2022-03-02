export interface IExchangeManagerRepository {
  getExchangeCompatibleCurrencyCodes(currency: string): Promise<string[]>;
}
