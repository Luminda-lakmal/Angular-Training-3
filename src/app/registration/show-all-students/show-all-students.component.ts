import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent implements OnInit {

  constructor() { }
  users:any = [];

  ngOnInit(): void {
    this.users = [
      { name: 'Janith', age: 25, email: 'j@email.com' },
      { name: 'Kasun', age: 23, email: 'k@email.com' },
      { name: 'Amal', age: 35, email: 'a@email.com' },
      { name: 'Dasun', age: 45, email: 'jd@email.com' },
      { name: 'Faf', age: 28, email: 'f@email.com' },
      { name: 'Manith', age: 15, email: 'm@email.com' },
    ];

  }

}
