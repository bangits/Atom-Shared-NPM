import { IHttpService } from '@/services';
import { inject, injectable } from 'inversify';
import { IResourceManagerRepository } from '../boundaries';
import {
  FilterRequestModel,
  RegionFilterRequestModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel,
  GetRegionResponseModel
} from '../models';

@injectable()
export class ResourceManagerRepository implements IResourceManagerRepository {
  private cachedCountries: GetCountriesResponseModel | null = null;
  private cachedCurrencies: GetCurrencyResponseModel | null = null;
  private cachedLanguages: GetLanguageResponseModel | null = null;
  private cachedPhoneCodes: GetPhoneCodeResponseModel | null = null;
  private cachedDocumentTypes: GetDocumentTypeResponseModel | null = null;
  private cachedGenders: GetGenderResponseModel | null = null;
  private cachedRegions: GetRegionResponseModel | null = null;

  @inject('IHttpService')
  private readonly httpService: IHttpService;

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
    if (this.cachedCurrencies) return this.cachedCurrencies;

    const currency = await this.httpService.get<GetCurrencyResponseModel, FilterRequestModel>({
      url: '/Currencies',
      query: getCurrencyRequestModel
    });

    this.cachedCurrencies = currency;

    return currency;
  };

  getLanguage = async (getLanguageRequestModel: FilterRequestModel) => {
    if (this.cachedLanguages) return this.cachedLanguages;

    const language = await this.httpService.get<GetLanguageResponseModel, FilterRequestModel>({
      url: '/Languages',
      query: getLanguageRequestModel
    });

    this.cachedLanguages = language;

    return language;
  };

  getPhoneCode = async (getPhoneCodeRequestModel: FilterRequestModel) => {
    if (this.cachedPhoneCodes) return this.cachedPhoneCodes;

    const phoneCode = await this.httpService.get<GetPhoneCodeResponseModel, FilterRequestModel>({
      url: '/PhoneCode',
      query: getPhoneCodeRequestModel
    });

    this.cachedPhoneCodes = phoneCode;

    return phoneCode;
  };

  getDocumentType = async (getDocumentTypeRequestModel: FilterRequestModel) => {
    if (this.cachedDocumentTypes) return this.cachedDocumentTypes;

    const documentType = await this.httpService.get<GetDocumentTypeResponseModel, FilterRequestModel>({
      url: '/DocumentType',
      query: getDocumentTypeRequestModel
    });

    this.cachedDocumentTypes = documentType;

    return documentType;
  };

  getGender = async () => {
    if (this.cachedGenders) return this.cachedGenders;

    const genderType = await this.httpService.get<GetGenderResponseModel, FilterRequestModel>({
      url: '/Gender'
    });

    this.cachedGenders = genderType;

    return genderType;
  };

  getRegion = async (getRegionRequestModel: RegionFilterRequestModel) => {
    if (this.cachedRegions) return this.cachedRegions;

    const region = await this.httpService.get<GetRegionResponseModel, RegionFilterRequestModel>({
      url: '/Region',
      query: getRegionRequestModel
    });

    this.cachedRegions = region;

    return region;
  };
}
