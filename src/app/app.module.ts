import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthorizeToken } from './_interceptors/authorizeToken.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { UserDataComponent } from './main/main/userData/user-data/user-data.component';
import { InputUserComponent } from './main/input-user/input-user/input-user.component';
import { CheckUserExistService } from './_services/gitApiServices/checkUserExist.services';
import { FormsModule } from '@angular/forms';
import { UserInfoService } from './_services/userInfo.services';

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
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeToken, multi: true},
    CheckUserExistService, 
    UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
