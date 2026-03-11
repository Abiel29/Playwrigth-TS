import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter';

class SummaryReporter implements Reporter {
  private passed = 0;
  private failed = 0;
  private skipped = 0;
  private flaky = 0;
  private startTime = 0;
  private failedTests: { title: string; file: string; error: string }[] = [];

  onBegin(config: FullConfig, suite: Suite) {
    this.startTime = Date.now();
    const totalTests = suite.allTests().length;
    console.log('\n');
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    🎭 PLAYWRIGHT TEST RUN                    ║');
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log(`║  📁 Projects: ${config.projects.map(p => p.name).join(', ').padEnd(47)}║`);
    console.log(`║  🧪 Total Tests: ${String(totalTests).padEnd(44)}║`);
    console.log(`║  👷 Workers: ${String(config.workers).padEnd(49)}║`);
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log('\n');
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status;
    const duration = (result.duration / 1000).toFixed(2);
    const icon = status === 'passed' ? '✅' : status === 'failed' ? '❌' : status === 'skipped' ? '⏭️' : '🔄';
    
    console.log(`${icon} [${duration}s] ${test.parent.title} › ${test.title}`);

    if (status === 'passed') {
      if (result.retry > 0) {
        this.flaky++;
      }
      this.passed++;
    } else if (status === 'failed') {
      this.failed++;
      const errorMessage = result.errors?.[0]?.message?.split('\n')[0] || 'Unknown error';
      this.failedTests.push({
        title: test.title,
        file: test.location.file.split('/').pop() || '',
        error: errorMessage.substring(0, 80),
      });
    } else if (status === 'skipped') {
      this.skipped++;
    }
  }

  onEnd(result: FullResult) {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const total = this.passed + this.failed + this.skipped;
    const passRate = total > 0 ? ((this.passed / total) * 100).toFixed(1) : '0';

    console.log('\n');
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                      📊 TEST SUMMARY                         ║');
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log(`║  ✅ Passed:  ${String(this.passed).padEnd(49)}║`);
    console.log(`║  ❌ Failed:  ${String(this.failed).padEnd(49)}║`);
    console.log(`║  ⏭️  Skipped: ${String(this.skipped).padEnd(48)}║`);
    console.log(`║  🔄 Flaky:   ${String(this.flaky).padEnd(49)}║`);
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log(`║  📈 Pass Rate: ${passRate}%`.padEnd(64) + '║');
    console.log(`║  ⏱️  Duration: ${duration}s`.padEnd(64) + '║');
    console.log(`║  🏁 Status: ${result.status.toUpperCase()}`.padEnd(64) + '║');
    console.log('╚══════════════════════════════════════════════════════════════╝');

    if (this.failedTests.length > 0) {
      console.log('\n');
      console.log('╔══════════════════════════════════════════════════════════════╗');
      console.log('║                      ❌ FAILED TESTS                         ║');
      console.log('╠══════════════════════════════════════════════════════════════╣');
      this.failedTests.forEach((t, i) => {
        console.log(`║  ${i + 1}. ${t.title.substring(0, 55).padEnd(58)}║`);
        console.log(`║     📁 ${t.file.padEnd(54)}║`);
        console.log(`║     💬 ${t.error.padEnd(54)}║`);
        if (i < this.failedTests.length - 1) {
          console.log('║                                                              ║');
        }
      });
      console.log('╚══════════════════════════════════════════════════════════════╝');
    }

    console.log('\n');
    console.log('💡 Tips:');
    console.log('   • View HTML report: npm run report:<project>');
    console.log('   • Debug failed test: npx playwright test --debug');
    console.log('   • Run with UI: npx playwright test --ui');
    console.log('\n');
  }
}

export default SummaryReporter;
