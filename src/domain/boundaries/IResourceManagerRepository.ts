import {
  GetCountriesResponseModel,
  FilterRequestModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel,
  GetRegionResponseModel,
  RegionFilterRequestModel
} from '../models';

export interface IResourceManagerRepository {
  getCountries(getCountriesRequestModel: FilterRequestModel): Promise<GetCountriesResponseModel>;
  getCurrency(getCurrencyRequestModel: FilterRequestModel): Promise<GetCurrencyResponseModel>;
  getLanguage(getLanguageRequestModel: FilterRequestModel): Promise<GetLanguageResponseModel>;
  getPhoneCode(getPhoneCodeRequestModel: FilterRequestModel): Promise<GetPhoneCodeResponseModel>;
  getDocumentType(getDocumentTypeRequestModel: FilterRequestModel): Promise<GetDocumentTypeResponseModel>;
  getGender(): Promise<GetGenderResponseModel>;
  getRegion(getRegionRequestModel: RegionFilterRequestModel): Promise<GetRegionResponseModel>;
}
