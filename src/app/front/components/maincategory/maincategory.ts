import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-maincategory',
  standalone: false,
  templateUrl: './maincategory.html',
  styleUrl: './maincategory.css',
})
export class Maincategory {
  data: any = []
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.data = response.filter((x: any) => x.status)
      this.cdr.detectChanges()
    })
  }
}
