import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick2',
  templateUrl: './tips-trick2.component.html',
  styleUrls: ['./tips-trick2.component.css']
})
export class TipsTrick2Component implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  service1: any[] = [
    { title : 'Boost SEO ranking' },
    { title : 'Marketing' },
    { title : 'Visual Reviews' },
  ];
  
  service2: any[] = [
    { title : 'Social Sharing' },
    { title : 'Retention' },
    { title : 'Reviews Generation' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
