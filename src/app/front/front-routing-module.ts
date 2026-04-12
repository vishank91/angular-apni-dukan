import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { FaqPage } from './pages/faq-page/faq-page';
import { TestimonialPage } from './pages/testimonial-page/testimonial-page';
import { ContactUsPage } from './pages/contact-us-page/contact-us-page';
import { Product } from './pages/product/product';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsAndConditions } from './pages/terms-and-conditions/terms-and-conditions';

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "shop",
    component: ShopPage
  },
  {
    path: "features",
    component: FeaturesPage
  },
  {
    path: "faq",
    component: FaqPage
  },
  {
    path: "testimonial",
    component: TestimonialPage
  },
  {
    path: "contactus",
    component: ContactUsPage
  },
  {
    path: "product",
    component: Product
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicy
  },
  {
    path: "tc",
    component: TermsAndConditions
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
