import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  imageServerUrl = environment.imageServerUrl
  orders: any = []

  constructor(private dataService: DataService, private storage: StorageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getCheckout().subscribe((response: any) => {
      this.orders = response.filter((x: any) => x.user === this.storage.getStorage().userid)
      this.cdr.detectChanges()
    })
  }
}
