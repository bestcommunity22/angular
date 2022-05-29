import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserRegistration } from '../user-registration/user-registration';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input('dataSource') userList: Array<UserRegistration> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userList);
  }

  ngOnInit(): void {
  }

}
