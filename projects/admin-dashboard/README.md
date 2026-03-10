# Admin Dashboard Testing - OrangeHRM

Automated E2E testing for [OrangeHRM](https://opensource-demo.orangehrmlive.com) HR management system.

## Test Coverage

| Module | Tests |
|--------|-------|
| Login | 6 |
| Dashboard | 10 |
| Employee Management | 9 |
| Admin Module | 8 |

## Features Tested

- User authentication
- Dashboard navigation
- Employee CRUD operations
- User management
- Role-based access
- Search and filtering
- Form validation

## Run Tests

```bash
# From root directory
npm run test:admin

# Or from this directory
npx playwright test
```

## Credentials

- Username: Admin
- Password: admin123
