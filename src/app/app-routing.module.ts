import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AccountComponent} from './pages/account/account.component';
import {UpdateAccountComponent} from './pages/account/update-account.component';
import {NewAccountComponent} from './pages/account/new-account.component';

const routes: Routes = [
    {path: '', redirectTo: 'accounts', pathMatch: 'full'},
    // {path: 'login', component: LoginComponent}

    // path: 'home', component: AccountComponent,
    // children: [
    //   {path: 'accounts', component: AccountComponent},
    //   {path: 'newAccount', component: AccountComponent},
    //   {path: 'updateAccount', component: UpdateAccountComponent},
    // ]

    {path: 'accounts', component: AccountComponent},
    {path: 'newAccount', component: NewAccountComponent},
    {path: 'updateAccount', component: UpdateAccountComponent}


  ]
;

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
