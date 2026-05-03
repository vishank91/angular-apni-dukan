import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../services/data-service';


@Component({
  selector: 'app-admin-user-update',
  standalone: false,
  templateUrl: './admin-user-update.html',
  styleUrl: './admin-user-update.css',
})
export class AdminUserUpdate {
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    role: new FormControl("Admin", Validators.required),
    status: new FormControl("1")
  })
  user: any = {}

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

  constructor(private dataService: DataService, private router: Router, private cdr: ChangeDetectorRef, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.dataService.getSingleUser(params.id).subscribe((response: any) => {
        this.user = response
        this.myForm.patchValue({
          name: response.name,
          username: response.username,
          email: response.email,
          phone: response.phone,
          role: response.role,
          status: response.status ? "1" : "0",
        })
      })
    })
  }

  changeErrorMessage(key: any) {
    console.log(key)
    this.errorMessage = { ...this.errorMessage, [key]: '' }
  }

  postData() {
    this.dataService.getUser().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.user.id && (x.username.toLowerCase() === this.myForm.value.username?.toLowerCase() || x.email.toLowerCase() === this.myForm.value.email?.toLowerCase()))
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
        let item = {
          name: this.myForm.value.name,
          username: this.myForm.value.username,
          email: this.myForm.value.email,
          phone: this.myForm.value.phone,
          role: this.myForm.value.role,
          status: true
        }
        this.dataService.updateUser({ ...this.user, ...item }).subscribe((response: any) => {
          this.router.navigate(["/admin/user"])
        })
      }
    })
  }
}
