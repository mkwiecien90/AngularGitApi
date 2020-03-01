import { GitApiService } from '../gitApi.services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { of } from 'rxjs';
import { ToastService } from '../toast.service';

@Injectable({
    providedIn: "root"
  })
export class CheckUserExistService extends GitApiService{
    constructor(http: HttpClient, router: Router, private toartr: ToastService){
        super(http,router)
    }

    private mapResponse(baseUrl: string, endpoint: string){
        const response = this.getDataFromRequest(baseUrl, endpoint);
        return response.pipe(
            map(response => response as User)
        );
    }

    findGitUser(userName: string): void {
       this.mapResponse(this.checkUserUrl, userName).subscribe(x => super.next(x));
    }
}