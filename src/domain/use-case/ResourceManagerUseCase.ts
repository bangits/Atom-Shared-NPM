import { inject, injectable } from 'inversify';
import { IResourceManagerRepository } from '../boundaries';
import {
  FilterRequestModel,
  RegionFilterRequestModel,
  CityVillageFilterRequestModel,
  GetCountriesResponseModel,
  GetCurrencyResponseModel,
  GetLanguageResponseModel,
  GetPhoneCodeResponseModel,
  GetDocumentTypeResponseModel,
  GetGenderResponseModel,
  GetRegionResponseModel,
  GetCityVillageResponseModel
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

  getDocumentType = async (getDocumentTypeRequestModel: FilterRequestModel): Promise<GetDocumentTypeResponseModel> => {
    return this.resourceManagerRepository.getDocumentType(getDocumentTypeRequestModel);
  };

  getGender = async (): Promise<GetGenderResponseModel> => {
    return this.resourceManagerRepository.getGender();
  };

  getRegion = async (getRegionRequestModel: RegionFilterRequestModel): Promise<GetRegionResponseModel> => {
    return this.resourceManagerRepository.getRegion(getRegionRequestModel);
  };

  getCityVillage = async (
    getCityVillageRequestModel: CityVillageFilterRequestModel
  ): Promise<GetCityVillageResponseModel> => {
    return this.resourceManagerRepository.getCityVillage(getCityVillageRequestModel);
  };
}
