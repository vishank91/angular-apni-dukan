import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
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
