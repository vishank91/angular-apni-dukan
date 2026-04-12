import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-update-feature',
  standalone: false,
  templateUrl: './admin-update-feature.html',
  styleUrl: './admin-update-feature.css',
})
export class AdminUpdateFeature {
  id = ""
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    icon: new FormControl(""),
    shortDescription: new FormControl(""),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id
        this.dataService.getSingleFeature(this.id).subscribe((response: any) => {
          this.myForm.patchValue({
            name: response.name,
            icon: response.icon,
            shortDescription: response.shortDescription,
            status: response.status ? "1" : "0"
          })
        })
      }
    })
  }

  get name(): any {
    return this.myForm.get("name")
  }
  get icon(): any {
    return this.myForm.get("icon")
  }
  get shortDescription(): any {
    return this.myForm.get("shortDescription")
  }
  picError = ""
  nameError = ""

  setErrorMessage() {
    this.nameError = ""
  }

  postData() {
    this.dataService.getFeature().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.id && x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
      if (item)
        this.nameError = "Feature With This Name is Already Exist"
      else {
        item = {
          id: this.id,
          name: this.myForm.value.name,
          icon: this.myForm.value.icon,
          shortDescription: this.myForm.value.shortDescription,
          status: this.myForm.value.status === "1" ? true : false
        }
        this.dataService.updateFeature(item).subscribe((response: any) => {
          this.router.navigate(['/admin/features'])
        })
      }
    })
  }
}
