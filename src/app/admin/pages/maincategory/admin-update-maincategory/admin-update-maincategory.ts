import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-update-maincategory',
  standalone: false,
  templateUrl: './admin-update-maincategory.html',
  styleUrl: './admin-update-maincategory.css',
})
export class AdminUpdateMaincategory {
  id = ""
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    pic: new FormControl(""),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id
        this.dataService.getSingleMaincategory(this.id).subscribe((response: any) => {
          this.myForm.patchValue({
            name: response.name,
            pic: response.pic,
            status: response.status ? "1" : "0"
          })
        })
      }
    })
  }

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
      this.myForm.patchValue({ pic: `maincategory/${file.name}` })
  }
  setErrorMessage() {
    this.nameError = ""
  }

  postData() {
    this.dataService.getMaincategory().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.id && x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
      if (item)
        this.nameError = "Maincategory With This Name is Already Exist"
      else {
        item = {
          id: this.id,
          name: this.myForm.value.name,
          pic: this.myForm.value.pic,
          status: this.myForm.value.status === "1" ? true : false
        }
        this.dataService.updateMaincategory(item).subscribe((response: any) => {
          this.router.navigate(['/admin/maincategory'])
        })
      }
    })
  }
}
