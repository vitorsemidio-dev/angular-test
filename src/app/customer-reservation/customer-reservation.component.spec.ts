import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationComponent } from './customer-reservation.component';

describe('CustomerReservationComponent', () => {
  let component: CustomerReservationComponent;
  let fixture: ComponentFixture<CustomerReservationComponent>;
  let custService: CustomerReservationComponent;

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
    custService = new CustomerReservationComponent();
  });

  afterEach(() => {
    custService = null;
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

  it('should register customer / increase current customer count by 1', () => {
    const custCount = custService.registerCustomer();

    expect(custCount).toEqual(11);
  });

  it('should un-register customer / decrease current customer count by 1', () => {
    const custCount = custService.unregisterCustomer();

    expect(custCount).toEqual(9);
  });
});
