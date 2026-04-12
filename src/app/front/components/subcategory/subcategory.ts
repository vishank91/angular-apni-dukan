import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-subcategory',
  standalone: false,
  templateUrl: './subcategory.html',
  styleUrl: './subcategory.css',
})
export class Subcategory {
  data: any = []
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.data = response.filter((x: any) => x.status)
      this.cdr.detectChanges()
    })
  }
}
