const { test, expect } = require('@playwright/test');

const BuildingApi = require('../../apis/BuildingApi');
const FloorApi = require('../../apis/FloorApi');
const SiteApi = require('../../apis/SiteApi');
const SpaceApi = require('../../apis/SpaceApi');
const UserApi = require('../../apis/UserApi');
const ContainerJobService = require('../../services/ContainerJobService');

test('Regression - End To End Data Flow', async () => {

    const buildingApi = new BuildingApi();
    const floorApi = new FloorApi();
    const siteApi = new SiteApi();
    const spaceApi = new SpaceApi();
    const userApi = new UserApi();
    const containerJobService = new ContainerJobService();

    const building = await buildingApi.createBuilding('Building01');
    const floor = await floorApi.createFloor('Floor01');
    const site = await siteApi.createSite('Site01');
    const space = await spaceApi.createSpace('Space01');
    const user = await userApi.createUser('User01');

    const job = await containerJobService.runContainerJob('DeviceSyncJob');

    expect(building.status).toBe('SUCCESS');
    expect(floor.status).toBe('SUCCESS');
    expect(site.status).toBe('SUCCESS');
    expect(space.status).toBe('SUCCESS');
    expect(user.status).toBe('SUCCESS');
    expect(job.status).toBe('SUCCESS');
});