const { expect } = require('@playwright/test');

class UsersPage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = '.inventory_list';
    }

    async verifyUsersPageLoaded() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    }
}

module.exports = UsersPage;