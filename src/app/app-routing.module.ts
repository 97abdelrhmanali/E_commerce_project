import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/signin/signin.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutFormComponent } from './Components/check-out-form/check-out-form.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';

const routes: Routes = [
  {path:'', redirectTo :'login' ,pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home' ,canActivate:[AuthGuard], component: HomeComponent},
  {path:'checkout/:cartid' ,canActivate:[AuthGuard], component: CheckOutFormComponent},
  {path:'product/:id',canActivate:[AuthGuard] , component:ProductDetailsComponent},
  {path:'signin' , component: SigninComponent},
  {path:'allorders' ,canActivate:[AuthGuard], component: AllOrdersComponent},
  {path:'categories',canActivate:[AuthGuard] , component: CategoriesComponent},
  {path:'brands' ,canActivate:[AuthGuard], component: BrandsComponent},
  {path:'cart' , component: CartComponent},
  {path:'settings',loadChildren:()=>import('./Modules/settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
