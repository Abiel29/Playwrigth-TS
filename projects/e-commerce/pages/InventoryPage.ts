import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageUrl = /inventory/;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly sortDropdown: Locator;
  readonly burgerMenu: Locator;
  readonly logoutLink: Locator;
  readonly allItemsLink: Locator;
  readonly aboutLink: Locator;
  readonly resetAppState: Locator;
  readonly closeSidebarButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.aboutLink = page.locator('#about_sidebar_link');
    this.resetAppState = page.locator('#reset_sidebar_link');
    this.closeSidebarButton = page.locator('#react-burger-cross-btn');
  }

  async addItemToCart(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button[id^="add-to-cart"]').click();
  }

  async addMultipleItemsToCart(itemNames: string[]) {
    for (const itemName of itemNames) {
      await this.addItemToCart(itemName);
    }
  }

  async removeItemFromCart(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button[id^="remove"]').click();
  }

  async getCartCount(): Promise<number> {
    const isVisible = await this.cartBadge.isVisible();
    if (!isVisible) return 0;
    const badge = await this.cartBadge.textContent();
    return badge ? parseInt(badge) : 0;
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
    return priceTexts.map((price) => parseFloat(price.replace('$', '')));
  }

  async openSidebar() {
    await this.burgerMenu.click();
    await this.logoutLink.waitFor({ state: 'visible' });
  }

  async closeSidebar() {
    await this.closeSidebarButton.click();
  }

  async logout() {
    await this.openSidebar();
    await this.logoutLink.click();
  }

  async resetApp() {
    await this.openSidebar();
    await this.resetAppState.click();
    await this.closeSidebar();
  }

  async goToCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart/);
  }

  async clickProductByName(itemName: string) {
    await this.page.locator('.inventory_item_name').filter({ hasText: itemName }).click();
  }

  async getItemPrice(itemName: string): Promise<number> {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    const priceText = await item.locator('.inventory_item_price').textContent();
    return parseFloat(priceText?.replace('$', '') || '0');
  }
}
