import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    UserRegistrationComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
