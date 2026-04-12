import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-slider',
  standalone: false,
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.css',
})
export class ProductSlider {
  @Input() title:any
  @Input() data:any

  imageServerUrl = environment.imageServerUrl
}
