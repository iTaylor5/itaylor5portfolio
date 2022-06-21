import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  List : any[] = [
    { title: 'Address', desc: '1234 North Avenue Luke Lane, IN 360001', icon: 'flaticon flaticon-location', hoverClass: 'purple-hover' },
    { title: 'Phone', desc: '+0123 456 789', icon: 'flaticon flaticon-phone-call', hoverClass: 'org-hover' },
    { title: 'Mail', desc: 'support@sofbox.com', icon: 'flaticon flaticon-send-mail', hoverClass: 'green-hover' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
