import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  loginDetails: any = {}
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

  constructor(private dataService: DataService, private storage: StorageService, private router: Router) {
    let data: any = { ...this.settingData }
    this.dataService.getSetting().subscribe((response: any) => {
      Object.entries(response[0]).forEach(([key, value]) => {
        data[key] = value !== "" ? value : this.settingData[key]
      })
      this.settingData = data
    })

    this.loginDetails = { ...this.storage.getStorage() }
  }

  logout() {
    this.storage.destroyStorage()
    this.router.navigate(["/user/login"])
  }
}
