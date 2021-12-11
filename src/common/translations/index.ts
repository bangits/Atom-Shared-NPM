import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  common: {
    id: 'ID',
    connectionError: 'The connection to the server was lost ! Try later.',
    optional: '(optional)'
  },
  validations: {
    required: 'Required field',
    max: `The maximum length is ${TRANSLATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${TRANSLATION_CHANGED_VALUE}!`,
    textInput: 'Sorry, only letters, numbers, spaces, underscores and hyphens are allowed!'
  },
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
  form: {
    save: 'Save',
    cancel: 'Cancel',
    continue: 'Continue',
    all: 'All',
    close: 'Close'
  },
  tables: {
    resultLabel: `${TRANSLATION_CHANGED_VALUE} users found`,
    emptyValue: 'N/A',
    clear: 'Clear',
    apply: 'Apply',
    emptyResultFirstSentence: 'Sorry no data found!',
    emptyResultSecondSentence: 'Please make a different filter selection.',
    pagination: {
      pageSizeLabel: 'Row per page: ',
      jumpToPageLabel: 'Jump to page',
      totalCountDivider: 'of'
    }
  },
  statuses: {
    name: 'Status',
    all: 'All',
    active: 'Active',
    blocked: 'Blocked',
    inActive: 'Inactive',
    removed: 'Removed'
  },
  login: {
    username: 'Email or Username',
    password: 'Password',
    title: 'Sign In',
    subtitle: 'Login to manage your account',
    buttonText: 'Login',
    'user-not-found': 'Invalid account'
  },
  providers: {
    statuses: {
      active: 'Active',
      blocked: 'Blocked',
      inActive: 'Inactive'
    },
    fields: {
      providerId: 'Provider ID',
      partnerId: 'Partner ID',
      gameCount: 'Game Count',
      gameCountFrom: 'Game Count From',
      gameCountTo: 'Game Count To',
      providerName: 'Provider Name',
      targetMarkets: 'Target Markets',
      certifiedCountries: 'Certified Countries',
      restrictedCountries: 'Restricted Countries',
      providerCurrencies: 'Provider Currencies',
      defaultCurrency: 'Default currency',
      logo: 'Logo'
    },
    list: {
      title: 'Providers',
      addProviderButton: 'Add Provider',
      emptyResultFirstSentence: 'You don’t have any providers added!',
      emptyResultSecondSentence: 'Please add a provider.'
    },
    add: {
      form: {
        title: 'Add Provider'
      }
    }
  },
  partners: {
    actions: {
      approve: 'Approve',
      terminate: 'Terminate'
    },
    alerts: {
      successPartnersApprove: `The ${TRANSLATION_CHANGED_VALUE} Partnerships were successfully approved !`,
      errorPartnersApprove: `The ${TRANSLATION_CHANGED_VALUE} of selected partnerships couldn't be approved !`,

      successPartnersTerminate: `The ${TRANSLATION_CHANGED_VALUE} Partnerships were successfully terminated !`,
      errorPartnersTerminate: `The ${TRANSLATION_CHANGED_VALUE} of selected partnerships couldn't be terminated !`
    },
    dialogs: {
      approve: {
        title: 'Approve',
        descirptionFirstPart: 'Do you want to approve the partnership with ',
        descirptionLastPart: ' partners?',
        submitButton: 'Approve'
      },
      terminate: {
        title: 'Terminate',
        descirptionFirstPart: 'Do you want to  terminate the partnership with ',
        descirptionLastPart: ' partners?',
        submitButton: 'Terminate'
      }
    },
    add: {
      validationTexts: {
        uniqueBrandName: 'Brand name is unique!',
        uniqueLegalName: 'Legal name is unique!'
      },
      form: {
        title: 'Add Partner'
      },
      fields: {
        legalEntity: 'Legal Entity',
        legalName: 'Legal Name',
        brandName: 'Brand Name',
        businessActivity: 'Business Activity',
        parentCompanyName: 'Parent Company',
        companyType: {
          title: 'Company Type',
          main: 'Main',
          subsidiary: 'Subsidiary'
        },
        companyLogoType: 'Company Logotype'
      },
      successMsg: 'The Partner was successfully created !'
    },
    businessActivities: {
      gameProvider: 'Game Provider',
      gamblingAndCasino: 'Gambling & Casino'
    },
    fields: {
      partnerId: 'Partner ID',
      legalName: 'Legal Name',
      companyType: 'Company Type',
      main: 'Main',
      subsidiary: 'Subsidiary',
      brandName: 'Brand Name',
      businessActivity: 'Business Activity',
      parentCompanyId: 'Parent Company ID',
      parentCompanyName: 'Parent Company Name',
      lastUpdateBy: 'Last Update By',
      createdBy: 'Created By',
      status: 'Status'
    },
    statuses: {
      declared: 'Declared',
      validated: 'Validated',
      terminated: 'Terminated'
    },
    list: {
      addPartnerButton: 'Add Partner',
      title: 'Partners',
      emptyResultFirstSentence: 'You don’t have any partners added!',
      emptyResultSecondSentence: 'Please add a partner.',
      tableHeaders: {
        partnerId: 'Partner ID',
        legalEntity: 'Legal Entity',
        legalName: 'Legal Name',
        brandName: 'Brand Name',
        businessActivity: 'Business Activity',
        companyType: 'Company type',
        parentCompanyId: 'Parent Company ID',
        parentCompanyName: 'Parent Company Name',
        dateOfCreation: 'Date of Creation',
        dateOfUpdate: 'Date of Update',
        lastUpdateBy: 'Last Update By',
        createdBy: 'Created By',
        status: 'Status'
      }
    },

    details: {
      tabs: {
        organizationDetails: 'Organization Details',
        projects: 'Projects',
        documents: 'Documents'
      },
      subTab: {
        mainInformation: 'Main Information',
        providerInformation: 'Provider Information'
      },
      common: {
        brandName: 'Brand Name',
        organizationDetails: 'Organization Details',
        contactInformation: 'Contact Information',
        bankInformation: 'Bank Information',
        managersContactInformation: 'Managers Contact Information',
        viewMore: 'View More',
        noData: 'N/A',
        status: 'Status',
        parentCompany: 'Parent Company',
        parentCompanyId: 'Parent Company ID',
        documentId: 'Document ID',
        type: 'Type',
        expirationDate: 'Expiration Date',
        breadCrumb: {
          partnerManagement: 'Partner Management',
          partnerDetails: 'Partner Details'
        }
      },
      organizationDetails: {
        businessActivity: 'Business Activity',
        legalEntity: 'Legal Entity',
        legalName: 'Legal Name',
        companyType: 'Company Type',
        parentCompany: 'Parent Company',
        registrationCountry: 'Registration Country',
        region: 'Region',
        city: 'City',
        address: 'Address',
        postalAddress: 'Postal Address',
        zipCode: 'Zip Code',
        tin: 'TIN',
        vat: 'VAT',
        registrationNumber: 'Registration Number',
        registrationDate: 'Registration Date',
        website: 'Website'
      },
      bankInformation: {
        bankName: 'Bank Name',
        bankAddress: 'Bank Address',
        bankAccountNumber: 'Bank Account Number',
        correspondentNumber: 'Correspondent Number',
        iban: 'IBAN',
        bicSwift: 'BiC/Swift'
      },
      contactInformation: {
        telephone: 'Telephone',
        mobileNumber: 'Mobile Number',
        eMail: 'E-mail'
      },
      managersContactInformation: {
        owner: {
          title: 'Owner',
          name: 'Name',
          eMail: 'E-mail',
          telephone: 'Telephone',
          mobileNumber: 'Mobile Number',
          ownershipCertificate: 'Ownership Certificate'
        },
        companyDirectory: {
          title: 'Company Director',
          name: 'Name',
          eMail: 'E-mail',
          telephone: 'Telephone',
          mobileNumber: 'Mobile Number',
          directorSResolution: "Director's Resolution"
        },
        confidant: {
          title: 'Confidant',
          name: 'Name',
          position: 'Position',
          eMail: 'E-mail',
          telephone: 'Telephone',
          mobileNumber: 'Mobile Number',
          powerOfAttorney: 'Power of Attorney'
        }
      }
    }
  },
  player: {
    details: {
      userInfo: {
        username: 'Username'
      },
      walletInfo: {
        wallet: 'Wallet',
        realBalance: {
          realBalanceLabel: 'Real Balance',
          subBalance: {
            casino: 'Casino',
            sport: 'Sport'
          }
        },
        bonusBalance: 'Bonus Balance',
        totalBalance: 'Total Balance'
      },
      lastActivity: {
        title: 'Last Activity'
      }
    },
    add: {
      form: {
        title: 'Add Player'
      },
      fields: {
        project: 'Project',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        currency: 'Currency',
        bonusCode: 'Bonus Code',
        firstName: 'First Name',
        lastName: 'Last Name',
        middleName: 'Middle Name',
        dateOfBirth: 'Date of Birth',
        gender: 'Gender',
        country: 'Country',
        region: 'Region',
        city: 'City',
        address: 'Address',
        zipCode: 'Zip Code',
        phoneNumber: 'Contact Number',
        documentType: 'Document Type',
        passportOrId: 'Passport/Id'
      },
      steps: { 'account-information': 'ACCOUNT INFORMATION', 'player-information': 'PLAYER INFORMATION' }
    }
  },
  users: {
    add: {
      title: 'Add User',
      fields: {
        email: 'E-mail',
        passwordHash: 'Password',
        expirationDate: {
          fieldName: 'Expiration Date',
          forever: 'Forever',
          temporary: 'Temporary'
        },
        defaultCurrency: 'Default Currency',
        defaultLanguage: 'Default Language'
      }
    },
    list: {
      addUserButton: 'Add User',
      title: 'Users',
      tableHeaders: {
        dateOfCreation: 'Date of Creation',
        createdBy: 'Created By',
        userId: 'User ID',
        email: 'E-mail (Username)',
        fullName: 'Full Name',
        mobile: 'Mobile',
        country: 'Country',
        city: 'City',
        language: 'Language',
        currency: 'Currency',
        lastUpdateDate: 'Last Update Date',
        lastUpdateBy: 'Last Update By',
        status: 'Status'
      }
    }
  },
  games: {
    add: {
      errorMsg: 'The internet connection was lost ! Try later.” And the system shouldn’t keep the change.',
      successMsg: 'Successfully completed.!',
      validationTexts: {
        uniqueEmail: 'Legal name is unique! '
      },
      title: 'Add Game',
      fields: {
        externalId: 'External ID',
        gameName: 'Game Name',
        type: 'Type',
        providerName: 'Provider',
        subType: 'Subtype'
      }
    },
    list: {
      resultNotFound: 'You don’t have any users added!',
      title: 'Games',
      addGameButton: 'Add Game',
      tableHeaders: {
        logo: 'Logo',
        gameId: 'Game ID',
        gameName: 'Game Name',
        externalId: 'External ID',
        providerName: 'Provider name',
        providerId: 'Provider Id',
        type: 'Type',
        subtype: 'SubType',
        volatility: 'Volatility',
        rtp: 'RTP',
        class: 'Class',
        releaseDate: 'Release Date',
        creationDate: 'Creation Date',
        createdBy: 'Create By',
        status: 'Status'
      },
      fields: {
        statuses: {
          yes: 'Yes',
          no: 'No'
        },
        gameId: 'Game ID',
        externalId: 'External ID',
        providerName: 'Provider',
        gameTypes: 'Type',
        gameName: 'Game Name',
        type: 'Type',
        subType: 'Subtype',
        rtp: {
          title: 'RTP %',
          from: 'RTP % - From',
          to: 'RTP % - To '
        },
        hasDemo: {
          title: 'Has demo',
          yes: 'Yes',
          no: 'No',
          all: 'All'
        },
        releaseDate: 'Release date',
        class: 'Class',
        gameThemes: 'Theme',
        gameFeatures: 'Feature',
        device: 'Device',
        supportedCurrencies: 'Supported currencies ',
        supportedBrowsers: 'Supported browsers',
        certifiedCountries: 'Certified countries ',
        restrictedCountries: 'Restricted countries',
        volatility: 'Volatility',
        uILanguages: 'UI languages ',
        operatingLanguages: 'Operating languages',
        creationDate: 'Creation date',
        createdBy: 'Created by'
      }
    }
  }
};
