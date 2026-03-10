export const Users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce',
  },
  performance: {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

export const Products = {
  backpack: 'Sauce Labs Backpack',
  bikeLight: 'Sauce Labs Bike Light',
  boltShirt: 'Sauce Labs Bolt T-Shirt',
  fleeceJacket: 'Sauce Labs Fleece Jacket',
  onesie: 'Sauce Labs Onesie',
  redShirt: 'Test.allTheThings() T-Shirt (Red)',
};

export const ShippingInfo = {
  valid: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
  },
  empty: {
    firstName: '',
    lastName: '',
    postalCode: '',
  },
};

export const ErrorMessages = {
  usernameRequired: 'Username is required',
  passwordRequired: 'Password is required',
  invalidCredentials: 'Username and password do not match',
  lockedOut: 'Sorry, this user has been locked out',
  firstNameRequired: 'First Name is required',
  lastNameRequired: 'Last Name is required',
  postalCodeRequired: 'Postal Code is required',
};
