import {
  GetCountriesResponseModel,
  FilterRequestModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel
} from '../models';

export interface IResourceManagerRepository {
  getCountries(getCountriesRequestModel: FilterRequestModel): Promise<GetCountriesResponseModel>;
  getCurrency(getCurrencyRequestModel: FilterRequestModel): Promise<GetCurrencyResponseModel>;
  getLanguage(getLanguageRequestModel: FilterRequestModel): Promise<GetLanguageResponseModel>;
  getPhoneCode(getPhoneCodeRequestModel: FilterRequestModel): Promise<GetPhoneCodeResponseModel>;
}
