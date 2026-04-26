import { ChangeDetectorRef, Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'app-contact-us-page',
  standalone: false,
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css',
})
export class ContactUsPage {
  settingData: any = {
    address: environment.address,
    map1: environment.map1,
    map2: environment.map2,
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

  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
    let data: any = { ...this.settingData }
    this.dataService.getSetting().subscribe((response: any) => {
      Object.entries(response[0]).forEach(([key, value]) => {
        data[key] = value !== "" ? value : this.settingData[key]
      })
      this.settingData = data
    })
    // this.cdr.detectChanges()
  }
}
