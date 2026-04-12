import { Component } from '@angular/core';
import { DataService } from '../../../../services/data-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-setting',
  standalone: false,
  templateUrl: './admin-setting.html',
  styleUrl: './admin-setting.css',
})
export class AdminSetting {
  myForm = new FormGroup({
    siteName: new FormControl(""),
    address: new FormControl(""),
    map1: new FormControl(""),
    map2: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    whatsapp: new FormControl(""),
    facebook: new FormControl(""),
    twitter: new FormControl(""),
    instagram: new FormControl(""),
    linkedin: new FormControl(""),
    youtube: new FormControl("")
  })
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getSetting().subscribe((response: any) => {
      if (response.length) {
        let data = response[0]
        this.myForm.patchValue({
          siteName: data.siteName ? data.siteName : "",
          address: data.address ? data.address : "",
          map1: data.map1 ? data.map1 : "",
          map2: data.map2 ? data.map2 : "",
          email: data.email ? data.email : "",
          phone: data.phone ? data.phone : "",
          whatsapp: data.whatsapp ? data.whatsapp : "",
          facebook: data.facebook ? data.facebook : "",
          twitter: data.twitter ? data.twitter : "",
          linkedin: data.linkedin ? data.linkedin : "",
          youtube: data.youtube ? data.youtube : "",
          instagram: data.instagram ? data.instagram : "",
        })
      }
    })
  }

  postData() {
    let data: any = {
      siteName: this.myForm.value.siteName,
      address: this.myForm.value.address,
      map1: this.myForm.value.map1,
      map2: this.myForm.value.map2,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      whatsapp: this.myForm.value.whatsapp,
      facebook: this.myForm.value.facebook,
      twitter: this.myForm.value.twitter,
      instagram: this.myForm.value.instagram,
      linkedin: this.myForm.value.linkedin,
      youtube: this.myForm.value.youtube,
    }

    this.dataService.getSetting().subscribe((response: any) => {
      if (response.length) {
        this.dataService.updateSetting({ ...data, id: response[0].id }).subscribe((response) => {
          alert("Record Has Been Updated")
        })
      }
      else
        this.dataService.createSetting(data).subscribe((response) => {
          alert("Record Has Been Created")
        })
    })
  }
}