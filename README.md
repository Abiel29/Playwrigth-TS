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

## Test Reporting

Setiap project dilengkapi dengan multiple reporters untuk kemudahan analisis hasil test:

### Custom Summary Reporter
Output terminal yang mudah dibaca dengan:
- Header info (project, jumlah test, workers)
- Progress real-time dengan emoji status (✅/❌/⏭️/🔄)
- Summary box dengan pass rate dan durasi
- Daftar failed tests dengan error message

```
╔══════════════════════════════════════════════════════════════╗
║                      📊 TEST SUMMARY                         ║
╠══════════════════════════════════════════════════════════════╣
║  ✅ Passed:  5                                                ║
║  ❌ Failed:  0                                                ║
║  ⏭️  Skipped: 0                                               ║
║  🔄 Flaky:   0                                                ║
╠══════════════════════════════════════════════════════════════╣
║  📈 Pass Rate: 100.0%                                         ║
║  ⏱️  Duration: 5.70s                                          ║
║  🏁 Status: PASSED                                            ║
╚══════════════════════════════════════════════════════════════╝
```

### Available Reporters
| Reporter | Output | Kegunaan |
|----------|--------|----------|
| HTML | `playwright-report/<project>/` | Visual interaktif, screenshot, trace |
| JSON | `test-results/<project>/results.json` | Parsing, integrasi tools |
| JUnit | `test-results/<project>/results.xml` | CI/CD integration |
| Summary | Terminal | Quick overview |

### View Reports
```bash
npm run report:e-commerce   # Buka HTML report e-commerce
npm run report:booking      # Buka HTML report booking
npm run report:banking      # Buka HTML report banking
npm run report:admin        # Buka HTML report admin
```

## Key Features Demonstrated

- Page Object Model with inheritance
- Custom Playwright fixtures
- Data-driven testing
- Multi-browser testing
- Visual regression testing
- API testing
- CI/CD with parallel execution
- Custom test reporters

## CI/CD

GitHub Actions runs all projects in parallel on push/PR with daily scheduled runs.
