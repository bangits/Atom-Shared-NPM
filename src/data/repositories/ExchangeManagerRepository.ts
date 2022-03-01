import { IHttpService } from '@/common/services';
import { DI_CONSTANTS } from '@/di/constants';
import { IExchangeManagerRepository } from '@/domain/boundaries/IExchangeManagerRepository';
import { inject, injectable } from 'inversify';
import { API_ROUTES } from '..';

@injectable()
export class ExchangeManagerRepository implements IExchangeManagerRepository {
  @inject(DI_CONSTANTS.ExchangeManagerHttpService)
  private readonly httpService: IHttpService;

  getExchangeCompatibleCurrencyCodes = async (currency: string): Promise<string[]> => {
    const compatibleCurrencies = await this.httpService.get<string[], {}>({
      url: API_ROUTES.ExchangeManager.CompatibleCurrencies + `/${currency}`
    });

    return compatibleCurrencies;
  };
}
