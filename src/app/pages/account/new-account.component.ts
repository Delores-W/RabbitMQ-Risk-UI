///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Account} from '../../vo/account';
import {Routes} from '@angular/router';
import {AccountService} from '../../service/account.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-account.component',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  vo: Account;

  constructor(private myservice: AccountService, private location: Location) {
  }

  ngOnInit() {
    this.vo = new Account();
    this.vo.id = 0;
  }

  addNew() {
    this.myservice.addNew(this.vo).subscribe(() => {
      this.back();
    });
  }

  back(): void {
    this.location.back();
  }

}
