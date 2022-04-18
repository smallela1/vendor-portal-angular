import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-ad-block',
  templateUrl: './ad-block.component.html',
  styleUrls: ['./ad-block.component.scss']
})
export class AdBlockComponent  {

onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
