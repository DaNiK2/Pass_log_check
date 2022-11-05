'use strict';
class Reg {
    constructor(options) {
        this.login = options.login;
        this.password = options.password;
    }

    check() {
        let login = this.login;
        let password = this.password;
        let status = true;
        let check = [login.search(/[1-9]/g), password.search(/[A-Z]/g), password.search(/[1-9]/g)];
        if (login.length > 5) {
            status = check.includes(-1);
        } else {status = true}
        if (password.length <= 5) {
            status= true;
        }
        return status
    }

    arr_build() {
        let status = this.check();
        let data = [];
        let login = this.login;
        let password = this.password;
        if (status === false) {
            data.push(`Логин: ${login}. Пароль: ${password}`);
            return data
        } else {console.log('Данные введены не правильно')}
    }

}

const p1 = new Reg({
    login: 'polP12',
    password: 'ds1P12'
})

console.log(p1.arr_build());
