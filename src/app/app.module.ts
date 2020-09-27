import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { EmployeeComponent } from './employee/employee.component';

import { AuthenticationService } from './authentication.service';
import { EventTestComponent } from './event-test/event-test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReservationComponent,
    EmployeeComponent,
    EventTestComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
