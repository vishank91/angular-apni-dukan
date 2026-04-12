import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { StorageService } from '../../../services/storage-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
  data: any = {}
  showModal: boolean = false
  option: string = "Create"

  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    pin: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required)
  })
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

  createRecord() {
    this.showModal = true
    this.option = "Create"

    this.myForm.patchValue({
      name: '',
      email: '',
      phone: '',
      address: '',
      pin: '',
      city: '',
      state: '',
    })
  }

  setShowModal() {
    this.showModal = false
  }

  postData() {
    let item = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      address: this.myForm.value.address,
      pin: this.myForm.value.pin,
      city: this.myForm.value.city,
      state: this.myForm.value.state
    }
    if (this.option === "Create") {
      this.data = { ...this.data, address: this.data.address ? [...this.data.address, item] : [item] }
    }
    this.dataService.updateUser(this.data).subscribe((response: any) => {

    })
    this.showModal = false
  }
}
