export const TestUsers = {
  existing: {
    username: 'john',
    password: 'demo',
  },
  newUser: () => ({
    firstName: 'Test',
    lastName: 'User',
    address: '123 Test St',
    city: 'Test City',
    state: 'TC',
    zipCode: '12345',
    phone: '1234567890',
    ssn: '123-45-6789',
    username: `testuser_${Date.now()}`,
    password: 'Test@123',
  }),
};

export const PayeeData = {
  utility: {
    name: 'Electric Company',
    address: '100 Power St',
    city: 'Energy City',
    state: 'EC',
    zipCode: '54321',
    phone: '9876543210',
    accountNumber: '12345',
  },
  creditCard: {
    name: 'Credit Card Company',
    address: '200 Finance Ave',
    city: 'Money City',
    state: 'MC',
    zipCode: '67890',
    phone: '5555555555',
    accountNumber: '67890',
  },
};

export const TransferAmounts = {
  small: '10',
  medium: '100',
  large: '500',
};

export const ErrorMessages = {
  invalidCredentials: 'The username and password could not be verified',
  usernameRequired: 'Username is required',
  passwordRequired: 'Password is required',
  amountRequired: 'Amount is required',
  insufficientFunds: 'Insufficient funds',
};

export const AccountTypes = {
  checking: 'CHECKING' as const,
  savings: 'SAVINGS' as const,
};
