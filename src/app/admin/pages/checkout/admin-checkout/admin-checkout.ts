import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
declare var $: any

@Component({
  selector: 'app-admin-checkout',
  standalone: false,
  templateUrl: './admin-checkout.html',
  styleUrl: './admin-checkout.css',
})
export class AdminCheckout implements AfterViewInit {
  dataTable: any
  time: any
  data: any = []
  flag: boolean = true
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getCheckout().subscribe((response: any) => {
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
}
