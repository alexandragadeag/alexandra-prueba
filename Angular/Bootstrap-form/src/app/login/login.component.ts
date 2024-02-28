import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { login } from '../interfaces/login.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['',Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {}

  save() {

    let login: login = {
      email: this.loginForm.get('email')?.value??'',
      password: this.loginForm.get('password')?.value??''
    }

   //Enviar por POST a backend con http
   let url = 'http://localhost:3000/login';
   this.httpClient.post<login>(url, login)
   .subscribe(res =>{
     // La respuesta tendrá un token 
     // guardar en localStorage
    console.log(res);

    //Redirigir haciala página home
    this.router.navigate(['product-list']);
   });

  }
}
