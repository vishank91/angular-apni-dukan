import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data-service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  imageServerUrl = environment.imageServerUrl
  id: string = ""
  data: any = {}
  relatedproducts = []
  description: any = ""

  selected: any = {
    qty: 1,
    color: '',
    size: ''
  }
  constructor(private activatedRoutes: ActivatedRoute, private dataService: DataService, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activatedRoutes.queryParams.subscribe(((response: any) => {
      this.id = response.id

      this.dataService.getProduct().subscribe((response: any) => {
        this.data = response.find((x: any) => x.id === this.id)
        this.selected = { ...this.selected, color: this.data.color[0], size: this.data.size[0] }
        this.description = this.sanitizer.bypassSecurityTrustHtml(this.data.description)
        this.relatedproducts = response.filter(((x: any) => x.status && x.maincategory === this.data.maincategory)).slice(0, 12)

        this.cdr.detectChanges()
      })
    }))
  }

  changeSelected(key: any, value: any) {
    console.log(key, value)
    this.selected = { ...this.selected, [key]: value }
  }

  updateQuantity(option: any) {
    if (option === "inc" && this.selected.qty < this.data.stockQuantity)
      this.selected = { ...this.selected, qty: this.selected.qty + 1 }
    else if (option === "dec" && this.selected.qty > 1)
      this.selected = { ...this.selected, qty: this.selected.qty - 1 }
  }
}
