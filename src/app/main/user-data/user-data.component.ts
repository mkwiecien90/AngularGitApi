import { Component, OnInit, OnDestroy } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { CheckUserExistService } from 'src/app/_services/gitApiServices/checkUserExist.services';
import { UserInfoService } from 'src/app/_services/userInfo.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy{

  array = [
    {
      repositoryName: 'dasdasda', 
      loginOfRepositoryOwner: 'asfasfasf', 
      branches: [
        {name: 'asgasg',commit: 'w gwgarwgaer'}
      ]
    },
    {
      repositoryName: 'dasdasda', 
      loginOfRepositoryOwner: 'asfasfasf', 
      branches: [
        {name: 'asgasg',commit: 'w gwgarwgaer'},
        {name: 'asgasg',commit: 'w gwgarwgaer'},
        {name: 'asgasg',commit: 'w gwgarwgaer'}
      ]
    },
    {
      repositoryName: 'dasdasda', 
      loginOfRepositoryOwner: 'asfasfasf', 
      branches: [
        {name: 'asgasg',commit: 'w gwgarwgaer'},
        {name: 'asgasg',commit: 'w gwgarwgaer'}
      ]
    }
  ]
  public arrow = faArrowAltCircleLeft;
  constructor(private router: Router, private userInfo: UserInfoService) { }

  ngOnInit() {
  }

  returnToSelectUser() {
    this.userInfo.unsubscribe();
    this.router.navigate(['/app', 'inputUser'])
  }

  ngOnDestroy() {
    this.userInfo.unsubscribe();
  }
}
