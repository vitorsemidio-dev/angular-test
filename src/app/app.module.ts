import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReservationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
