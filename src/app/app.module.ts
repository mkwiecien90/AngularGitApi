import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthorizeToken } from './_interceptors/authorizeToken.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckUserExistService } from './_services/gitApiServices/checkUserExist.services';
import { FormsModule } from '@angular/forms';
import { UserInfoService } from './_services/userInfo.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MainComponent } from './main/main.component';
import { UserDataComponent } from './main/user-data/user-data.component';
import { InputUserComponent } from './main/input-user/input-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorCatcher } from './_interceptors/errorCatcher.interceptors';
import { ReposService } from './_services/gitApiServices/repos.service';
import { BranchesService } from './_services/gitApiServices/branches.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserDataComponent,
    InputUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeToken, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorCatcher, multi: true},
    UserInfoService,
    CheckUserExistService, 
    ReposService,
    BranchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
