  1) [chromium] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-chromium-retry2/error-context.md

  2) [chromium] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-chromium-retry2/error-context.md

  3) [chromium] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-chromium-retry2/error-context.md

  4) [firefox] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-firefox-retry2/error-context.md

  5) [firefox] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-firefox-retry2/error-context.md

  6) [firefox] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-firefox-retry2/error-context.md

  7) [webkit] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      41 |     const error = await billPayPage.getErrorMessage();
      42 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 43 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      44 |   });
      45 |
      46 |   test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:43:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-should-show-error-for-empty-amount-webkit-retry2/error-context.md

  8) [webkit] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      59 |     const error = await billPayPage.getErrorMessage();
      60 |     const isSuccessful = await billPayPage.isPaymentSuccessful();
    > 61 |     expect(error !== null || !isSuccessful).toBe(true);
         |                                             ^
      62 |   });
      63 | });
      64 |
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/billpay.spec.ts:61:45

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/billpay-Bill-Pay-Tests-sho-5e8c3--mismatched-account-numbers-webkit-retry2/error-context.md

  9) [webkit] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry1/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry1/error-context.md

    attachment #4: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

    Retry #2 ───────────────────────────────────────────────────────────────────────────────────────

    Error: expect(received).toContain(expected) // indexOf

    Expected substring: "could not be verified"
    Received string:    "An internal error has occurred and has been logged."

      21 |     await loginPage.login('invalid_user', 'invalid_pass');
      22 |     const error = await loginPage.getErrorMessage();
    > 23 |     expect(error).toContain('could not be verified');
         |                   ^
      24 |   });
      25 |
      26 |   test('should show error with empty username', async ({ loginPage }) => {
        at /home/runner/work/Playwrigth-TS/Playwrigth-TS/projects/banking/tests/login.spec.ts:23:19

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry2/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    attachment #2: video (video/webm) ──────────────────────────────────────────────────────────────
    test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry2/video.webm
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/banking/login-Login-Tests-should-show-error-with-invalid-credentials-webkit-retry2/error-context.md

  9 failed
    [chromium] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 
    [chromium] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 
    [chromium] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 
    [firefox] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 
    [firefox] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 
    [firefox] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 
    [webkit] › projects/banking/tests/billpay.spec.ts:35:7 › Bill Pay Tests › should show error for empty amount 
    [webkit] › projects/banking/tests/billpay.spec.ts:46:7 › Bill Pay Tests › should show error for mismatched account numbers 
    [webkit] › projects/banking/tests/login.spec.ts:20:7 › Login Tests › should show error with invalid credentials 
  66 passed (2.8m)
Error: Process completed with exit code 1.