import { IResourceManagerRepository } from '../boundaries';
import { FilterRequestModel, GetCountriesResponseModel, GetCurrencyResponseModel, GetLanguageResponseModel, GetPhoneCodeResponseModel } from '../models';
export declare class ResourceManagerRepository implements IResourceManagerRepository {
    private readonly httpService;
    private cachedCountries;
    getCountries: (getCountriesRequestModel: FilterRequestModel) => Promise<GetCountriesResponseModel>;
    getCurrency: (getCurrencyRequestModel: FilterRequestModel) => Promise<GetCurrencyResponseModel>;
    getLanguage: (getLanguageRequestModel: FilterRequestModel) => Promise<GetLanguageResponseModel>;
    getPhoneCode: (getPhoneCodeRequestModel: FilterRequestModel) => Promise<GetPhoneCodeResponseModel>;
}
