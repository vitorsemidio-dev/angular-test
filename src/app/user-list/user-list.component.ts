import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [];
  tempUserList = [];
  searchText = '';
  userName = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
      this.userList = data;
    });
  }

  filterUserList(event) {
    this.userName = this.searchText;
    this.userService.filterUserList(this.searchText).then(
      data => {
        this.userList = data;
      }
    );
  }

}
