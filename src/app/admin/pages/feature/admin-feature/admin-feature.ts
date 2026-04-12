import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any

@Component({
  selector: 'app-admin-feature',
  standalone: false,
  templateUrl: './admin-feature.html',
  styleUrl: './admin-feature.css',
})
export class AdminFeature implements AfterViewInit {
  dataTable: any
  time: any

  data: any = []
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataService.getFeature().subscribe((response: any) => {
      this.data = response.map((x: any) => ({
        ...x,
        icon: this.sanitizer.bypassSecurityTrustHtml(x.icon)
      }))
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
      this.dataService.deleteFeature(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }
}

