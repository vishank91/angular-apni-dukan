import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHome } from './pages/admin-home/admin-home';
import { AdminMaincategory } from './pages/maincategory/admin-maincategory/admin-maincategory';
import { AdminCreateMaincategory } from './pages/maincategory/admin-create-maincategory/admin-create-maincategory';
import { AdminUpdateMaincategory } from './pages/maincategory/admin-update-maincategory/admin-update-maincategory';
import { AdminSubcategory } from './pages/subcategory/admin-subcategory/admin-subcategory';
import { AdminCreateSubcategory } from './pages/subcategory/admin-create-subcategory/admin-create-subcategory';
import { AdminUpdateSubcategory } from './pages/subcategory/admin-update-subcategory/admin-update-subcategory';
import { AdminBrand } from './pages/brand/admin-brand/admin-brand';
import { AdminCreateBrand } from './pages/brand/admin-create-brand/admin-create-brand';
import { AdminUpdateBrand } from './pages/brand/admin-update-brand/admin-update-brand';
import { AdminProduct } from './pages/product/admin-product/admin-product';
import { AdminCreateProduct } from './pages/product/admin-create-product/admin-create-product';
import { AdminUpdateProduct } from './pages/product/admin-update-product/admin-update-product';
import { AdminFeature } from './pages/feature/admin-feature/admin-feature';
import { AdminCreateFeature } from './pages/feature/admin-create-feature/admin-create-feature';
import { AdminUpdateFeature } from './pages/feature/admin-update-feature/admin-update-feature';
import { AdminFaq } from './pages/faq/admin-faq/admin-faq';
import { AdminCreateFaq } from './pages/faq/admin-create-faq/admin-create-faq';
import { AdminUpdateFaq } from './pages/faq/admin-update-faq/admin-update-faq';
import { AdminSetting } from './pages/setting/admin-setting/admin-setting';
import { AdminNewsletter } from './pages/newsletter/admin-newsletter/admin-newsletter';
import { AdminContactUs } from './pages/contactus/admin-contact-us/admin-contact-us';
import { AdminContactUsShow } from './pages/contactus/admin-contact-us-show/admin-contact-us-show';
import { AdminCheckout } from './pages/checkout/admin-checkout/admin-checkout';
import { AdminCheckoutShow } from './pages/checkout/admin-checkout-show/admin-checkout-show';
import { AdminUser } from './pages/user/admin-user/admin-user';
import { AdminUserCreate } from './pages/user/admin-user-create/admin-user-create';
import { AdminUserUpdate } from './pages/user/admin-user-update/admin-user-update';
import { adminGuard } from '../RouteGuards/admin-guard';
import { superAdminGuard } from '../RouteGuards/super-admin-guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [adminGuard],
    component: AdminHome
  },
  {
    path: "maincategory",
    canActivate: [adminGuard],
    component: AdminMaincategory
  },
  {
    path: "maincategory/create",
    canActivate: [adminGuard],
    component: AdminCreateMaincategory
  },
  {
    path: "maincategory/update",
    canActivate: [adminGuard],
    component: AdminUpdateMaincategory
  },
  {
    path: "subcategory",
    canActivate: [adminGuard],
    component: AdminSubcategory
  },
  {
    path: "subcategory/create",
    canActivate: [adminGuard],
    component: AdminCreateSubcategory
  },
  {
    path: "subcategory/update",
    canActivate: [adminGuard],
    component: AdminUpdateSubcategory
  },
  {
    path: "brand",
    canActivate: [adminGuard],
    component: AdminBrand
  },
  {
    path: "brand/create",
    canActivate: [adminGuard],
    component: AdminCreateBrand
  },
  {
    path: "brand/update",
    canActivate: [adminGuard],
    component: AdminUpdateBrand
  },
  {
    path: "product",
    canActivate: [adminGuard],
    component: AdminProduct
  },
  {
    path: "product/create",
    canActivate: [adminGuard],
    component: AdminCreateProduct
  },
  {
    path: "product/update",
    canActivate: [adminGuard],
    component: AdminUpdateProduct
  },
  {
    path: "features",
    canActivate: [adminGuard],
    component: AdminFeature
  },
  {
    path: "features/create",
    canActivate: [adminGuard],
    component: AdminCreateFeature
  },
  {
    path: "features/update",
    canActivate: [adminGuard],
    component: AdminUpdateFeature
  },
  {
    path: "faq",
    canActivate: [adminGuard],
    component: AdminFaq
  },
  {
    path: "faq/create",
    canActivate: [adminGuard],
    component: AdminCreateFaq
  },
  {
    path: "faq/update",
    canActivate: [adminGuard],
    component: AdminUpdateFaq
  },
  {
    path: "setting",
    canActivate: [adminGuard],
    component: AdminSetting
  },
  {
    path: "newsletter",
    canActivate: [adminGuard],
    component: AdminNewsletter
  },
  {
    path: "contactus",
    canActivate: [adminGuard],
    component: AdminContactUs
  },
  {
    path: "contactus/show",
    canActivate: [adminGuard],
    component: AdminContactUsShow
  },
  {
    path: "checkout",
    canActivate: [adminGuard],
    component: AdminCheckout
  },
  {
    path: "checkout/show",
    canActivate: [adminGuard],
    component: AdminCheckoutShow
  },
  {
    path: "user",
    canActivate: [superAdminGuard],
    component: AdminUser
  },
  {
    path: "user/create",
    canActivate: [superAdminGuard],
    component: AdminUserCreate
  },
  {
    path: "user/update",
    canActivate: [superAdminGuard],
    component: AdminUserUpdate
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
