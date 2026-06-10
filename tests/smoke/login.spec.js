const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const testData = require('../../utils/testData');

test('Smoke - Verify Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
    testData.users.admin.username,
    testData.users.admin.password
);

    await dashboardPage.verifyDashboardLoaded();
});