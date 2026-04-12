import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.html',
  styleUrl: './update-profile.css',
})
export class UpdateProfile {
  data: any = {}
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
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

  constructor(private dataService: DataService, private storage: StorageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    let userid = this.storage.getStorage().userid
    if (userid) {
      this.dataService.getSingleUser(userid).subscribe((response: any) => {
        this.data = { ...response }
        this.myForm.patchValue({
          name: response.name,
          username: response.username,
          email: response.email,
          phone: response.phone
        })
        this.cdr.detectChanges()
      })
    }
  }

  postData() {
    this.dataService.getUser().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.data.id && (x.username.toLowerCase() === this.myForm.value.username?.toLowerCase() || x.email.toLowerCase() === this.myForm.value.email?.toLowerCase()))
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
          show: false
        }
        this.cdr.detectChanges()
        let item = {
          ...this.data,
          name: this.myForm.value.name,
          username: this.myForm.value.username,
          email: this.myForm.value.email,
          phone: this.myForm.value.phone
        }
        this.dataService.updateUser(item).subscribe((response: any) => {
          alert("Record Has Been Updated SuccessFully")
        })
      }
    })
  }
}
