# Playwright E2E Testing Portfolio

Comprehensive automated testing portfolio demonstrating Playwright expertise across multiple domains.

## Projects

| Project | Website | Description |
|---------|---------|-------------|
| [E-Commerce](./projects/e-commerce/) | SauceDemo | Shopping cart, checkout, product management |
| [Booking](./projects/booking/) | PHPTravels | Hotel search, booking flow, date handling |
| [Banking](./projects/banking/) | ParaBank | Fund transfers, bill pay, account management |
| [Admin Dashboard](./projects/admin-dashboard/) | OrangeHRM | Employee CRUD, user management, role-based access |

## Tech Stack

- **Playwright** - E2E testing framework
- **TypeScript** - Type-safe JavaScript
- **Page Object Model** - Design pattern
- **Custom Fixtures** - Reusable test setup
- **GitHub Actions** - CI/CD pipeline

## Project Structure

```
├── projects/
│   ├── e-commerce/          # SauceDemo testing
│   ├── booking/             # Travel booking testing
│   ├── banking/             # Banking app testing
│   └── admin-dashboard/     # HR system testing
├── playwright-report/       # HTML reports
├── test-results/            # Test artifacts
└── .github/workflows/       # CI/CD
```

## Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npm test

# Run specific project
npm run test:e-commerce
npm run test:booking
npm run test:banking
npm run test:admin

# View reports
npm run report:e-commerce
npm run report:booking
npm run report:banking
npm run report:admin
```

## Test Coverage Summary

| Project | Test Cases |
|---------|------------|
| E-Commerce | ~64 |
| Booking | ~16 |
| Banking | ~25 |
| Admin Dashboard | ~33 |
| **Total** | **~138** |

## Key Features Demonstrated

- Page Object Model with inheritance
- Custom Playwright fixtures
- Data-driven testing
- Multi-browser testing
- Visual regression testing
- API testing
- CI/CD with parallel execution
- Comprehensive reporting

## CI/CD

GitHub Actions runs all projects in parallel on push/PR with daily scheduled runs.
