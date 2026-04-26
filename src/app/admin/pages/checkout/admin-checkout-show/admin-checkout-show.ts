import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-admin-checkout-show',
  standalone: false,
  templateUrl: './admin-checkout-show.html',
  styleUrl: './admin-checkout-show.css',
})
export class AdminCheckoutShow {
  data: any = {}
  imageServerUrl: any = environment.imageServerUrl
  orderStatus: any = ""
  paymentStatus: any = ""
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef, private activatedRoutes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.dataService.getSingleCheckout(params.id).subscribe((response: any) => {
        this.data = { ...response }
        this.orderStatus = response.orderStatus
        this.paymentStatus = response.paymentStatus
        this.cdr.detectChanges()
      })
    })
  }

  getInput(e: any) {
    let { name, value } = e.target
    if (name === "orderStatus")
      this.orderStatus = value
    else
      this.paymentStatus = value
  }

  updateRecord() {
    if (window && window.confirm("Are Your Sure to Change Status of That Record : ")) {
      this.data.orderStatus = this.orderStatus
      this.data.paymentStatus = this.paymentStatus
      this.dataService.updateCheckout({ ...this.data }).subscribe((response: any) => {
        this.cdr.detectChanges()
      })
    }
  }

}
