const { test, expect } = require('@playwright/test');
const UserApi = require('../../apis/UserApi');

test('Regression - Create User Using API', async () => {

    const userApi = new UserApi();

    const response = await userApi.createUser('TestUser01');

    expect(response.status).toBe('SUCCESS');
});