const DeviceHubPage = require('../pages/DeviceHubPage');
const testData = require('../utils/testData');

class DeviceHubService {

    constructor(page) {
        this.deviceHubPage = new DeviceHubPage(page);
    }

    async createCompleteHierarchy() {

        await this.deviceHubPage.createBuilding(testData.buildings.buildingName);
        await this.deviceHubPage.createFloor(testData.buildings.floorName);
        await this.deviceHubPage.createSite(testData.buildings.siteName);
        await this.deviceHubPage.createSpace(testData.buildings.spaceName);
        await this.deviceHubPage.createUser('User01');
        await this.deviceHubPage.runContainerJob('DeviceSyncJob');
    }
}

module.exports = DeviceHubService;