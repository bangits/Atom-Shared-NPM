import { TRANSLATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  common: {
    id: 'ID',
    connectionError: 'The connection to the server was lost ! Try later.'
  },
  validations: {
    required: 'Required field',
    max: `The maximum length is ${TRANSLATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${TRANSLATION_CHANGED_VALUE}!`
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
    pagination: {
      pageSizeLabel: 'Row per page: ',
      jumpToPageLabel: 'Jump to page',
      totalCountDivider: 'of'
    }
  },
  statuses: {
    name: 'Status',
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
    fields: {
      providerId: 'Provider ID',
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
      addProviderButton: 'Add Provider'
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
      form: {
        title: 'Add Partner'
      },
      fields: {
        legalEntity: 'Legal Entity',
        legalName: 'Legal Name',
        brandName: 'Brand Name',
        businessActivity: 'Business Activity',
        parentCompanyName: 'Parent Company',
        companyType: 'Company Type',
        companyLogoType: {
          title: 'Company Logotype',
          dragAndDrop: 'Drag and drop or Browse'
        }
      }
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
  }
};
