import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-contact-us-show',
  standalone: false,
  templateUrl: './admin-contact-us-show.html',
  styleUrl: './admin-contact-us-show.css',
})
export class AdminContactUsShow {
  data: any = {}
  flag: boolean = false
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private activatedRoutes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.dataService.getSingleContactUs(params.id).subscribe((response: any) => {
        this.data = { ...response }
        this.cdr.detectChanges()
      })
    })
  }


  deleteRecord() {
    if (window && window.confirm("Are Your Sure to Delete That Record : ")) {
      this.dataService.deleteContactUs(this.data.id).subscribe((response) => {
        this.router.navigate(['/admin/contactus'])
      })
    }
  }

  updateRecord() {
    if (window && window.confirm("Are Your Sure to Change Status of That Record : ")) {
      this.data.status = !this.data.status
      this.dataService.updateContactUs({ ...this.data }).subscribe((response: any) => {
        this.cdr.detectChanges()
        this.flag = !this.flag
      })
    }
  }

}
