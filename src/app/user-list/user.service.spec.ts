import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assert "getUserList" returns observable of array with 10 itens', (done) => {
    service.getUserList().subscribe(data => {
      expect(data.length).toEqual(10);
      done();
    });
  });

  it('should filterUserList by Patricia', (done) => {
    const userListSizeBeforeFilter = service.userList.length;

    service.filterUserList('Patricia').then(userList => {
      expect(userList.length).toBeLessThan(userListSizeBeforeFilter);
      expect(userList[0].name).toContain('Patricia');
      done();
    });
  })
});
