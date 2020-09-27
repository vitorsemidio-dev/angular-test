import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { UserListComponent } from './user-list.component';

import { UserService } from './user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let debugElement: DebugElement;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ FormsModule ],
      providers: [ UserService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test filter user list (done)', (done) => {
    component.searchText = 'Clementine';
    const userSpy = spyOn(userService, 'filterUserList').and.callThrough();

    component.filterUserList({});

    userSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();

      const value = debugElement.query(By.css('#user_0')).nativeElement.innerText;

      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter user list (async)', async () => {
    component.searchText = 'Clementine';

    const userSpy = spyOn(userService, 'filterUserList').withArgs('Clementine').and.callThrough();

    component.filterUserList({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#user_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    })
  });
});
