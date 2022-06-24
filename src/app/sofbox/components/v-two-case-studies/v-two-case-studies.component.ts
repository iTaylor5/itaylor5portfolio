import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-v-two-case-studies',
  templateUrl: './v-two-case-studies.component.html',
  styleUrls: ['./v-two-case-studies.component.css']
})
export class VTwoCaseStudiesComponent implements OnInit {

  @Input() List: any = [];
  @Output() projectSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  myfunction(id: string) {
    console.log("id = " + id);
    this.projectSelected.emit(id);
  }

}
