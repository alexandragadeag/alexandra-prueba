import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user.model';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
 
  // atributos
  users: User[] = [];

  // constructor
  constructor() {}
  
  // métodos
  ngOnInit(): void {
    


    this.users = [
      {
        id: 1,
        email: "user1@gmail.com",
        salary: 2000.0,
        active: true,
        registerDate: new Date()

      },
      {
        id:2,
        email: "user2@gmail.com",
        salary: 3000.0,
        active: false,
        registerDate: new Date()
      },
      {
        id:3,
        email: "user3@gmail.com",
        salary: 2000.0,
        active: true,
        registerDate: new Date()
      },
      {
        id:4,
        email: "user4@gmail.com",
        salary: 5000.0,
        active: false,
        registerDate: new Date()
      },
      {
        id:5,
        email: "user5@gmail.com",
        salary: 3000.0,
        active: true,
        registerDate: new Date()
      },
    ]
  }


}
