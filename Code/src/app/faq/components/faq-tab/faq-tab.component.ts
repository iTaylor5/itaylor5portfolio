import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-tab',
  templateUrl: './faq-tab.component.html',
  styleUrls: ['./faq-tab.component.css']
})
export class FaqTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.show_content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
}
