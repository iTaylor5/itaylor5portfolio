import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import logoImg from '../../../../assets/sofbox-sass-black/images/logo-black.png';
import {PluginsService} from '../../../sofbox/plugins.service';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ComingSoonComponent implements OnInit {

  constructor(private plugins: PluginsService) { }
  public navLogo: string = logoImg;


  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }


}
