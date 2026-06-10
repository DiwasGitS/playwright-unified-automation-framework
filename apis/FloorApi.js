class FloorApi {

    async createFloor(floorName) {

        console.log(`Creating Floor: ${floorName}`);

        return {
            status: 'SUCCESS',
            floorName: floorName
        };
    }
}

module.exports = FloorApi;