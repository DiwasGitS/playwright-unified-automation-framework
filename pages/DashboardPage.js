const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = '.inventory_list';
    }

    async verifyDashboardLoaded() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    }
}

module.exports = DashboardPage;