import { Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  siteName = environment.siteName

  constructor(private dataService: DataService) {
    this.dataService.getSetting().subscribe((response: any) => {
      if (response.length && response[0].siteName)
        this.siteName = response[0].siteName
    })
  }
}
