import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { EmployeeComponent } from './employee/employee.component';

import { AuthenticationService } from './authentication.service';
import { EventTestComponent } from './event-test/event-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReservationComponent,
    EmployeeComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
