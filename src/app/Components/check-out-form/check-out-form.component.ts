import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent {
  cardId:string=""
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){
    _ActivatedRoute.paramMap.subscribe((params)=>{
      console.log(params.get('cartid'));

      this.cardId = params.get('cartid')!
    })
  }
  addressForm:FormGroup = new FormGroup({
    details : new FormControl(null, [Validators.required ,Validators.minLength(3), Validators.maxLength(40)]) ,
    phone : new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city : new FormControl(null , [Validators.required ,Validators.minLength(3), Validators.maxLength(20)])
  });

  checkout(addressForm : FormGroup){
    console.log(addressForm.value);
    console.log(this.cardId);

    this._ProductsService.checkout(this.cardId,addressForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        window.location.href = res.session.url
      }
    })
  }
}
