import {Component, OnInit} from '@angular/core';
import {Account} from '../../vo/account';
import {Router, Routes} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  account: Account;

  constructor(private router: Router, private myservice: AccountService, private location: Location) {
  }

  ngOnInit() {
    this.account = this.myservice.account;
  }

  update() {
    this.myservice.updateItem(this.account).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
