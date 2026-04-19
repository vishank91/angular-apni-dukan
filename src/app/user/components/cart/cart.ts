import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  data: any = []
  subtotal: number = 0
  shipping: number = 0
  total: number = 0
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService, private storage: StorageService, private cdr: ChangeDetectorRef) {

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
    this.dataService.getCart().subscribe((response: any) => {
      let cart = response.filter((x: any) => x.user === this.storage.getStorage().userid)
      this.data = cart
      this.calculate(cart)
    })
  }

  deleteRecord(id: any) {
    if (window && window.confirm("Are Your Sure to Delete That Record : ")) {
      this.dataService.deleteCart(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.calculate(this.data)
      })
    }
  }

  updateRecord(option: string, id: any) {
    let item = this.data.find((x: any) => x.id === id)
    let index = this.data.findIndex((x: any) => x.id === id)

    if ((option === "Dec" && item.qty === 1) || (option === "Inc" && item.qty === item.stockQuantity))
      return
    else if (option === "Dec") {
      item['qty'] = item['qty'] - 1
      item['total'] = item['total'] - item['price']
    }
    else {
      item['qty'] = item['qty'] + 1
      item['total'] = item['total'] + item['price']
    }
    this.dataService.updateCart(item).subscribe((response:any)=>{})
    
    this.data[index] = { ...item }
    this.calculate(this.data)
  }
}
