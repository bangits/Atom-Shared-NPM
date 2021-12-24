import { cachedFn } from '@/common/helpers';
import { ICacheService, IHttpService } from '@/common/services';
import { DI_CONSTANTS } from '@/di/constants';
import { IResourceManagerRepository } from '@/domain';
import {
  CityVillageFilterRequestModel,
  FilterRequestModel,
  GetCityVillageResponseModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel, GetRegionResponseModel, GetValidationLevelResponseModel, RegionFilterRequestModel
} from '@/domain/models';
import { inject, injectable } from 'inversify';
import { API_ROUTES } from '..';

@injectable()
export class ResourceManagerRepository implements IResourceManagerRepository {
  @inject(DI_CONSTANTS.HttpService)
  private readonly httpService: IHttpService;

  // Dont delete this part as it used in cachedFn
  @inject(DI_CONSTANTS.CacheService)
  private readonly cacheService: ICacheService;

  getCountries = cachedFn('CachedCountries', async (getCountriesRequestModel: FilterRequestModel) => {
    const countries = await this.httpService.get<GetCountriesResponseModel, FilterRequestModel>({
      url: API_ROUTES.Countries,
      query: getCountriesRequestModel
    });

    return countries;
  }).bind(this);

  getCurrency = cachedFn('CachedCurrencies', async (getCurrencyRequestModel: FilterRequestModel) => {
    const currency = await this.httpService.get<GetCurrencyResponseModel, FilterRequestModel>({
      url: API_ROUTES.Currencies,
      query: getCurrencyRequestModel
    });

    return currency;
  }).bind(this);

  getLanguage = cachedFn('CachedLanguages', async (getLanguageRequestModel: FilterRequestModel) => {
    const language = await this.httpService.get<GetLanguageResponseModel, FilterRequestModel>({
      url: API_ROUTES.Languages,
      query: getLanguageRequestModel
    });

    return language;
  }).bind(this);

  getPhoneCode = cachedFn('CachedPhoneCodes', async (getPhoneCodeRequestModel: FilterRequestModel) => {
    const phoneCode = await this.httpService.get<GetPhoneCodeResponseModel, FilterRequestModel>({
      url: API_ROUTES.PhoneCode,
      query: getPhoneCodeRequestModel
    });

    return phoneCode;
  }).bind(this);

  getDocumentType = cachedFn('CachedDocumentTypes', async (getDocumentTypeRequestModel: FilterRequestModel) => {
    const documentType = await this.httpService.get<GetDocumentTypeResponseModel, FilterRequestModel>({
      url: API_ROUTES.DocumentType,
      query: getDocumentTypeRequestModel
    });

    return documentType;
  }).bind(this);

  getGender = cachedFn('CachedGenders', async () => {
    const genderType = await this.httpService.get<GetGenderResponseModel, FilterRequestModel>({
      url: API_ROUTES.Genders
    });

    return genderType;
  }).bind(this);

  getValidationLevel = cachedFn('CachedValidationLevel', async (getValidationLevelRequestModel: FilterRequestModel) => {
    const validationLevel = await this.httpService.get<GetValidationLevelResponseModel, FilterRequestModel>({
      url: API_ROUTES.ValidationLevel,
      query: getValidationLevelRequestModel
    });

    return validationLevel;
  }).bind(this);

  getRegion = async (getRegionRequestModel: RegionFilterRequestModel) => {
    const region = await this.httpService.get<GetRegionResponseModel, RegionFilterRequestModel>({
      url: API_ROUTES.Region,
      query: getRegionRequestModel
    });

    return region;
  };

  getCityVillage = async (getCityVillageRequestModel: CityVillageFilterRequestModel) => {
    const cityVillage = await this.httpService.get<GetCityVillageResponseModel, CityVillageFilterRequestModel>({
      url: API_ROUTES.CityVillage,
      query: getCityVillageRequestModel
    });

    return cityVillage;
  };

}
