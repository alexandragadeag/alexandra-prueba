import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbAlert, RouterLink],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent {

  user: User | undefined;

  userForm = new FormGroup({
    phone: new FormControl()
    });
  

  constructor(private httpClient: HttpClient) {}

  save(){

  }
}
