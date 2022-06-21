import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public images: any = [
    {
      src: './assets/sofbox-sass-black/images/partners/01.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/01.png',
      title: 'Sofboost'
    },
    {
      src: './assets/sofbox-sass-black/images/partners/02.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/02.png',
      title: 'Sofpress'
    },
    {
      src: './assets/sofbox-sass-black/images/partners/03.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/03.png',
      title: 'Sof Plus' },
    {
      src: './assets/sofbox-sass-black/images/partners/04.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/04.png',
      title: 'sofchemp' },
    {
      src: './assets/sofbox-sass-black/images/partners/05.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/05.png',
      title: 'Sof Pro' },
    {
      src: './assets/sofbox-sass-black/images/partners/02.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/02.png',
      title: 'Sofpress' },
    {
      src: './assets/sofbox-sass-black/images/partners/03.png',
      hover: './assets/sofbox-sass-black/images/partners/hover/03.png',
      title: 'Sof Plus'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
