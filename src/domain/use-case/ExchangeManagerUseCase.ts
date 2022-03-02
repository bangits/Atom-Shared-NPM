import { DI_CONSTANTS } from '@/di/constants';
import { inject, injectable } from 'inversify';
import { IExchangeManagerRepository } from '../boundaries/IExchangeManagerRepository';

@injectable()
export class ExchangeManagerUseCase {
  @inject(DI_CONSTANTS.ExchangeManagerRepository)
  private readonly exchangeManagerRepository: IExchangeManagerRepository;

  getExchangeCompatibleCurrencyCodes = async (currencyCode: string): Promise<string[]> => {
    return this.exchangeManagerRepository.getExchangeCompatibleCurrencyCodes(currencyCode);
  };
}
