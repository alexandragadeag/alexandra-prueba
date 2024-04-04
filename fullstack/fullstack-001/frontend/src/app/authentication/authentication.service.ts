import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { DecodedToken} from './token.dto';

// ng generate service authentication/authentication
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Comprueba si un usuario ya está loqueado, es decir, existen token
  // Notifica a quien se haya suscrito a este booleano de que ha ocurrido un login
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  userEmail = new BehaviorSubject<string>(this.getCurrentEmail());

  constructor() { }

  hasToken(): boolean {
    return localStorage.getItem("jwt_token") !== null;
  }

  handleLogin(token: string) {
    // guardar el token en el almacenamiento del navegador 
    localStorage.setItem("jwt_token", token);
    this.isLoggedIn.next(true);
    this.userEmail.next(this.getCurrentEmail());
  


  }
  getCurrentEmail() {
    // decodificar el token y extraer la información que tiene dentro
    const token = localStorage.getItem("jwt_token");
    if(!token) return '';
    
    const decodedToken = jwtDecode(token) as DecodedToken;
    return decodedToken.email;
    }

  logout() {
    localStorage.removeItem("jwt_token");
    this.isLoggedIn.next(false);
    this.userEmail.next('');

  }
}
