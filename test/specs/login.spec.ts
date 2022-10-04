import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../pages/login.page';
import { setJasmineInterval } from '../utils';

describe('Страница авторизации пользователя', () => {

    setJasmineInterval();

    it('Вход в приложение', () => {
        return allureReporter.addFeature(`${LoginPage.login()}`);
    });
});
