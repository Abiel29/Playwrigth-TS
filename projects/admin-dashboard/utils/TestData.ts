export const TestUsers = {
  admin: {
    username: 'Admin',
    password: 'admin123',
  },
};

export const EmployeeData = {
  newEmployee: () => ({
    firstName: `Test${Date.now()}`,
    middleName: 'Middle',
    lastName: 'Employee',
    employeeId: `EMP${Date.now().toString().slice(-6)}`,
  }),
  existingEmployee: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

export const UserData = {
  newUser: () => ({
    username: `user_${Date.now()}`,
    password: 'Test@123',
    role: 'ESS' as const,
    status: 'Enabled' as const,
  }),
};

export const ErrorMessages = {
  invalidCredentials: 'Invalid credentials',
  required: 'Required',
  usernameExists: 'Already exists',
  passwordMismatch: 'Passwords do not match',
};

export const Roles = {
  admin: 'Admin',
  ess: 'ESS',
};

export const Status = {
  enabled: 'Enabled',
  disabled: 'Disabled',
};
