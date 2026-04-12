import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiURL = environment.apiUrl
  constructor(private http: HttpClient) { }

  //maincategory
  createMaincategory(data: any) {
    return this.http.post(`${this.apiURL}/maincategory`, data)
  }
  getMaincategory() {
    return this.http.get(`${this.apiURL}/maincategory`)
  }
  getSingleMaincategory(id: any) {
    return this.http.get(`${this.apiURL}/maincategory/${id}`)
  }
  updateMaincategory(data: any) {
    return this.http.put(`${this.apiURL}/maincategory/${data.id}`, data)
  }
  deleteMaincategory(id: any) {
    return this.http.delete(`${this.apiURL}/maincategory/${id}`)
  }

  //subcategory
  createSubcategory(data: any) {
    return this.http.post(`${this.apiURL}/subcategory`, data)
  }
  getSubcategory() {
    return this.http.get(`${this.apiURL}/subcategory`)
  }
  getSingleSubcategory(id: any) {
    return this.http.get(`${this.apiURL}/subcategory/${id}`)
  }
  updateSubcategory(data: any) {
    return this.http.put(`${this.apiURL}/subcategory/${data.id}`, data)
  }
  deleteSubcategory(id: any) {
    return this.http.delete(`${this.apiURL}/subcategory/${id}`)
  }

  //brand
  createBrand(data: any) {
    return this.http.post(`${this.apiURL}/brand`, data)
  }
  getBrand() {
    return this.http.get(`${this.apiURL}/brand`)
  }
  getSingleBrand(id: any) {
    return this.http.get(`${this.apiURL}/brand/${id}`)
  }
  updateBrand(data: any) {
    return this.http.put(`${this.apiURL}/brand/${data.id}`, data)
  }
  deleteBrand(id: any) {
    return this.http.delete(`${this.apiURL}/brand/${id}`)
  }

  //product
  createProduct(data: any) {
    return this.http.post(`${this.apiURL}/product`, data)
  }
  getProduct() {
    return this.http.get(`${this.apiURL}/product`)
  }
  getSingleProduct(id: any) {
    return this.http.get(`${this.apiURL}/product/${id}`)
  }
  updateProduct(data: any) {
    return this.http.put(`${this.apiURL}/product/${data.id}`, data)
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.apiURL}/product/${id}`)
  }

  //feature
  createFeature(data: any) {
    return this.http.post(`${this.apiURL}/feature`, data)
  }
  getFeature() {
    return this.http.get(`${this.apiURL}/feature`)
  }
  getSingleFeature(id: any) {
    return this.http.get(`${this.apiURL}/feature/${id}`)
  }
  updateFeature(data: any) {
    return this.http.put(`${this.apiURL}/feature/${data.id}`, data)
  }
  deleteFeature(id: any) {
    return this.http.delete(`${this.apiURL}/feature/${id}`)
  }

  //faq
  createFaq(data: any) {
    return this.http.post(`${this.apiURL}/faq`, data)
  }
  getFaq() {
    return this.http.get(`${this.apiURL}/faq`)
  }
  getSingleFaq(id: any) {
    return this.http.get(`${this.apiURL}/faq/${id}`)
  }
  updateFaq(data: any) {
    return this.http.put(`${this.apiURL}/faq/${data.id}`, data)
  }
  deleteFaq(id: any) {
    return this.http.delete(`${this.apiURL}/faq/${id}`)
  }

  //setting
  createSetting(data: any) {
    return this.http.post(`${this.apiURL}/setting`, data)
  }
  getSetting() {
    return this.http.get(`${this.apiURL}/setting`)
  }
  getSingleSetting(id: any) {
    return this.http.get(`${this.apiURL}/setting/${id}`)
  }
  updateSetting(data: any) {
    return this.http.put(`${this.apiURL}/setting/${data.id}`, data)
  }
  deleteSetting(id: any) {
    return this.http.delete(`${this.apiURL}/setting/${id}`)
  }

  //user
  createUser(data: any) {
    return this.http.post(`${this.apiURL}/user`, data)
  }
  getUser() {
    return this.http.get(`${this.apiURL}/user`)
  }
  getSingleUser(id: any) {
    return this.http.get(`${this.apiURL}/user/${id}`)
  }
  updateUser(data: any) {
    return this.http.put(`${this.apiURL}/user/${data.id}`, data)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.apiURL}/user/${id}`)
  }

  //cart
  createCart(data: any) {
    return this.http.post(`${this.apiURL}/cart`, data)
  }
  getCart() {
    return this.http.get(`${this.apiURL}/cart`)
  }
  getSingleCart(id: any) {
    return this.http.get(`${this.apiURL}/cart/${id}`)
  }
  updateCart(data: any) {
    return this.http.put(`${this.apiURL}/cart/${data.id}`, data)
  }
  deleteCart(id: any) {
    return this.http.delete(`${this.apiURL}/cart/${id}`)
  }

  //wishlist
  createWishlist(data: any) {
    return this.http.post(`${this.apiURL}/wishlist`, data)
  }
  getWishlist() {
    return this.http.get(`${this.apiURL}/wishlist`)
  }
  getSingleWishlist(id: any) {
    return this.http.get(`${this.apiURL}/wishlist/${id}`)
  }
  updateWishlist(data: any) {
    return this.http.put(`${this.apiURL}/wishlist/${data.id}`, data)
  }
  deleteWishlist(id: any) {
    return this.http.delete(`${this.apiURL}/wishlist/${id}`)
  }

  //checkout
  createCheckout(data: any) {
    return this.http.post(`${this.apiURL}/checkout`, data)
  }
  getCheckout() {
    return this.http.get(`${this.apiURL}/checkout`)
  }
  getSingleCheckout(id: any) {
    return this.http.get(`${this.apiURL}/checkout/${id}`)
  }
  updateCheckout(data: any) {
    return this.http.put(`${this.apiURL}/checkout/${data.id}`, data)
  }
  deleteCheckout(id: any) {
    return this.http.delete(`${this.apiURL}/checkout/${id}`)
  }

  //newsletter
  createNewsletter(data: any) {
    return this.http.post(`${this.apiURL}/newsletter`, data)
  }
  getNewsletter() {
    return this.http.get(`${this.apiURL}/newsletter`)
  }
  getSingleNewsletter(id: any) {
    return this.http.get(`${this.apiURL}/newsletter/${id}`)
  }
  updateNewsletter(data: any) {
    return this.http.put(`${this.apiURL}/newsletter/${data.id}`, data)
  }
  deleteNewsletter(id: any) {
    return this.http.delete(`${this.apiURL}/newsletter/${id}`)
  }

  //contactus
  createContactUs(data: any) {
    return this.http.post(`${this.apiURL}/contactus`, data)
  }
  getContactUs() {
    return this.http.get(`${this.apiURL}/contactus`)
  }
  getSingleContactUs(id: any) {
    return this.http.get(`${this.apiURL}/contactus/${id}`)
  }
  updateContactUs(data: any) {
    return this.http.put(`${this.apiURL}/contactus/${data.id}`, data)
  }
  deleteContactUs(id: any) {
    return this.http.delete(`${this.apiURL}/contactus/${id}`)
  }

  //testimonial
  createTestimonial(data: any) {
    return this.http.post(`${this.apiURL}/testimonial`, data)
  }
  getTestimonial() {
    return this.http.get(`${this.apiURL}/testimonial`)
  }
  getSingleTestimonial(id: any) {
    return this.http.get(`${this.apiURL}/testimonial/${id}`)
  }
  updateTestimonial(data: any) {
    return this.http.put(`${this.apiURL}/testimonial/${data.id}`, data)
  }
  deleteTestimonial(id: any) {
    return this.http.delete(`${this.apiURL}/testimonial/${id}`)
  }
}
