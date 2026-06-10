class SiteApi {

    async createSite(siteName) {

        console.log(`Creating Site: ${siteName}`);

        return {
            status: 'SUCCESS',
            siteName: siteName
        };
    }
}

module.exports = SiteApi;