import { IHttpService } from '@/services';
import { inject, injectable } from 'inversify';
import { IResourceManagerRepository } from '../boundaries';
import {
  FilterRequestModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel
} from '../models';

@injectable()
export class ResourceManagerRepository implements IResourceManagerRepository {
  @inject('IHttpService')
  private readonly httpService: IHttpService;

  private cachedCountries: GetCountriesResponseModel | null = null;

  getCountries = async (getCountriesRequestModel: FilterRequestModel) => {
    if (this.cachedCountries) return this.cachedCountries;

    const countries = await this.httpService.get<GetCountriesResponseModel, FilterRequestModel>({
      url: '/Countries',
      query: getCountriesRequestModel
    });

    this.cachedCountries = countries;

    return countries;
  };

  getCurrency = async (getCurrencyRequestModel: FilterRequestModel) => {
    const currency = await this.httpService.get<GetCurrencyResponseModel, FilterRequestModel>({
      url: '/Currencies',
      query: getCurrencyRequestModel
    });

    return currency;
  };

  getLanguage = async (getLanguageRequestModel: FilterRequestModel) => {
    const language = await this.httpService.get<GetLanguageResponseModel, FilterRequestModel>({
      url: '/Languages',
      query: getLanguageRequestModel
    });

    return language;
  };

  getPhoneCode = async (getPhoneCodeRequestModel: FilterRequestModel) => {
    const phoneCode = await this.httpService.get<GetPhoneCodeResponseModel, FilterRequestModel>({
      url: '/PhoneCode',
      query: getPhoneCodeRequestModel
    });

    return phoneCode;
  };
}
