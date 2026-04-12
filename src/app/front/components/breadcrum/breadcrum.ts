import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  standalone: false,
  templateUrl: './breadcrum.html',
  styleUrl: './breadcrum.css',
})
export class Breadcrum {
  @Input() title:string = ""
}
