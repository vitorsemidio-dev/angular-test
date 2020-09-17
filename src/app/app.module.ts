import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { EmployeeComponent } from './employee/employee.component';

import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReservationComponent,
    EmployeeComponent
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
