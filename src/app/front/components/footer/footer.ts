import { ChangeDetectorRef, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../services/data-service';
@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  settingData: any = {
    address: environment.address,
    map1: environment.map1,
    email: environment.email,
    phone: environment.phone,
    whatsapp: environment.whatsapp,
    facebook: environment.facebook,
    twitter: environment.twitter,
    linkedin: environment.linkedin,
    youtube: environment.youtube,
    instagram: environment.instagram,
    logoTop: environment.logoTop,
    logoBottom: environment.logoBottom
  }

  email: any = ""
  message: any = ""

  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
    let data: any = { ...this.settingData }
    this.dataService.getSetting().subscribe((response: any) => {
      Object.entries(response[0]).forEach(([key, value]) => {
        data[key] = value !== "" ? value : this.settingData[key]
      })
      this.settingData = data
    })
  }

  date = new Date()

  getInputData(e: any) {
    this.email = e.target.value
  }
  postData(event:any) {
    event.preventDefault()
    if (this.email === "")
      this.message = "Please Enter a Valid Email Address"
    else {
      this.dataService.getNewsletter().subscribe((respone: any) => {
        let item = respone.find((x: any) => x.email === this.email)
        if (item)
          this.message = "This Email Address is Already Registered With Us"
        else {
          this.dataService.createNewsletter({ email: this.email, status: true }).subscribe((respone: any) => {
            this.message = "Thanks To Subscribe Our Newsletter Service"
            this.cdr.detectChanges()
          })
        }
      })
    }
  }
}
