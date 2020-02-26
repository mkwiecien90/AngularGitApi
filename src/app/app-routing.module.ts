import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputUserComponent } from './main/input-user/input-user.component';
import { UserDataComponent } from './main/user-data/user-data.component';
import { MainComponent } from './main/main.component';



const appChildren: Routes = [
  {path: 'inputUser', component: InputUserComponent, data: {title: 'Wybór użytkownika'}},
  {path: 'userData', component: UserDataComponent, data: {title: 'Dane użytkownika'}}
];
const routes: Routes = [
  {path: 'app', component: MainComponent, children: appChildren, data: {title: 'Wybór użytkownika'}},
  {path: '**', redirectTo: 'app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
