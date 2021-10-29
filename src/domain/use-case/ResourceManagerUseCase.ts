import { inject } from 'inversify';
import { IResourceManagerRepository } from '../boundaries';
import {
  FilterRequestModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel
} from '../models';

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

  getDocumentType = async (getDocumentTypeRequestModel: FilterRequestModel): Promise<GetDocumentTypeResponseModel> => {
    return this.resourceManagerRepository.getDocumentType(getDocumentTypeRequestModel);
  };

  getGender = async (getGenderRequestModel: FilterRequestModel): Promise<GetGenderResponseModel> => {
    return this.resourceManagerRepository.getGender(getGenderRequestModel);
  };
}
