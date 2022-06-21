import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v-two-portfolio-box',
  templateUrl: './v-two-portfolio-box.component.html',
  styleUrls: ['./v-two-portfolio-box.component.css']
})
export class VTwoPortfolioBoxComponent implements OnInit {

  @Input() List: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
