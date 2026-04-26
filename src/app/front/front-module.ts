import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing-module';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { FaqPage } from './pages/faq-page/faq-page';
import { ContactUsPage } from './pages/contact-us-page/contact-us-page';
import { TestimonialPage } from './pages/testimonial-page/testimonial-page';
import { ErrorPage } from './pages/error-page/error-page';
import { Maincategory } from './components/maincategory/maincategory';
import { Subcategory } from './components/subcategory/subcategory';
import { Brand } from './components/brand/brand';
import { Products } from './components/products/products';
import { ProductSlider } from './components/product-slider/product-slider';
import { Features } from './components/features/features';
import { Testimonials } from './components/testimonials/testimonials';
import { Breadcrum } from './components/breadcrum/breadcrum';
import { ContactUsForm } from './components/contact-us-form/contact-us-form';
import { Product } from './pages/product/product';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsAndConditions } from './pages/terms-and-conditions/terms-and-conditions';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Navbar,
    Footer,
    HomePage,
    AboutPage,
    FeaturesPage,
    ShopPage,
    FaqPage,
    ContactUsPage,
    ErrorPage,
    TestimonialPage,
    Maincategory,
    Subcategory,
    Brand,
    Products,
    ProductSlider,
    Features,
    Testimonials,
    Breadcrum,
    ContactUsForm,
    Product,
    PrivacyPolicy,
    TermsAndConditions
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    Navbar,
    Footer,
    ErrorPage,
    Breadcrum
  ]
})
export class FrontModule { }
