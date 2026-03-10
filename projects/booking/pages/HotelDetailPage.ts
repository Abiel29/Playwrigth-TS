import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HotelDetailPage extends BasePage {
  readonly pageUrl = /hotel|property/;
  readonly hotelName: Locator;
  readonly hotelRating: Locator;
  readonly hotelPrice: Locator;
  readonly hotelDescription: Locator;
  readonly hotelImages: Locator;
  readonly amenitiesList: Locator;
  readonly roomTypes: Locator;
  readonly bookNowButton: Locator;
  readonly reviewsSection: Locator;
  readonly mapSection: Locator;

  constructor(page: Page) {
    super(page);
    this.hotelName = page.locator('.hotel-name, h1.property-title');
    this.hotelRating = page.locator('.star-rating, .hotel-stars');
    this.hotelPrice = page.locator('.price-display, .room-price');
    this.hotelDescription = page.locator('.hotel-description, .property-description');
    this.hotelImages = page.locator('.hotel-gallery img, .property-images img');
    this.amenitiesList = page.locator('.amenities-list, .facilities');
    this.roomTypes = page.locator('.room-type, .room-card');
    this.bookNowButton = page.locator('button.book-now, .btn-book');
    this.reviewsSection = page.locator('.reviews-section, #reviews');
    this.mapSection = page.locator('.map-section, #map');
  }

  async getHotelName(): Promise<string | null> {
    return this.hotelName.textContent();
  }

  async getPrice(): Promise<number> {
    const text = await this.hotelPrice.first().textContent();
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }

  async getRoomTypesCount(): Promise<number> {
    return this.roomTypes.count();
  }

  async selectRoomByIndex(index: number) {
    await this.roomTypes.nth(index).locator('button').click();
  }

  async selectFirstRoom() {
    await this.selectRoomByIndex(0);
  }

  async clickBookNow() {
    await this.bookNowButton.click();
  }

  async getAmenities(): Promise<string[]> {
    return this.amenitiesList.locator('li, .amenity-item').allTextContents();
  }

  async hasAmenity(amenity: string): Promise<boolean> {
    const amenities = await this.getAmenities();
    return amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()));
  }

  async getImagesCount(): Promise<number> {
    return this.hotelImages.count();
  }

  async viewAllPhotos() {
    await this.page.locator('.view-all-photos, .gallery-trigger').click();
  }

  async scrollToReviews() {
    await this.scrollToElement(this.reviewsSection);
  }
}
