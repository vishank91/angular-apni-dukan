import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-create-brand',
  standalone: false,
  templateUrl: './admin-create-brand.html',
  styleUrl: './admin-create-brand.css',
})
export class AdminCreateBrand {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    pic: new FormControl(""),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router) { }

  get name(): any {
    return this.myForm.get("name")
  }

  picError = ""
  nameError = ""

  getInputFile(e: any) {
    this.picError = ""
    let file = e.target.files[0]
    if (!(file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/webp" || file.type === "image/gif"))
      this.picError = "Invalid Pic Format, Please Upload an Image of type .jpeg,.jpg,.png,.gif"
    else if (file.size > 1048576)
      this.picError = "Pic is Too Heavy, Please Upload an Image Upto 1 MB"
    else
      this.myForm.patchValue({ pic: `brand/${file.name}` })
  }
  setErrorMessage() {
    this.nameError = ""
  }

  postData() {
    if (this.myForm.value.pic === "")
      this.picError = "Please Upload a Pic"
    else {
      this.dataService.getBrand().subscribe((response: any) => {
        let item = response.find((x: any) => x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
        if (item)
          this.nameError = "Brand With This Name is Already Exist"
        else {
          item = {
            name: this.myForm.value.name,
            pic: this.myForm.value.pic,
            status: this.myForm.value.status === "1" ? true : false
          }
          this.dataService.createBrand(item).subscribe((response: any) => {
            this.router.navigate(['/admin/brand'])
          })
        }
      })
    }
  }
}
