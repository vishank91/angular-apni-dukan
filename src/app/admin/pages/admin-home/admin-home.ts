import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';

@Component({
  selector: 'app-admin-home',
  standalone: false,
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css',
})
export class AdminHome {
  data: any = {}

  constructor(private dataService: DataService, private storage: StorageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    let userid = this.storage.getStorage().userid
    if (userid) {
      this.dataService.getSingleUser(userid).subscribe((response: any) => {
        this.data = { ...response }
        this.cdr.detectChanges()
      })
    }
  }
}
