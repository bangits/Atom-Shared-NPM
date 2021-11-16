import { VALIDATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  login: {
    username: 'Email or Username',
    password: 'Password',
    title: 'Sign In',
    subtitle: 'Login to manage your account',
    buttonText: 'Login',
    'user-not-found': 'Invalid account'
  },
  validations: {
    required: 'Required field',
    max: `The maximum length is ${VALIDATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${VALIDATION_CHANGED_VALUE}!`
  },
  statuses: {
    active: 'Active',
    blocked: 'Blocked',
    inActive: 'Inactive',
    removed: 'Removed'
  },
  provider: {
    providerList: {
      title: 'Providers',
      usersFound: 'users found',
      fields: {
        providerName: 'Provider Name',
        providerId: 'Provider ID',
        gameCount: {
          to: 'Game Count - From',
          from: 'Game Count - To'
        },
        currency: 'Default currency',
        status: 'Status'
      }
    },
    addProvider: 'Add Provider',
    applyLabel: 'Apply',
    clearLabel: 'Clear'
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
      statusInfo: {
        label: 'Status',
        variant: 'active'
      },
      lastActivity: {
        title: 'Last Activity'
      }
    },
    add: {
      title: 'Add Player',
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
      close: 'Close',
      continue: 'Continue',
      save: 'Save',

      steps: { 'account-information': 'ACCOUNT INFORMATION', 'player-information': 'PLAYER INFORMATION' }
    }
  }
};
