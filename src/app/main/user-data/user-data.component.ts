import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
