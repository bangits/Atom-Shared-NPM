import { DI_CONSTANTS } from '@/di/constants';
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
  GetLicensesResponseModel,
  GetNationalitiesResponseModel,
  GetPhoneCodeResponseModel,
  GetRegionResponseModel,
  GetTimeZoneResponseModel,
  GetValidationLevelResponseModel,
  LicensesRequestModel,
  RegionFilterRequestModel
} from '../models';

@injectable()
export class ResourceManagerUseCase {
  @inject(DI_CONSTANTS.ResourceManagerRepository)
  private readonly resourceManagerRepository: IResourceManagerRepository;

  getCountries = async (getCountriesRequestModel: FilterRequestModel): Promise<GetCountriesResponseModel> => {
    return this.resourceManagerRepository.getCountries(getCountriesRequestModel);
  };

  getCurrency = async (getCurrencyRequestModel: FilterRequestModel): Promise<GetCurrencyResponseModel> => {
    return this.resourceManagerRepository.getCurrency(getCurrencyRequestModel);
  };
  getTimeZone = async (getTimeZoneRequestModel: FilterRequestModel): Promise<GetTimeZoneResponseModel> => {
    return this.resourceManagerRepository.getTimeZone(getTimeZoneRequestModel);
  };

  getLanguage = async (getLanguageRequestModel: FilterRequestModel): Promise<GetLanguageResponseModel> => {
    return this.resourceManagerRepository.getLanguage(getLanguageRequestModel);
  };

  getPhoneCode = async (getPhoneCodeRequestModel: FilterRequestModel): Promise<GetPhoneCodeResponseModel> => {
    return this.resourceManagerRepository.getPhoneCode(getPhoneCodeRequestModel);
  };
  getNationality = async (getNationalitiesRequestModel: FilterRequestModel): Promise<GetNationalitiesResponseModel> => {
    return this.resourceManagerRepository.getNationalities(getNationalitiesRequestModel);
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

  getLicenses = async (licensesRequestModel: LicensesRequestModel): Promise<GetLicensesResponseModel> => {
    return this.resourceManagerRepository.getLicenses(licensesRequestModel);
  };

  getCityVillage = async (
    getCityVillageRequestModel: CityVillageFilterRequestModel
  ): Promise<GetCityVillageResponseModel> => {
    return this.resourceManagerRepository.getCityVillage(getCityVillageRequestModel);
  };
  getValidationLevel = async (
    getValidationLevelRequestModel: FilterRequestModel
  ): Promise<GetValidationLevelResponseModel> => {
    return this.resourceManagerRepository.getValidationLevel(getValidationLevelRequestModel);
  };
}
