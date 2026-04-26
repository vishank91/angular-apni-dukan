import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
declare var $: any

@Component({
  selector: 'app-admin-contact-us',
  standalone: false,
  templateUrl: './admin-contact-us.html',
  styleUrl: './admin-contact-us.css',
})
export class AdminContactUs implements AfterViewInit {
  dataTable: any
  time: any
  data: any = []
  flag: boolean = true
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getContactUs().subscribe((response: any) => {
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
      this.dataService.deleteContactUs(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }

  updateRecord(id: any) {
    if (window && window.confirm("Are Your Sure to Change Status of That Record : ")) {
      let item = this.data.find((x: any) => x.id === id)
      let index = this.data.findIndex((x: any) => x.id === id)
      this.dataService.updateContactUs({ ...item, status: !item.status }).subscribe((response: any) => {
        this.data[index] = { ...item, status: !item.status }
        this.flag = !this.flag
        this.cdr.detectChanges()
      })
    }
  }
}
