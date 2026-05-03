import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { StorageService } from '../../../../services/storage-service';

declare var $: any
@Component({
  selector: 'app-admin-faq',
  standalone: false,
  templateUrl: './admin-faq.html',
  styleUrl: './admin-faq.css',
})
export class AdminFaq implements AfterViewInit {
  dataTable: any
  time: any
  role: any = "Admin"

  data: any = []
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private storage: StorageService) { }

  ngOnInit() {
    this.dataService.getFaq().subscribe((response: any) => {
      this.data = [...response]
      this.cdr.detectChanges()
    })
  }

  ngAfterViewInit() {
    this.role = this.storage.getStorage().role
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
      this.dataService.deleteFaq(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }
}
