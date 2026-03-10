# Banking/Finance Testing - ParaBank

Automated E2E testing for [ParaBank](https://parabank.parasoft.com) banking demo application.

## Test Coverage

| Module | Tests |
|--------|-------|
| Login | 7 |
| Account Overview | 5 |
| Open Account | 4 |
| Fund Transfer | 4 |
| Bill Pay | 5 |

## Features Tested

- User authentication
- Account management
- Fund transfers between accounts
- Bill payment processing
- New account creation
- Session management

## Run Tests

```bash
# From root directory
npm run test:banking

# Or from this directory
npx playwright test
```

## Security Testing Highlights

- Session handling
- Input validation
- Error message verification
- Transaction integrity
