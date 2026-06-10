class DeviceHubPage {

    constructor(page) {
        this.page = page;
    }

    async createBuilding(buildingName) {
        console.log(`Creating Building: ${buildingName}`);
    }

    async createFloor(floorName) {
        console.log(`Creating Floor: ${floorName}`);
    }

    async createSite(siteName) {
        console.log(`Creating Site: ${siteName}`);
    }

    async createSpace(spaceName) {
        console.log(`Creating Space: ${spaceName}`);
    }

    async createUser(userName) {
        console.log(`Creating User: ${userName}`);
    }

    async runContainerJob(jobName) {
        console.log(`Running Container Job: ${jobName}`);
    }
}

module.exports = DeviceHubPage;