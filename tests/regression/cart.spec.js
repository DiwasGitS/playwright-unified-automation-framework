const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const CartPage = require('../../pages/CartPage');
const testData = require('../../utils/testData');

test('Regression - Add Product To Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.username,
        testData.password
    );

    await dashboardPage.verifyDashboardLoaded();

    await cartPage.addProductToCart();

    await cartPage.openCart();

    await cartPage.verifyProductAdded();
});