import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly pageUrl = /cart/;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly cartTitle: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartTitle = page.locator('.title');
    this.cartQuantity = page.locator('.cart_quantity');
  }

  async getCartItemsCount(): Promise<number> {
    return this.cartItems.count();
  }

  async getCartItemNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getCartItemPrices(): Promise<number[]> {
    const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
    return priceTexts.map((price) => parseFloat(price.replace('$', '')));
  }

  async getCartTotal(): Promise<number> {
    const prices = await this.getCartItemPrices();
    return prices.reduce((sum, price) => sum + price, 0);
  }

  async removeItem(itemName: string) {
    const item = this.page.locator('.cart_item').filter({ hasText: itemName });
    await item.locator('button[id^="remove"]').click();
  }

  async removeAllItems() {
    const removeButtons = this.page.locator('button[id^="remove"]');
    const count = await removeButtons.count();
    for (let i = count - 1; i >= 0; i--) {
      await removeButtons.nth(i).click();
    }
  }

  async isItemInCart(itemName: string): Promise<boolean> {
    const item = this.page.locator('.cart_item').filter({ hasText: itemName });
    return item.isVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyCartIsEmpty() {
    const count = await this.getCartItemsCount();
    expect(count).toBe(0);
  }
}
