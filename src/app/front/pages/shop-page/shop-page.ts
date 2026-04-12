import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-shop-page',
  standalone: false,
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.css',
})
export class ShopPage {
  imageServerUrl = environment.imageServerUrl
  maincategory: any = []
  subcategory: any = []
  brand: any = []
  product: any = []
  data: any = []

  filter: any = {
    maincategory: [],
    subcategory: [],
    brand: [],
    color: [],
    size: []
  }

  colors = ["White", "Black", "Blue", "Gray", "Green", "Red", "Yellow", "Pink", "Purple", "Magenta", "Orange", "N/A"]
  sizes = ["XXXL", "XXL", "XL", "L", "MD", "SM", "XS", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "N/A"]


  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response.filter((x: any) => x.status)
    })
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.subcategory = response.filter((x: any) => x.status)
    })
    this.dataService.getBrand().subscribe((response: any) => {
      this.brand = response.filter((x: any) => x.status)
    })
    this.dataService.getProduct().subscribe((response: any) => {
      this.data = this.product = response.filter((x: any) => x.status)
      this.cdr.detectChanges()
    })
  }

  getInputCheckbox(key: any, value: any) {
    let arr = this.filter[key]
    if (arr.includes(value))
      arr = arr.filter((x: any) => x !== value)
    else
      arr.push(value)

    this.filter = { ...this.filter, [key]: arr }

    this.data = this.product.filter((x: any) => x.status && (
      (this.filter.maincategory.length === 0 || this.filter.maincategory.includes(x.maincategory)) &&
      (this.filter.subcategory.length === 0 || this.filter.subcategory.includes(x.subcategory)) &&
      (this.filter.brand.length === 0 || this.filter.brand.includes(x.brand)) &&
      (this.filter.color.length === 0 || (new Set(this.filter.color)).intersection(new Set(x.color)).size > 0) &&
      (this.filter.size.length === 0 || (new Set(this.filter.size)).intersection(new Set(x.size)).size > 0)
    )
    )
  }

  sortFilter(event: any) {
    if (event.target.value === "1")
      this.data = this.data.sort(((x: any, y: any) => y.id.localeCompare(x.id)))
    else if (event.target.value === '2')
      this.data = this.data.sort(((x: any, y: any) => x.finalPrice - y.finalPrice))
    else
      this.data = this.data.sort(((x: any, y: any) => y.finalPrice - x.finalPrice))
  }
}
