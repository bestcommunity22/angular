import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { UserRegistration } from './user-registration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  // With out use ngModel
  @ViewChild('registerForm') registerFormRef: any;

  users: Array<UserRegistration> = [];
  user: UserRegistration = {};
  
  @Output('userList') userListEvt: EventEmitter<Array<UserRegistration>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    // e.preventDefault();

    this.users.push(this.user);

    // Broadcast user list to parent
    this.userListEvt.emit(this.users);
  }

  private _readFormDataUsingViewRef() {
    const nodes = this.registerFormRef.nativeElement.querySelectorAll('input');

    this.users.push({
      firstName: nodes[0].value,
      middleName: nodes[1].value,
      lastName: nodes[2].value,
      email: nodes[3].value,
      phone1: nodes[4].value,
      phone2: nodes[5].value
    });
  }

}
