const { test } = require('@playwright/test');
const DeviceHubService = require('../../services/DeviceHubService');

test('Regression - Device Hierarchy Creation', async ({ page }) => {

    const deviceHubService = new DeviceHubService(page);

    await deviceHubService.createCompleteHierarchy();

});