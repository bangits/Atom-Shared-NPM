import { VALIDATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  validations: {
    required: 'Required field',
    max: `The maximum length is ${VALIDATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${VALIDATION_CHANGED_VALUE}!`
  },
  form: {
    save: 'Save',
    cancel: 'Cancel',
    continue: 'Continue'
  },
  tables: {
    resultLabel: `${VALIDATION_CHANGED_VALUE} users found`,
    clear: 'Clear',
    apply: 'Apply'
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
  partners: {
    list: {
      addPartnerButton: 'Add Partner',
      title: 'Partners',
      tableHeaders: {
        providerId: 'Provider ID',
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
    add: {
      fields: {
        legalEntity: 'Legal Entity',
        legalName: 'Legal Name',
        brandName: 'Brand Name',
        businessActivity: 'Business Activity',
        parentCompanyName: 'Parent Company',
        companyType: 'Company Type',
        companyLogoType: {
          title:"'Company Logotype'",
          dragAndDrop:'Drag and drop or Browse'
        },

      }
    }
  },
  users: {
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
