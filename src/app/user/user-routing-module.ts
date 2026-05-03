import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { OrderConfirmationPage } from './pages/order-confirmation-page/order-confirmation-page';
import { userGuard } from '../RouteGuards/user-guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [userGuard],
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
    canActivate: [userGuard],
    component: CartPage
  },
  {
    path: "checkout",
    canActivate: [userGuard],
    component: CheckoutPage
  },
  {
    path: "order-confirmation",
    canActivate: [userGuard],
    component: OrderConfirmationPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
