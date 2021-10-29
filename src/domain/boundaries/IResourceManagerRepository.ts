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

export interface IResourceManagerRepository {
  getGender(): Promise<GetGenderResponseModel>;

  getCountries(getCountriesRequestModel: FilterRequestModel): Promise<GetCountriesResponseModel>;

  getCurrency(getCurrencyRequestModel: FilterRequestModel): Promise<GetCurrencyResponseModel>;

  getLanguage(getLanguageRequestModel: FilterRequestModel): Promise<GetLanguageResponseModel>;

  getPhoneCode(getPhoneCodeRequestModel: FilterRequestModel): Promise<GetPhoneCodeResponseModel>;

  getDocumentType(getDocumentTypeRequestModel: FilterRequestModel): Promise<GetDocumentTypeResponseModel>;

  getRegion(getRegionRequestModel: RegionFilterRequestModel): Promise<GetRegionResponseModel>;

  getCityVillage(getCityVillageRequestModel: CityVillageFilterRequestModel): Promise<GetCityVillageResponseModel>;
}
