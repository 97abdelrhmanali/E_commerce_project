import { Injectable } from '@angular/core';
import { RegisterForm } from '../Interfaces/register-form';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginForm } from '../Interfaces/login-form';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { Enviroment } from '../Enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseURL:string = "https://route-ecommerce.onrender.com/api/v1/auth/"
  baseURL:string = Enviroment.baseURL+"auth/";
  userIslockedin = new BehaviorSubject(false)
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('token') != null)
    {
      this.userIslockedin.next(true)
      try{
        var decode = jwtDecode(localStorage.getItem('token')+"")
        console.log(decode);
      }

      catch(error:any){
        console.log(error);
        if(error.message){
          this.logout()
        }
      }

    }
  }

  hundleRegister( registerform:RegisterForm):Observable<any>{
    return this._HttpClient.post(this.baseURL+"signup" , registerform)
  }

  hundleLogin( registerform:LoginForm):Observable<any>{
    return this._HttpClient.post(this.baseURL+"signin" , registerform)
  }

  logout(){
    this.userIslockedin.next(false)
    localStorage.removeItem('token')
    this._Router.navigate(['/login']);
  }
}
