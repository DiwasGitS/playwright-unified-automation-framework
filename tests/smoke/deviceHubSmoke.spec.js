const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const UsersPage = require('../../pages/UsersPage');
const CalendarPage = require('../../pages/CalendarPage');
const testData = require('../../utils/testData');

test('DeviceHub Smoke Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const usersPage = new UsersPage(page);
    const calendarPage = new CalendarPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        testData.users.admin.username,
        testData.users.admin.password
    );

    await dashboardPage.verifyDashboardLoaded();

    await usersPage.verifyUsersPageLoaded();

    await calendarPage.verifyCalendarPageLoaded();
});