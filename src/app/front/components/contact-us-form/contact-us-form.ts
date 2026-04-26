import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'app-contact-us-form',
  standalone: false,
  templateUrl: './contact-us-form.html',
  styleUrl: './contact-us-form.css',
})
export class ContactUsForm {
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  })

  successMessage: any = ""

  get name() {
    return this.myForm.get("name")
  }
  get email() {
    return this.myForm.get("email")
  }
  get phone() {
    return this.myForm.get("phone")
  }
  get subject() {
    return this.myForm.get("subject")
  }
  get message() {
    return this.myForm.get("message")
  }

  constructor(private dataServce: DataService) {

  }

  postData() {
    let item = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      subject: this.myForm.value.subject,
      message: this.myForm.value.message,
      status: true,
      date: new Date()
    }
    this.dataServce.createContactUs(item).subscribe((response: any) => {
      this.successMessage = 'Thanks To Contact Us, Our Team Will Contact You Soon'

      this.myForm.reset()
    })
  }
}
