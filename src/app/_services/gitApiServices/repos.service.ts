import { GitApiService } from '../gitApi.services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { ToastService } from '../toast.service';
import { UserInfoService } from '../userInfo.services';
import { Repos } from 'src/app/models/repos.model';
import { Branches } from 'src/app/models/branches.model';
import { Subject } from 'rxjs';
import { ReposData } from 'src/app/models/vm/reposVM.model';
import { BranchesService } from './branches.service';

@Injectable({
    providedIn: "root"
})
export class ReposService extends GitApiService {
    constructor(http: HttpClient, router: Router, private toartr: ToastService,
        private userInfo: UserInfoService, private branchesService: BranchesService) {
        super(http, router)
    }

    private mapResponse(baseUrl: string, endpoint: string) {
        return this.getDataFromRequest(baseUrl, endpoint);
    }

    getRepos(array: ReposData[]) {
        this.mapResponse(`${this.checkUserUrl}/${this.userInfo.getCurrentUser()}`, 'repos').pipe(
            map(response => <Repos>
                {
                    repos: response
                })
        ).subscribe(x => { super.next(x), this.getBranches(array, x) });
    }

    getBranches(array: ReposData[], response: Repos) {
        if (response) {
            response.repos.filter(withOutFork => withOutFork.fork !== true).forEach(f => {
                this.branchesService.getBranches(array, new ReposData(f.name, f.owner.login), f.name);
            });
        }
    }
}
