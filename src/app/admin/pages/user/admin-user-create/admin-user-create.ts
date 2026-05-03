import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data-service';

@Component({
  selector: 'app-admin-user-create',
  standalone: false,
  templateUrl: './admin-user-create.html',
  styleUrl: './admin-user-create.css',
})
export class AdminUserCreate {
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    role: new FormControl("Admin", Validators.required),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", Validators.required),
    status: new FormControl("1")
  })

  errorMessage: any = {
    username: "",
    email: "",
    password: "",
    show: false
  }

  get name() {
    return this.myForm.get("name")
  }

  get username() {
    return this.myForm.get("username")
  }

  get email() {
    return this.myForm.get("email")
  }

  get phone() {
    return this.myForm.get("phone")
  }

  get password() {
    return this.myForm.get("password")
  }

  get cpassword() {
    return this.myForm.get("cpassword")
  }

  constructor(private dataService: DataService, private router: Router, private cdr: ChangeDetectorRef) { }

  changeErrorMessage(key: any) {
    console.log(key)
    this.errorMessage = { ...this.errorMessage, [key]: '' }
  }

  postData() {
    if (this.myForm.value.password !== this.myForm.value.cpassword)
      this.errorMessage = { ...this.errorMessage, show: true, password: "Password and Confirm Password Doesn't Matched" }
    else {
      this.dataService.getUser().subscribe((response: any) => {
        let item = response.find((x: any) => x.username.toLowerCase() === this.myForm.value.username?.toLowerCase() || x.email.toLowerCase() === this.myForm.value.email?.toLowerCase())
        if (item) {
          this.errorMessage = {
            ...this.errorMessage,
            username: item.username.toLowerCase() === this.myForm.value.username?.toLowerCase() ? "Username Already Taken" : "",
            email: item.email.toLowerCase() === this.myForm.value.email?.toLowerCase() ? "Email Address is Already Taken" : "",
            show: true
          }
          this.cdr.detectChanges()
        }
        else {
          this.errorMessage = {
            username: "",
            email: "",
            password: "",
            show: false
          }
          this.cdr.detectChanges()
          let data = {
            name: this.myForm.value.name,
            username: this.myForm.value.username,
            email: this.myForm.value.email,
            phone: this.myForm.value.phone,
            password: this.myForm.value.password,
            role: "Buyer",
            status: true
          }
          this.dataService.createUser(data).subscribe((response: any) => {
            this.router.navigate(["/admin/user"])
          })
        }
      })
    }
  }
}
