# E-Commerce Testing - SauceDemo

Automated E2E testing for [SauceDemo](https://www.saucedemo.com) e-commerce website.

## Test Coverage

| Module | Tests |
|--------|-------|
| Login | 9 |
| Inventory | 13 |
| Checkout | 13 |
| Product Detail | 5 |
| E2E Flows | 5 |
| Visual | 7 |
| API | 12 |

## Run Tests

```bash
# From root directory
npm run test:e-commerce

# Or from this directory
npx playwright test
```

## Features Tested

- User authentication (login/logout)
- Product browsing & sorting
- Shopping cart management
- Checkout flow with validation
- Visual regression
- API integration
