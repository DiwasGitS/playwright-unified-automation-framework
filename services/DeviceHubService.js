const DeviceHubPage = require('../pages/DeviceHubPage');

class DeviceHubService {

    constructor(page) {
        this.deviceHubPage = new DeviceHubPage(page);
    }

    async createCompleteHierarchy() {

        await this.deviceHubPage.createBuilding('Building01');
        await this.deviceHubPage.createFloor('Floor01');
        await this.deviceHubPage.createSite('Site01');
        await this.deviceHubPage.createSpace('Space01');
        await this.deviceHubPage.createUser('User01');
        await this.deviceHubPage.runContainerJob('DeviceSyncJob');
    }
}

module.exports = DeviceHubService;