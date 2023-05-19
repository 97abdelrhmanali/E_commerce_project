import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from'@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}
  repass!:string;
  matched:boolean = false

  registerForm : FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required ,Validators.minLength(3), Validators.maxLength(20),Validators.pattern(/^[A-Z][A-Za-z]{0,}$/) ]),
    email:new FormControl(null , [ Validators.required, Validators.email , Validators.pattern(/(com|net)$/)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) ]),
    rePassword:new FormControl(null ,  [Validators.required]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  register(){
    if(this.registerForm.status == 'VALID'){
      console.log(this.registerForm);
      this._AuthService.hundleRegister(this.registerForm.value).subscribe(
        {
          next:(response)=>{
            if(response.message == 'success' )
            this._Router.navigate(['/login'])
          }

        }

      //   (response)=>{
      //   console.log(response)
      //   //
      // }
      )
    }

  }

  matchRepassword(){
    if(this.registerForm.value.password == this.registerForm.value.rePassword)
      {
        this.matched=true
      }

    else{
      this.matched = false
      }

  }
}
