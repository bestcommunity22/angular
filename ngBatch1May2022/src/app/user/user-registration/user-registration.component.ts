import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { UserRegistration } from './user-registration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  @ViewChild('registerForm') registerFormRef: any;
  users: Array<UserRegistration> = [];
  @Output('UserList') userListEvt: EventEmitter<Array<UserRegistration>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    const nodes = this.registerFormRef.nativeElement.querySelectorAll('input');

    this.users.push({
      firstName: nodes[0].value,
      middleName: nodes[1].value,
      lastName: nodes[2].value,
      email: nodes[3].value,
      phone1: nodes[4].value,
      phone2: nodes[5].value
    });

    // Broadcast user list to parent
    this.userListEvt.emit(this.users);
  }


}
