import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUserExistService } from 'src/app/_services/gitApiServices/checkUserExist.services';
import { UserInfoService } from 'src/app/_services/userInfo.services';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.scss']
})
export class InputUserComponent implements OnInit {

  protected service: CheckUserExistService;
  protected userInfo: UserInfoService;
  userName: string;
  constructor(private router: Router, service: CheckUserExistService, userInfo: UserInfoService) {
    this.service = service;
    this.userInfo = userInfo;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.findGitUser(this.userName);
    this.service.subscribe((response: User) => {
      if (response) {
        this.userInfo.rememberUser(response.login);
      }
    });
    this.router.navigate(['/app', 'userData'])
  }

}
