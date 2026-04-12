import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { environment } from '../../../../../environments/environment';

declare var $: any
@Component({
  selector: 'app-admin-brand',
  standalone: false,
  templateUrl: './admin-brand.html',
  styleUrl: './admin-brand.css',
})
export class AdminBrand implements AfterViewInit {
  dataTable: any
  time: any

  imageServerUrl = environment.imageServerUrl
  data: any = []
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getBrand().subscribe((response: any) => {
      this.data = [...response]
      this.cdr.detectChanges()
    })
  }

  ngAfterViewInit() {
    this.time = setTimeout(() => {
      if (!$.fn.DataTable.isDataTable("#dataTable")) {
        this.dataTable = $('#dataTable').DataTable()
      }
    }, 500)
  }

  ngOnDestroy() {
    clearTimeout(this.time)
  }

  deleteRecord(id: any) {
    if (window && window.confirm("Are Your Sure to Delete That Record : ")) {
      this.dataService.deleteBrand(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }
}

