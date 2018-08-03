import {ApiRequestService} from './ApiRequestService';
import {Injectable} from '@angular/core';
import {Account} from '../vo/account';
import {HttpParams} from '@angular/common/http';
import {a} from '@angular/core/src/render3';

@Injectable()
export class AccountService {
  account: Account;

  constructor(private apiRequest: ApiRequestService) {
  }

  getItems(account: Account) {
    console.log(account);

    let params = new HttpParams();

    Object.keys(account).forEach(function (key) {
      let value = account[key];
      if (value === '') {
        return;
      }
      if (value instanceof Date) {
        value = value.toISOString();
      }
      params = params.set(key, value);
    });
    return this.apiRequest.get<Account>('api/accounts', params);
  }

  addNew(account: Account) {
    return this.apiRequest.post<Account>('api/account', account);
  }

  updateItem(account: Account) {
    return this.apiRequest.put<Account>('api/account', account);
  }

  dropDB() {
    return this.apiRequest.get('api/dropDB');
  }

}
