class UserApi {

    async createUser(userName) {
        console.log(`Creating user: ${userName}`);

        return {
            status: 'SUCCESS',
            userName: userName
        };
    }
}

module.exports = UserApi;