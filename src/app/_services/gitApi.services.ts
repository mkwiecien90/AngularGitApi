import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

export class GitApiService extends Subject<any>{
    protected checkUserUrl: string;
    constructor(private http: HttpClient, private router: Router) {
        super();
        this.checkUserUrl = `${environment.apiUrl}/users`;
    }

    protected getDataFromRequest(baseUrl: string, endpoint: string): Observable<any> {
        const requestUrl = `${baseUrl}/${endpoint}`;
        return this.http
            .get(requestUrl);
    }
}