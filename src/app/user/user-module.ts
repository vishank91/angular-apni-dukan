import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { ProfilePage } from './pages/profile-page/profile-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { OrderConfirmationPage } from './pages/order-confirmation-page/order-confirmation-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { FrontModule } from '../front/front-module';
import { Cart } from './components/cart/cart';
import { ReactiveFormsModule } from '@angular/forms';
import { Profile } from './components/profile/profile';
import { UpdateProfile } from './components/update-profile/update-profile';
import { Wishlist } from './components/wishlist/wishlist';
import { Orders } from './components/orders/orders';
import { Address } from './components/address/address';


@NgModule({
  declarations: [
    ProfilePage,
    CartPage,
    CheckoutPage,
    OrderConfirmationPage,
    LoginPage,
    SignupPage,
    Cart,
    Profile,
    UpdateProfile,
    Wishlist,
    Orders,
    Address
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FrontModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
