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
import { ReposData, BranchesData } from 'src/app/models/vm/reposVM.model';

@Injectable({
    providedIn: "root"
})
export class BranchesService extends GitApiService {
    constructor(http: HttpClient, router: Router, private toartr: ToastService,
        private userInfo: UserInfoService) {
        super(http, router)
    }

    private mapResponse(baseUrl: string, endpoint: string) {
        return this.getDataFromRequest(baseUrl, endpoint);
    }

    getBranches(array: ReposData[], reposData: ReposData, repoName: string) {
        this.mapResponse(`${this.reposUrl}/${this.userInfo.getCurrentUser()}/${repoName}`, 'branches').pipe(
            map(response => <Branches>
                {
                    branches: response
                })
        ).subscribe(x => { super.next(x); this.createRow(array, reposData, x) });
    }

    createRow(array: ReposData[], reposData: ReposData, branchesResponse: Branches) {
        if (branchesResponse) {
            let branches: BranchesData[] = [];
            branchesResponse.branches.forEach(b => branches.push(new BranchesData(b.name, b.commit.sha)));
            reposData.branches = branches;
            array.push(reposData);
        }
    }
}
