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
  statuses: {
    name: 'Status'
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
    add: {
      fields: {
        providerName: 'Provider Name',
        targetMarkets: 'Target Markets',
        certifiedCountries: 'Certified Countries',
        restrictedCountries: 'Restricted Countries',
        providerCurrencies: 'Provider Currencies',
        defaultCurrency: 'Default currency',
        logo: 'Logo'
      },
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
  }
};
