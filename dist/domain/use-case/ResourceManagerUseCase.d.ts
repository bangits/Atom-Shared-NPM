import { FilterRequestModel, GetCountriesResponseModel, GetCurrencyResponseModel, GetLanguageResponseModel, GetPhoneCodeResponseModel } from '../models';
export declare class ResourceManagerUseCase {
    private readonly resourceManagerRepository;
    getCountries: (getCountriesRequestModel: FilterRequestModel) => Promise<GetCountriesResponseModel>;
    getCurrency: (getCurrencyRequestModel: FilterRequestModel) => Promise<GetCurrencyResponseModel>;
    getLanguage: (getLanguageRequestModel: FilterRequestModel) => Promise<GetLanguageResponseModel>;
    getPhoneCode: (getPhoneCodeRequestModel: FilterRequestModel) => Promise<GetPhoneCodeResponseModel>;
}
