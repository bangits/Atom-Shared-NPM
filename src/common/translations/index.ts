import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  country: 'Country',
  countries: 'Countries',
  region: 'Region',
  city: 'City',
  all: 'All',
  edit: 'Edit',
  partners: 'Partners',
  connectionError: 'The connection to the server was lost ! Try later.',
  fileUploader: {
    serverError: 'Upload failed. A server error occurred while uploading the file.',
    maxSize: `Upload failed. Allowed max. size is ${TRANSLATION_CHANGED_VALUE} MB.`,
    minSize: `Upload failed. Allowed min. size is ${TRANSLATION_CHANGED_VALUE} KB.`,
    maxWidth: `Upload failed. Allowed max. width is ${TRANSLATION_CHANGED_VALUE} MB.`,
    minWidth: `Upload failed. Allowed min. width is ${TRANSLATION_CHANGED_VALUE} MB.`,
    maxHeight: `Upload failed. Allowed max. height is ${TRANSLATION_CHANGED_VALUE} MB.`,
    minHeight: `Upload failed. Allowed min. height is ${TRANSLATION_CHANGED_VALUE} MB.`,
    acceptImagesError: 'Upload failed. The following extensions only are allowed: PNG,JPG,JPEG, SVG.',
    defaultExtensionError: 'Upload failed. Invalid file extension.'
  },
  validations: {
    required: 'Required field',
    max: `The maximum length is ${TRANSLATION_CHANGED_VALUE}!`,
    maxValue: `The maximum value is ${TRANSLATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${TRANSLATION_CHANGED_VALUE}!`,
    textInput: 'Sorry, only letters, numbers, spaces, underscores and hyphens are allowed!',
    email: 'Enter an E-mail address into correct format, example: someone@website.com',
    website: 'Enter an Website into correct format, example: https://www.website.com'
  },
  username: 'Email or Username',
  password: 'Password',
  signIn: 'Sign In',
  loginToManageYourAccount: 'Login to manage your account',
  login: 'Login',
  'user-not-found': 'Invalid account',
  class: 'Class',
  feature: 'Feature',
  supportedBrowsers: 'Supported browsers',
  licenses: 'Licenses',
  absoluteRealURL: 'Absolute Real URL',
  absoluteDemoURL: 'Absolute Demo URL',
  theme: 'Theme',
  type: 'Type',
  volatility: 'Volatility',
  providerName: 'Provider Name',
  provider: 'Provider',
  providerManagement: 'Provider Management',
  novomaticDetails: 'Novomatic Details',
  approve: 'Approve',
  save: 'Save',
  cancel: 'Cancel',
  continue: 'Continue',
  close: 'Close',
  copied: 'Copied!',
  externalId: 'External ID',
  gameName: 'Game Name',
  subType: 'Sub Type',
  releaseDate: 'Release Date',
  rtp: 'RTP %',
  rtpFrom: 'RTP % - From',
  rtpTo: 'RTP % - To',
  hasDemo: 'Has Demo',
  yes: 'Yes',
  no: 'No',
  games: 'Games',
  addGame: 'Add Game',
  successAlertMessage: 'Successfully completed!',
  successMsg: 'The User was successfully created',
  successMultipleAlertMessage: `The ${TRANSLATION_CHANGED_VALUE} action were successfully completed !`,
  successMultipleAlertMessageAll: `The ${TRANSLATION_CHANGED_VALUE} actions were successfully completed !`,
  errorMultipleAlertMessage: `The ${TRANSLATION_CHANGED_VALUE} actions couldn't be completed !`,
  logo: 'Logo',
  gameId: 'Game ID',
  providerId: 'Provider ID',
  subtype: 'SubType',
  creationDate: 'Creation Date',
  createdBy: 'Create By',
  status: 'Status',
  statuses: {
    yes: 'Yes',
    no: 'No'
  },
  gameThemes: 'Theme',
  gameFeatures: 'Feature',
  gameTypes: "Game Types",
  device: 'Device',
  currencies: 'Currencies',
  supportedCurrencies: 'Supported currencies ',
  certifiedCountries: 'Certified countries ',
  restrictedCountries: 'Restricted countries',
  uILanguages: 'UI languages ',
  operatingLanguages: 'Operating languages',
  active: 'Active',
  blocked: 'Blocked',
  inActive: 'Inactive',
  removed: 'Removed',
  partnerId: 'Partner ID',
  gameCount: 'Game Count',
  gameCountFrom: 'Game Count From',
  gameCountTo: 'Game Count To',
  totalGameCount: 'Total Game Count',
  totalMarket: 'Total Market',
  targetMarkets: 'Target Markets',
  providerCurrencies: 'Provider Currencies',
  defaultCurrency: 'Default Currency',
  providers: 'Providers',
  activate: 'Activate',
  inActivate: 'Inactivate',
  emptyValue: 'N/A',
  clear: 'Clear',
  apply: 'Apply',
  add: 'Add',
  tables: {
    emptyResultFirstSentence: 'Sorry no data found!',
    emptyResultSecondSentence: 'Please make a different filter selection.'
  },
  youDontHaveProvidersAdded: 'You don’t have any providers added!',
  pleaseAddProvider: 'Please add a provider.',
  youDontHavePartnersAdded: 'You don’t have any partners added!',
  pleaseAddPartner: 'Please add a partner.',
  pagination: {
    pageSizeLabel: 'Row per page: ',
    jumpToPageLabel: 'Jump to page',
    totalCountDivider: 'of'
  },
  gameProvider: 'Game Provider',
  gamblingAndCasino: 'Gambling & Casino',
  declared: 'Declared',
  validated: 'Validated',
  terminated: 'Terminated',
  parentCompany: 'Parent Company',
  parentCompanyName: 'Parent Company Name',

  submitButton: 'Approve',
  terminate: 'Terminate',
  terminatePartnershipFirstPart: 'Do you want to  terminate the partnership with ',
  terminatePartnershipLastPart: ' partners?',
  multipleTerminatePartnershipLastPart: ' partners?',

  approvePartnershipFirstPart: 'Do you want to approve the partnership with ',
  approvePartnershipLastPart: ' partners?',
  multipleApprovePartnershipLastPart: ' partner?',

  providerActivateDescirptionFirstPart: 'Do you want to activate ',
  providerActivateDescirptionLastPart: ' provider?',
  multipleProviderActivateDescirptionLastPart: ' providers?',

  providerInActivateDescirptionFirstPart: 'Do you want to inactivate ',
  providerInActivateDescirptionLastPart: ' provider?',
  multipleProviderInActivateDescirptionLastPart: ' providers?',

  legalEntity: 'Legal Entity',
  legalName: 'Legal Name',
  brandName: 'Brand Name',
  businessActivity: 'Business Activity',
  companyType: 'Company Type',
  gamePlatforms: 'Device',
  main: 'Main',
  subsidiary: 'Subsidiary',
  companyLogoType: 'Company Logotype',
  addPartner: 'Add Partner',
  uniqueBrandName: 'Brand name is unique!',
  uniqueLegalName: 'Legal name is unique!',
  uniqueEmail: 'Email already exists!',
  optional: 'Optional',
  partnerManagement: 'Partner Management',
  partnerDetails: 'Partner Details',
  documentId: 'Document ID',
  mainInformation: 'Main Information',
  organizationData: 'Organization Data',
  providerInformation: 'Provider Information',
  generalInformation: 'General Information',
  bankName: 'Bank Name',
  bankAddress: 'Bank Address',
  bankAccountNumber: 'Bank Account Number',
  correspondentNumber: 'Correspondent Number',
  iban: 'IBAN',
  bicSwift: 'BiC/Swift',
  telephone: 'Telephone',
  mobileNumber: 'Mobile Number',
  eMail: 'E-mail',
  contactInformation: 'Contact Information',
  organizationDetails: 'Organization Details',
  bankInformation: 'Bank Information',
  managersContactInformation: 'Managers Contact Information',
  viewMore: 'View More',
  noData: 'N/A',
  parentCompanyId: 'Parent Company ID',
  expirationDate: 'Expiration Date',
  owner: 'Owner',
  name: 'Name',
  ownershipCertificate: 'Ownership Certificate',
  companyDirector: 'Company Director',
  directorsResolution: "Director's Resolution",
  confidant: 'Confidant',
  position: 'Position',
  powerOfAttorney: 'Power of Attorney',
  registrationCountry: 'Registration Country',
  address: 'Address',
  postalAddress: 'Postal Address',
  zipCode: 'Zip Code',
  tin: 'TIN',
  vat: 'VAT',
  registrationNumber: 'Registration Number',
  registrationDate: 'Registration Date',
  website: 'Website',
  dateOfCreationDatepickers: 'Date of Creation From - To',
  dateOfCreationFrom: 'Date of Creation - From',
  dateOfCreationTo: 'Date of Creation - To',
  lastUpdateBy: 'Last Update By',
  forever: 'Forever',
  temporary: 'Temporary',
  addUser: 'Add User',
  defaultLanguage: 'Default Language',
  dateOfCreation: 'Date of Creation',
  dateOfUpdate:'Date of Update',
  userId: 'User ID',
  email: 'E-mail (Username)',
  fullName: 'Full Name',
  mobile: 'Mobile',
  language: 'Language',
  currency: 'Currency',
  lastUpdateDate: 'Last Update Date',
  users: 'Users'
};
