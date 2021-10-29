import { cachedFn } from '@/helpers';
import { ICacheService, IHttpService } from '@/services';
import { inject, injectable } from 'inversify';
import { IResourceManagerRepository } from '../boundaries';
import {
  CityVillageFilterRequestModel,
  FilterRequestModel,
  GetCityVillageResponseModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel,
  GetRegionResponseModel,
  RegionFilterRequestModel
} from '../models';

@injectable()
export class ResourceManagerRepository implements IResourceManagerRepository {
  @inject('IHttpService')
  private readonly httpService: IHttpService;

  // Dont delete this part as it used in cachedFn
  @inject('ICacheService')
  private readonly cacheService: ICacheService;

  getCountries = cachedFn('CachedCountries', async (getCountriesRequestModel: FilterRequestModel) => {
    const countries = await this.httpService.get<GetCountriesResponseModel, FilterRequestModel>({
      url: '/Countries',
      query: getCountriesRequestModel
    });

    return countries;
  }).bind(this);

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

  getDocumentType = async (getDocumentTypeRequestModel: FilterRequestModel) => {
    const documentType = await this.httpService.get<GetDocumentTypeResponseModel, FilterRequestModel>({
      url: '/DocumentType',
      query: getDocumentTypeRequestModel
    });

    return documentType;
  };

  getGender = async () => {
    const genderType = await this.httpService.get<GetGenderResponseModel, FilterRequestModel>({
      url: '/Gender' // TO DO, need to correct after backend will add api
    });

    return genderType;
  };

  getRegion = async (getRegionRequestModel: RegionFilterRequestModel) => {
    const region = await this.httpService.get<GetRegionResponseModel, RegionFilterRequestModel>({
      url: '/Region', // TO DO, need to correct after backend will add api
      query: getRegionRequestModel
    });

    return region;
  };

  getCityVillage = async (getCityVillageRequestModel: CityVillageFilterRequestModel) => {
    const cityVillage = await this.httpService.get<GetCityVillageResponseModel, CityVillageFilterRequestModel>({
      url: '/CityVillage', // TO DO, need to correct after backend will add api
      query: getCityVillageRequestModel
    });

    return cityVillage;
  };
}
