import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  data: any = []
  allData: any = []
  maincategory: any = []
  selected = ""
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {

  }

  ngOnInit() {
    this.dataService.getProduct().subscribe((response: any) => {
      this.allData = response.filter((x: any) => x.status)
      this.data = this.allData.slice(0, 24)

      this.dataService.getMaincategory().subscribe((response: any) => {
        this.maincategory = response.filter((x: any) => x.status && this.allData.filter((p: any) => p.maincategory === x.name).length).slice(0, 4)
      })

      this.cdr.detectChanges()
    })
  }

  changeSelected(item: any) {
    this.data = this.allData.filter((x: any) => x.status && (item === "All" || x.maincategory === item)).slice(0, 24)
  }
}
