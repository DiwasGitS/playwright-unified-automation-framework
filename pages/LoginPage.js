class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameTextbox = '#user-name';
        this.passwordTextbox = '#password';
        this.loginButton = '#login-button';
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameTextbox, username);
        await this.page.fill(this.passwordTextbox, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;