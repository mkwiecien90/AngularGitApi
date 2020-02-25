export class UserInfoService {
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
}