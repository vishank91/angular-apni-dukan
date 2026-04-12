import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-brand',
  standalone: false,
  templateUrl: './brand.html',
  styleUrl: './brand.css',
})
export class Brand {
  data: any = []
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
    this.dataService.getBrand().subscribe((response: any) => {
      this.data = response.filter((x: any) => x.status)
      this.cdr.detectChanges()
    })
  }
}
