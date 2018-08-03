import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountService} from './service/account.service';
import {ApiRequestService} from './service/ApiRequestService';
import {AppConfig} from './app-config';
import {HttpClientModule} from '@angular/common/http';
import {UpdateAccountComponent} from './pages/account/update-account.component';
import {AccountComponent} from './pages/account/account.component';
import {AppRoutingModule} from './app-routing.module';
import {NewAccountComponent} from './pages/account/new-account.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateAccountComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppConfig,
    ApiRequestService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
