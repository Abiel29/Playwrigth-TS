import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly pageUrl = /dashboard/;
  readonly dashboardTitle: Locator;
  readonly sideMenu: Locator;
  readonly adminMenuItem: Locator;
  readonly pimMenuItem: Locator;
  readonly leaveMenuItem: Locator;
  readonly timeMenuItem: Locator;
  readonly recruitmentMenuItem: Locator;
  readonly myInfoMenuItem: Locator;
  readonly performanceMenuItem: Locator;
  readonly directoryMenuItem: Locator;
  readonly maintenanceMenuItem: Locator;
  readonly claimMenuItem: Locator;
  readonly buzzMenuItem: Locator;
  readonly userDropdown: Locator;
  readonly logoutLink: Locator;
  readonly searchInput: Locator;
  readonly quickLaunchWidgets: Locator;

  constructor(page: Page) {
    super(page);
    this.dashboardTitle = page.locator('.oxd-topbar-header-breadcrumb h6');
    this.sideMenu = page.locator('.oxd-sidepanel');
    this.adminMenuItem = page.locator('a[href*="admin/viewAdminModule"]');
    this.pimMenuItem = page.locator('a[href*="pim/viewPimModule"]');
    this.leaveMenuItem = page.locator('a[href*="leave/viewLeaveModule"]');
    this.timeMenuItem = page.locator('a[href*="time/viewTimeModule"]');
    this.recruitmentMenuItem = page.locator('a[href*="recruitment/viewRecruitmentModule"]');
    this.myInfoMenuItem = page.locator('a[href*="pim/viewMyDetails"]');
    this.performanceMenuItem = page.locator('a[href*="performance/viewPerformanceModule"]');
    this.directoryMenuItem = page.locator('a[href*="directory/viewDirectory"]');
    this.maintenanceMenuItem = page.locator('a[href*="maintenance/viewMaintenanceModule"]');
    this.claimMenuItem = page.locator('a[href*="claim/viewClaimModule"]');
    this.buzzMenuItem = page.locator('a[href*="buzz/viewBuzz"]');
    this.userDropdown = page.locator('.oxd-userdropdown');
    this.logoutLink = page.locator('a[href*="logout"]');
    this.searchInput = page.locator('.oxd-sidepanel-body input');
    this.quickLaunchWidgets = page.locator('.orangehrm-quick-launch-card');
  }

  async navigateToAdmin() {
    await this.adminMenuItem.click();
    await expect(this.page).toHaveURL(/admin/);
  }

  async navigateToPIM() {
    await this.pimMenuItem.click();
    await expect(this.page).toHaveURL(/pim/);
  }

  async navigateToLeave() {
    await this.leaveMenuItem.click();
    await expect(this.page).toHaveURL(/leave/);
  }

  async navigateToTime() {
    await this.timeMenuItem.click();
    await expect(this.page).toHaveURL(/time/);
  }

  async navigateToRecruitment() {
    await this.recruitmentMenuItem.click();
    await expect(this.page).toHaveURL(/recruitment/);
  }

  async navigateToMyInfo() {
    await this.myInfoMenuItem.click();
    await expect(this.page).toHaveURL(/pim\/viewPersonalDetails/);
  }

  async navigateToDirectory() {
    await this.directoryMenuItem.click();
    await expect(this.page).toHaveURL(/directory/);
  }

  async searchMenu(query: string) {
    await this.searchInput.fill(query);
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutLink.click();
  }

  async getQuickLaunchCount(): Promise<number> {
    return this.quickLaunchWidgets.count();
  }
}
