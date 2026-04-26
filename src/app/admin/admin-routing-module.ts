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

const routes: Routes = [
  {
    path: "",
    component: AdminHome
  },
  {
    path: "maincategory",
    component: AdminMaincategory
  },
  {
    path: "maincategory/create",
    component: AdminCreateMaincategory
  },
  {
    path: "maincategory/update",
    component: AdminUpdateMaincategory
  },
  {
    path: "subcategory",
    component: AdminSubcategory
  },
  {
    path: "subcategory/create",
    component: AdminCreateSubcategory
  },
  {
    path: "subcategory/update",
    component: AdminUpdateSubcategory
  },
  {
    path: "brand",
    component: AdminBrand
  },
  {
    path: "brand/create",
    component: AdminCreateBrand
  },
  {
    path: "brand/update",
    component: AdminUpdateBrand
  },
  {
    path: "product",
    component: AdminProduct
  },
  {
    path: "product/create",
    component: AdminCreateProduct
  },
  {
    path: "product/update",
    component: AdminUpdateProduct
  },
  {
    path: "features",
    component: AdminFeature
  },
  {
    path: "features/create",
    component: AdminCreateFeature
  },
  {
    path: "features/update",
    component: AdminUpdateFeature
  },
  {
    path: "faq",
    component: AdminFaq
  },
  {
    path: "faq/create",
    component: AdminCreateFaq
  },
  {
    path: "faq/update",
    component: AdminUpdateFaq
  },
  {
    path: "setting",
    component: AdminSetting
  },
  {
    path: "newsletter",
    component: AdminNewsletter
  },
  {
    path: "contactus",
    component: AdminContactUs
  },
  {
    path: "contactus/show",
    component: AdminContactUsShow
  },
  {
    path: "checkout",
    component: AdminCheckout
  },
  {
    path: "checkout/show",
    component: AdminCheckoutShow
  },
  {
    path: "user",
    component: AdminUser
  },
  {
    path: "user/create",
    component: AdminUserCreate
  },
  {
    path: "user/update",
    component: AdminUserUpdate
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
