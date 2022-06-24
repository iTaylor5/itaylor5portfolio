import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../../sofbox/plugins.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('main-bg');
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(() => {
      current.plugins.index();
    }, 200);
  }

}
