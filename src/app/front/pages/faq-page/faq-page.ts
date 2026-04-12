import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
@Component({
  selector: 'app-faq-page',
  standalone: false,
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.css',
})
export class FaqPage {
  data: any = []
  x = 0
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.dataService.getFaq().subscribe((response: any) => {
      this.data = response
      this.cdr.detectChanges()
    })
  }

  changeIndex(index:any){
    this.x = index
  }
}
