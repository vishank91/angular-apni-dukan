import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { Router } from '@angular/router';

var win = (globalThis as any);


@Component({
  selector: 'app-admin-create-product',
  standalone: false,
  templateUrl: './admin-create-product.html',
  styleUrl: './admin-create-product.css',
})
export class AdminCreateProduct {
  rte: any;
  maincategory: any = []
  subcategory: any = []
  brand: any = []
  colors = ["White", "Black", "Blue", "Gray", "Green", "Red", "Yellow", "Pink", "Purple", "Magenta", "Orange", "N/A"]
  sizes = ["XXXL", "XXL", "XL", "L", "MD", "SM", "XS", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "N/A"]

  color: any = []
  size: any = []
  pic: any = []

  error = {
    name: "",
    pic: "",
    color: "Please Select Atleast One Color",
    size: "Plsease Select Atleast One Size",
    show: false
  }
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    maincategory: new FormControl(""),
    subcategory: new FormControl(""),
    brand: new FormControl(""),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    stock: new FormControl("1"),
    stockQuantity: new FormControl("", Validators.required),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router, private rootref: ElementRef) {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response.filter((x: any) => x.status)
    })
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.subcategory = response.filter((x: any) => x.status)
    })
    this.dataService.getBrand().subscribe((response: any) => {
      this.brand = response.filter((x: any) => x.status)
    })
    if (this.maincategory.length && this.subcategory.length && this.brand.length) {
      this.myForm.patchValue({
        maincategory: this.maincategory[0].name,
        subcategory: this.subcategory[0].name,
        brand: this.brand[0].name,
      })
    }
  }

  ngOnInit() {
    if (win) {
      var rtediv = this.rootref.nativeElement.querySelector(".rtediv");
      this.rte = new win.RichTextEditor(rtediv);
      this.rte.setHTMLCode("")
    }
  }


  get name(): any {
    return this.myForm.get("name")
  }
  get basePrice(): any {
    return this.myForm.get("basePrice")
  }
  get discount(): any {
    return this.myForm.get("discount")
  }
  get finalPrice(): any {
    return this.myForm.get("finalPrice")
  }
  get stockQuantity(): any {
    return this.myForm.get("stockQuantity")
  }


  getInputCheckbox(key: any, value: any) {
    let arr: any = key == "color" ? this.color : this.size
    if (arr.includes(value))
      arr = arr.filter(((x: any) => x !== value))
    else
      arr.push(value)

    key === "color" ? this.color = arr : this.size = arr
    this.error = { ...this.error, [key]: arr.length ? "" : `Please Select Aleast one ${key}` }
  }

  getInputFile(e: any) {
    let picError: any = []
    this.pic = []
    Array.from(e.target.files).forEach((file: any, index: any) => {
      if (!(file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/webp" || file.type === "image/gif"))
        picError.push(`Invalid Pic${index + 1} Format, Please Upload an Image of type .jpeg,.jpg,.png,.gif`)
      else if (file.size > 1048576)
        picError.push(`Pic${index + 1} is Too Heavy, Please Upload an Image Upto 1 MB`)
      else
        this.pic.push("product/" + file.name)
    })
    this.error = { ...this.error, pic: picError.length ? picError.join("|") : "" }
  }
  setErrorMessage() {
    this.error = { ...this.error, name: "" }
  }

  postData() {
    if (this.pic.length == 0)
      this.error = { ...this.error, pic: "Please Upload Atleast One Pic", show: true }
    else {
      let item = Object.values(this.error).find((x: any) => x !== "")
      if (item) {
        this.error = { ...this.error, show: true }
        return
      }
      this.error = {
        ...this.error, show: false
      }
      this.dataService.getProduct().subscribe((response: any) => {
        let item = response.find((x: any) => x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
        if (item) {
          this.error = { ...this.error, name: "Product With This Name is Already Exist", show: true }
        }
        else {
          let bp = Number(Number(this.myForm.value.basePrice).toFixed(0))
          let d = Number(Number(this.myForm.value.discount).toFixed(0))
          let stockQuantity = Number(Number(this.myForm.value.stockQuantity).toFixed(0))
          let fp = Number(Number(bp - bp * d / 100).toFixed(0))

          item = {
            name: this.myForm.value.name,
            maincategory: this.myForm.value.maincategory,
            subcategory: this.myForm.value.subcategory,
            brand: this.myForm.value.brand,
            color: this.color,
            size: this.size,
            basePrice: bp,
            discount: d,
            finalPrice: fp,
            stockQuantity: stockQuantity,
            description: this.rte.getHTMLCode(),
            pic: this.pic,
            status: this.myForm.value.status === "1" ? true : false,
            stock: this.myForm.value.stock === "1" ? true : false
          }
          this.dataService.createProduct(item).subscribe((response: any) => {
            this.router.navigate(['/admin/product'])
          })
        }
      })
    }
  }
}
