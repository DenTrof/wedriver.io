import { Page, iWaitElement } from '../utils';
import { userAccess } from '../credentials';

class Login extends Page {
    get userName() { return $('//input[@name="username"]') };
    get password() { return $('//input[@name="password"]') };
    get submitButton() { return $('//button[@type="submit"]') };

    get title() { return $('//div[@class="records"]') };

    open() {
        return super.open(`${process.env.APP_URL}`);
    };

    submit() {
        this.submitButton.click();
    };

    login() {
        const { name, password } = userAccess;
        this.open();

        browser.pause(1500);
        this.userName.setValue(name);
        this.password.setValue(password);

        this.submit();
        browser.pause(1500);
        this.title.waitForDisplayed();
        browser.pause(4500);
    }
};

export default new Login();
