import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

export class GitApiService extends Subject<any>{
    protected checkUserUrl: string;
    protected reposUrl: string;
    constructor(protected http: HttpClient, protected router: Router) {
        super();
        this.checkUserUrl = `${environment.apiUrl}/users`;
        this.reposUrl = `${environment.apiUrl}/repos`;
    }

    protected getDataFromRequest(baseUrl: string, endpoint: string): Observable<any> {
        const requestUrl = `${baseUrl}/${endpoint}`;
        return this.http
            .get(requestUrl);
    }
}