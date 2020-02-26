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
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeToken, multi: true},
    CheckUserExistService, 
    UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
