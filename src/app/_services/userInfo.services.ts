import { Injectable } from "@angular/core";
import {  Subject } from 'rxjs';
@Injectable()
export class UserInfoService {
    suscribtionUser = new Subject();
    constructor() {}

    rememberUser(login: string){
        localStorage.setItem('userLogin', login);
    }

    getCurrentUser(): string {
        const login = localStorage.getItem('userLogin');
        if(login)
        {
            return login;
        }
        return '';
    }

    clearCurrentUser() {
        localStorage.removeItem('userLogin');
    }

    unsubscribe(){
        if(this.suscribtionUser) {
            this.suscribtionUser.next();
            this.suscribtionUser.complete();
        }
    }
}