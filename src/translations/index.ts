import { VALIDATION_CHANGED_VALUE } from '@/configs/constants';

export default {
  validations: {
    required: 'Required field',
    max: `The maximum length is ${VALIDATION_CHANGED_VALUE}!`,
    min: `The minimum length is ${VALIDATION_CHANGED_VALUE}!`
  },
  form: {
    save: 'Save',
    cancel: 'Cancel'
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
  }
};
