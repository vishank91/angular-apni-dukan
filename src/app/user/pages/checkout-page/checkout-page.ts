import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: false,
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  selected: any = {
    deliveryAddress: {},
    paymentMode: "COD"
  }
  user: any = {}
  data: any = []
  subtotal: number = 0
  shipping: number = 0
  total: number = 0
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService, private storage: StorageService, private cdr: ChangeDetectorRef, private router: Router) {

  }

  calculate(cart: any) {
    let subtotal = 0
    cart.forEach((x: any) => subtotal += x.total)
    if (subtotal < 1000 && subtotal > 0) {
      this.shipping = 150
      this.total = subtotal + 150
    }
    else {
      this.shipping = 0
      this.total = subtotal
    }
    this.subtotal = subtotal
    this.cdr.detectChanges()
  }
  ngOnInit() {
    this.dataService.getSingleUser(this.storage.getStorage().userid).subscribe((response: any) => {
      this.user = { ...response }
      this.selected = { ...this.selected, deliveryAddress: this.user.address[0] }
      this.cdr.detectChanges()
    })
    this.dataService.getCart().subscribe((response: any) => {
      let cart = response.filter((x: any) => x.user === this.storage.getStorage().userid)
      this.data = cart
      this.calculate(cart)
    })
  }

  updateSelected(key: any, value: any) {
    this.selected = { ...this.selected, [key]: value }
  }


  placeOrder() {
    let item = {
      user: this.user.id,
      deliveryAddress: this.selected.deliveryAddress,
      paymentMode: this.selected.paymentMode,
      paymentStatus: "Pending",
      orderStatus: "Order Has Been Placed",
      subtotal: this.subtotal,
      shipping: this.shipping,
      total: this.total,
      date: new Date(),
      products: this.data
    }
    this.dataService.createCheckout(item).subscribe((response: any) => {
      this.data.forEach((cart: any) => {
        this.dataService.getSingleProduct(cart.product).subscribe((response: any) => {
          let product = response
          product.stockQuantity -= cart.qty
          product.stock = product.stockQuantity === 0 ? false : true
          this.dataService.updateProduct(product).subscribe((response: any) => { })

          this.dataService.deleteCart(cart.id).subscribe((response: any) => { })
        })
      })
      this.router.navigate(['/user/order-confirmation'])
    })
  }
}
