import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  data: any = []

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.dataService.getFeature().subscribe((response: any) => {
      this.data = response.map((x: any) => ({
        ...x,
        icon: this.sanitizer.bypassSecurityTrustHtml(x.icon)
      }))
      this.cdr.detectChanges()
    })
  }
}
