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
  }
};
