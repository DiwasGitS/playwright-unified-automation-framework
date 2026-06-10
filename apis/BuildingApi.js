class BuildingApi {

    async createBuilding(buildingName) {

        console.log(`Creating Building: ${buildingName}`);

        return {
            status: 'SUCCESS',
            buildingName: buildingName
        };
    }
}

module.exports = BuildingApi;