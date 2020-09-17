import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css']
})
export class CustomerReservationComponent implements OnInit {

  hotelRoomCapacity = 30;
  customerCount = 10;

  constructor() { }

  ngOnInit(): void {
  }

  reserveRoom(): boolean {
    let roomReserved = false;

    if (this.customerCount < this.hotelRoomCapacity) {
      this.customerCount++;
      roomReserved = true;
    }

    return roomReserved;
  }

}
