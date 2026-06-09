const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;

        this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
        this.cartItem = '.inventory_item_name';
    }

    async addProductToCart() {
        await this.page.click(this.addBackpackButton);
    }

    async openCart() {
        await this.page.click(this.cartIcon);
    }

    async verifyProductAdded() {
        await expect(this.page.locator(this.cartItem)).toContainText('Sauce Labs Backpack');
    }
}

module.exports = CartPage;