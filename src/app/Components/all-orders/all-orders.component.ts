import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  orders:any[]=[]
  constructor(private _ProductsService:ProductsService){
    _ProductsService.getallorders().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.orders = res.data
      }
    })
  }
}
