import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-create-feature',
  standalone: false,
  templateUrl: './admin-create-feature.html',
  styleUrl: './admin-create-feature.css',
})
export class AdminCreateFeature {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    icon: new FormControl(""),
    shortDescription: new FormControl(""),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router) { }

  get name(): any {
    return this.myForm.get("name")
  }
  get icon(): any {
    return this.myForm.get("icon")
  }

  get shortDescription(): any {
    return this.myForm.get("shortDescription")
  }

  nameError = ""

  setErrorMessage() {
    this.nameError = ""
  }

  postData() {
    this.dataService.getFeature().subscribe((response: any) => {
      let item = response.find((x: any) => x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
      if (item)
        this.nameError = "Feature With This Name is Already Exist"
      else {
        item = {
          name: this.myForm.value.name,
          icon: this.myForm.value.icon,
          shortDescription: this.myForm.value.shortDescription,
          status: this.myForm.value.status === "1" ? true : false
        }
        this.dataService.createFeature(item).subscribe((response: any) => {
          this.router.navigate(['/admin/features'])
        })
      }
    })
  }
}
