import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

var win = (globalThis as any);

@Component({
  selector: 'app-admin-update-product',
  standalone: false,
  templateUrl: './admin-update-product.html',
  styleUrl: './admin-update-product.css',
})
export class AdminUpdateProduct {
  imageServerUrl = environment.imageServerUrl
  id: any = ""
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
    color: "",
    size: "",
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

  constructor(private dataService: DataService, private router: Router, private rootref: ElementRef, private activatedRoutes: ActivatedRoute) {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response.filter((x: any) => x.status)
    })
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.subcategory = response.filter((x: any) => x.status)
    })
    this.dataService.getBrand().subscribe((response: any) => {
      this.brand = response.filter((x: any) => x.status)
    })
  }

  ngOnInit() {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id

      this.dataService.getSingleProduct(this.id).subscribe((response: any) => {
        console.log(response)
        this.myForm.patchValue({
          name: response.name,
          maincategory: response.maincategory,
          subcategory: response.subcategory,
          brand: response.brand,
          basePrice: response.basePrice,
          discount: response.discount,
          stock: response.stock ? "1" : "0",
          stockQuantity: response.stockQuantity,
          status: response.status ? "1" : "0",
        })
        this.color = response.color
        this.size = response.size
        this.pic = response.pic
        if (win) {
          var rtediv = this.rootref.nativeElement.querySelector(".rtediv");
          this.rte = new win.RichTextEditor(rtediv);
          this.rte.setHTMLCode(response.description)
        }
      })
    })
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

  deletePic(index: any) {
    if (this.pic.length > 1)
      this.pic.splice(index, 1)
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
        let item = response.find((x: any) => x.id !== this.id && x.name.toLowerCase() === this.myForm.value.name?.toLowerCase())
        if (item) {
          this.error = { ...this.error, name: "Product With This Name is Already Exist", show: true }
        }
        else {
          let bp = Number(Number(this.myForm.value.basePrice).toFixed(0))
          let d = Number(Number(this.myForm.value.discount).toFixed(0))
          let stockQuantity = Number(Number(this.myForm.value.stockQuantity).toFixed(0))
          let fp = Number(Number(bp - bp * d / 100).toFixed(0))

          item = {
            id: this.id,
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
          this.dataService.updateProduct(item).subscribe((response: any) => {
            this.router.navigate(['/admin/product'])
          })
        }
      })
    }
  }
}
