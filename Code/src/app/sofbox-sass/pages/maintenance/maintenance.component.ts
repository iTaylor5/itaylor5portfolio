import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {PluginsService} from '../../../sofbox/plugins.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MaintenanceComponent implements OnInit {

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
