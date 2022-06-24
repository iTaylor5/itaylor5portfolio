import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html',
  styleUrls: ['./tips-trick.component.css']
})
export class TipsTrickComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Before creating web applications my focus was on saturation diving',
    description: 'Saturation diving is when you dive to extreme depths to carry out heavy construction work on pipelines and offshore jackets. It involves living in chambers as small as 20 feet for up to 28 days at a time. My passion for coding began in these pressure chambers, where I would stay up late at night coding on my trusted MacBook. It did not take long before the coding bug bit, and I could only think about building programs even if they were only "Hello Worlds from the depths".'
  };

  Services: any[] = [
    { title: 'Boost SEO ranking' },
    { title: 'Marketing' },
    { title: 'Visual Reviews' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
