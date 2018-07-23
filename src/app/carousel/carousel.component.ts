import { Component, OnInit } from '@angular/core';
import { PHOTOS } from './Photo';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        display: 'none',
        opacity: '0',
      })),
      state('active', style({
         display: 'visible',
         opacity: '1',
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class CarouselComponent implements OnInit {
  public photos = PHOTOS;
  public startIndex = 1;
  constructor() {
  }

  ngOnInit() {
  }
  public choose(photo) {
    this.photos.filter(item => item.id !== photo.id)
                .map(item => item.state = 'inactive');
    setTimeout(() => photo.state = 'active', 1000);
    this.startIndex = photo.id;
  }

  public next() {
    this.photos[this.startIndex - 1].state = 'inactive';
    this.startIndex += 1;
    if (this.startIndex > this.photos.length) {
      this.startIndex = 1;
    }
    setTimeout(() => this.photos[this.startIndex - 1].state = 'active', 1000);
  }
  public previous () {
    this.photos[this.startIndex - 1].state = 'inactive';
    if (this.startIndex > 1) {
      this.startIndex -= 1;
    } else {
      this.startIndex = this.photos.length;
    }
    setTimeout(() => this.photos[this.startIndex - 1].state = 'active', 1000);
  }
}

