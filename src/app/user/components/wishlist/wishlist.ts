import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  data: any = []
  imageServerUrl = environment.imageServerUrl
  constructor(private dataService: DataService, private storage: StorageService,private cdr:ChangeDetectorRef) {

  }

  ngOnInit() {
    this.dataService.getWishlist().subscribe((response: any) => {
      this.data = response.filter((x: any) => x.user === this.storage.getStorage().userid)
      this.cdr.detectChanges()
    })
  }

  deleteRecord(id: any) {
    if (window && window.confirm("Are Your Sure to Delete That Record : ")) {
      this.dataService.deleteWishlist(id).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }
}
