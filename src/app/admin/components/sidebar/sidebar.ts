import { Component } from '@angular/core';
import { StorageService } from '../../../services/storage-service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  role: any = "Admin"

  constructor(private storageService: StorageService) {
    this.role = this.storageService.getStorage().role
  }
}
