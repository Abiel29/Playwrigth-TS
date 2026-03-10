import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  readonly pageUrl = /inventory-item/;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;
  readonly backButton: Locator;
  readonly productImage: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = page.locator('.inventory_details_name');
    this.productDescription = page.locator('.inventory_details_desc');
    this.productPrice = page.locator('.inventory_details_price');
    this.addToCartButton = page.locator('button[id^="add-to-cart"]');
    this.removeButton = page.locator('button[id^="remove"]');
    this.backButton = page.locator('[data-test="back-to-products"]');
    this.productImage = page.locator('.inventory_details_img');
  }

  async getProductName(): Promise<string | null> {
    return this.productName.textContent();
  }

  async getProductPrice(): Promise<number> {
    const text = await this.productPrice.textContent();
    return parseFloat(text?.replace('$', '') || '0');
  }

  async addToCart() {
    await this.addToCartButton.click();
    await expect(this.removeButton).toBeVisible();
  }

  async removeFromCart() {
    await this.removeButton.click();
    await expect(this.addToCartButton).toBeVisible();
  }

  async goBack() {
    await this.backButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async isAddToCartVisible(): Promise<boolean> {
    return this.addToCartButton.isVisible();
  }

  async isRemoveVisible(): Promise<boolean> {
    return this.removeButton.isVisible();
  }
}
