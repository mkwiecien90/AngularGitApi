import { Component, OnInit, OnDestroy } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { UserInfoService } from 'src/app/_services/userInfo.services';
import { Router } from '@angular/router';
import { ReposService } from 'src/app/_services/gitApiServices/repos.service';
import { Repos } from 'src/app/models/repos.model';
import { ReposData, BranchesData } from 'src/app/models/vm/reposVM.model';
import { Branches } from 'src/app/models/branches.model';
import { BranchesService } from 'src/app/_services/gitApiServices/branches.service';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy {
  array: ReposData[] = [];
  public arrow = faArrowAltCircleLeft;
  constructor(private router: Router, private userInfo: UserInfoService,
    public service: ReposService) { }

  ngOnInit() {
    this.createData();
  }

  returnToSelectUser() {
    this.router.navigate(['/app', 'inputUser'])
    this.ngOnDestroy();
   
  }

  createData() {
    this.service.getRepos(this.array);
  }

  ngOnDestroy() {
    this.userInfo.unsubscribe();
  }
}
