import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DataService } from '../../../services/data-service';


declare var Swiper: any; // CDN global
@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiperRoot') swiperRoot!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dataService: DataService) { }

  data: any = []
  maincategory: any = []

  ngOnInit() {
    this.dataService.getProduct().subscribe((response: any) => {
      this.data = response.filter((x: any) => x.status)
      this.dataService.getMaincategory().subscribe((response: any) => {
        this.maincategory = response.filter((x: any) => x.status && this.data.filter((p: any) => p.maincategory === x.name).length).slice(0, 4)
      })
    })
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper(this.swiperRoot.nativeElement, {
        effect: 'creative',

        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        },

        loop: true,
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }

  filter(maincategory: any) {
    return this.data.filter((x:any) => x.status && x.maincategory === maincategory).slice(0,12)
  }
}
