import {Component, OnInit} from '@angular/core';
import {Account} from '../../vo/account';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  qry: Account = new Account();
  accounts: Account[] = [];

  constructor(private router: Router, private myservice: AccountService, private location: Location) {

  }

  ngOnInit(): void {
    this.getAllItems();
  }

  public getAllItems() {
    this.myservice.getItems(this.qry).subscribe((data) => {
      this.accounts = data.items;
    });
  }

  public dropDB() {
    this.myservice.dropDB().subscribe();
    this.getAllItems();
  }

  public gotoUpdate(todo) {
    this.myservice.account = todo;
    this.router.navigate(['/updateAccount']);
  }

  public filter() {
    this.myservice.getItems(this.qry).subscribe((data) => {
      this.accounts = data.items;
    });
  }

  public gotoDelete(todo) {
    // TODO
  }

  public refresh() {
    // TODO
  }


}
