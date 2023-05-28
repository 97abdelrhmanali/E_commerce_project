import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/cart/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { SigninComponent } from './Components/signin/signin.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { SeemorePipe } from './Pipes/seemore.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { CheckOutFormComponent } from './Components/check-out-form/check-out-form.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component'
import { ROUTES, RouterModule } from '@angular/router';
import{BrowserAnimationsModule}from"@angular/platform-browser/animations"
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    SeemorePipe,
    SearchPipe,
    CheckOutFormComponent,
    AllOrdersComponent,
    NotFoundComponent,
    CategoriesComponent,
    BrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass : AddHeaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
