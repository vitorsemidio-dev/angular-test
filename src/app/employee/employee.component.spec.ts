import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [ AuthenticationService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the value "Salary Slip"', () => {
    const salarySlip = component.getSalarySlip();
    expect(salarySlip).toEqual('Salary Slip');
  });

  it('should assert "checkAuthentication" has been called', () => {
    spyOn(authService, 'checkAuthentication');
    const salarySlip = component.getSalarySlip();
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should assert "checkAuthentication" has been called and the function return "true"', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    const salarySlip = component.getSalarySlip();
    expect(salarySlip).toBe('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should assert value for "h1" element to be value of component.salSlip', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  });
});
