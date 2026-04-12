import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data-service';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage-service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", Validators.required)
  })

  errorMessage: any = {
    username: "",
    show: false
  }

  get username() {
    return this.myForm.get("username")
  }

  get password() {
    return this.myForm.get("password")
  }

  constructor(private dataService: DataService, private router: Router, private storage: StorageService) { }

  postData() {
    this.dataService.getUser().subscribe((response: any) => {
      let item = response.find((x: any) => x.username.toLowerCase() === this.myForm.value.username?.toLowerCase() || x.email.toLowerCase() === this.myForm.value.username?.toLowerCase())
      if (item && item.password === this.myForm.value.password) {
        this.storage.setStorage({
          login: true,
          name: item.name,
          username: item.username,
          userid: item.id,
          role: item.role
        })
        if (item.role !== "Buyer")
          this.router.navigate(['/admin'])
        else
          this.router.navigate(['/user'])
      }
      else {
        this.errorMessage = {
          username: "Invalid Username or Password",
          show: true
        }
      }
    })
  }
}
