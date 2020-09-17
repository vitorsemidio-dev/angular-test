import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationComponent } from './customer-reservation.component';

describe('CustomerReservationComponent', () => {
  let component: CustomerReservationComponent;
  let fixture: ComponentFixture<CustomerReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing room is reserved or not', () => {
    // Arrange
    const custReserve = new CustomerReservationComponent();

    // Act
    const isReserved = custReserve.reserveRoom();

    // Asert
    expect(isReserved).toBeTrue();
  });
});
