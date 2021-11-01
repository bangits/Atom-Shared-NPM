import { controllerNames } from '@/configs';
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
      url: controllerNames.Countries,
      query: getCountriesRequestModel
    });

    return countries;
  }).bind(this);

  getCurrency = cachedFn('CachedCurrencies', async (getCurrencyRequestModel: FilterRequestModel) => {
    const currency = await this.httpService.get<GetCurrencyResponseModel, FilterRequestModel>({
      url: controllerNames.Currencies,
      query: getCurrencyRequestModel
    });

    return currency;
  }).bind(this);

  getLanguage = cachedFn('CachedLanguages', async (getLanguageRequestModel: FilterRequestModel) => {
    const language = await this.httpService.get<GetLanguageResponseModel, FilterRequestModel>({
      url: controllerNames.Languages,
      query: getLanguageRequestModel
    });

    return language;
  }).bind(this);

  getPhoneCode = cachedFn('CachedPhoneCodes', async (getPhoneCodeRequestModel: FilterRequestModel) => {
    const phoneCode = await this.httpService.get<GetPhoneCodeResponseModel, FilterRequestModel>({
      url: controllerNames.PhoneCode,
      query: getPhoneCodeRequestModel
    });

    return phoneCode;
  }).bind(this);

  getDocumentType = cachedFn('CachedDocumentTypes', async (getDocumentTypeRequestModel: FilterRequestModel) => {
    const documentType = await this.httpService.get<GetDocumentTypeResponseModel, FilterRequestModel>({
      url: controllerNames.DocumentType,
      query: getDocumentTypeRequestModel
    });

    return documentType;
  }).bind(this);

  getGender = cachedFn('CachedGenders', async () => {
    const genderType = await this.httpService.get<GetGenderResponseModel, FilterRequestModel>({
      url: controllerNames.Genders
    });

    return genderType;
  }).bind(this);

  getRegion = cachedFn('CachedRegions', async (getRegionRequestModel: RegionFilterRequestModel) => {
    const region = await this.httpService.get<GetRegionResponseModel, RegionFilterRequestModel>({
      url: controllerNames.Region,
      query: getRegionRequestModel
    });

    return region;
  }).bind(this);

  getCityVillage = cachedFn('CachedCityVillages', async (getCityVillageRequestModel: CityVillageFilterRequestModel) => {
    const cityVillage = await this.httpService.get<GetCityVillageResponseModel, CityVillageFilterRequestModel>({
      url: controllerNames.CityVillage,
      query: getCityVillageRequestModel
    });

    return cityVillage;
  }).bind(this);
}
