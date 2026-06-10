class SpaceApi {

    async createSpace(spaceName) {

        console.log(`Creating Space: ${spaceName}`);

        return {
            status: 'SUCCESS',
            spaceName: spaceName
        };
    }
}

module.exports = SpaceApi;