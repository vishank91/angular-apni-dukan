import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { OrderConfirmationPage } from './pages/order-confirmation-page/order-confirmation-page';

const routes: Routes = [
  {
    path: "",
    component: ProfilePage
  },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "signup",
    component: SignupPage
  },
  {
    path: "cart",
    component: CartPage
  },
  {
    path: "checkout",
    component: CheckoutPage
  },
  {
    path: "order-confirmation",
    component: OrderConfirmationPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
