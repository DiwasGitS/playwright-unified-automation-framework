const { expect } = require('@playwright/test');

class CalendarPage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = '.inventory_list';
    }

    async verifyCalendarPageLoaded() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    }
}

module.exports = CalendarPage;