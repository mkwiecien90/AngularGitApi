import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUserExistService } from 'src/app/_services/gitApiServices/checkUserExist.services';
import { UserInfoService } from 'src/app/_services/userInfo.services';
import { ToastService } from 'src/app/_services/toast.service';
import { User } from 'src/app/models/user.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.scss']
})
export class InputUserComponent implements OnInit {

  protected service: CheckUserExistService;
  protected userInfo: UserInfoService;
  userName: string;
  constructor(private router: Router, service: CheckUserExistService, 
                      userInfo: UserInfoService, private toastr: ToastService) {
    this.service = service;
    this.userInfo = userInfo;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.findGitUser(this.userName);
  }
}
