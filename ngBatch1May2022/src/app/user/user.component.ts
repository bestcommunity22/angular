import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  childUserList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  receiveChildRegistData(userList: Array<any>) {
    this.childUserList = userList;
  }
}
