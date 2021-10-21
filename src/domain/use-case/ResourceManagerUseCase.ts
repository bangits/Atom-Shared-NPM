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
export class ResourceManagerUseCase {
  @inject('IResourceManagerRepository')
  private readonly resourceManagerRepository: IResourceManagerRepository;

  getCountries = async (getCountriesRequestModel: FilterRequestModel): Promise<GetCountriesResponseModel> => {
    return this.resourceManagerRepository.getCountries(getCountriesRequestModel);
  };

  getCurrency = async (getCurrencyRequestModel: FilterRequestModel): Promise<GetCurrencyResponseModel> => {
    return this.resourceManagerRepository.getCurrency(getCurrencyRequestModel);
  };

  getLanguage = async (getLanguageRequestModel: FilterRequestModel): Promise<GetLanguageResponseModel> => {
    return this.resourceManagerRepository.getLanguage(getLanguageRequestModel);
  };

  getPhoneCode = async (getPhoneCodeRequestModel: FilterRequestModel): Promise<GetPhoneCodeResponseModel> => {
    return this.resourceManagerRepository.getPhoneCode(getPhoneCodeRequestModel);
  };
}
