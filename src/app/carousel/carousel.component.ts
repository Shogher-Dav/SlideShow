import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../core/interfaces/IPhoto';
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
       //  transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class CarouselComponent implements OnInit {
  public photos: IPhoto[] = [
    {id: 1, title: 'hello', url: '../../assets/img/1.jpg', state: 'active'},
    {id: 2, title: 'hello', url: '../../assets/img/2.jpg', state: 'inactive'},
    {id: 3, title: 'hello', url: '../../assets/img/3.jpg', state: 'inactive'},
    {id: 4, title: 'hello', url: '../../assets/img/4.jpg', state: 'inactive'},
    {id: 5, title: 'hello', url: '../../assets/img/5.jpg', state: 'inactive'},
    {id: 6, title: 'hello', url: '../../assets/img/6.jpg', state: 'inactive'},
  ];
  public startIndex = 1;


  constructor() {
  }

  ngOnInit() {
  }

  public previous(photo) {
    photo.state = 'inactive';
    if (photo.id > 1) {
      this.startIndex -= 1;
    } else {
      this.startIndex = this.photos.length - 1;
    }
    setTimeout(() => this.photos[this.startIndex].state = 'active', 1000);
  }

  public next(photo) {
    photo.state = 'inactive';
    if (photo.id < this.photos.length) {
      this.startIndex = photo.id;
    } else {
      this.startIndex = 0;
    }
    setTimeout(() => this.photos[this.startIndex].state = 'active', 1000);
  }
}

