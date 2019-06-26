import { Component, OnInit, Input } from '@angular/core';

@Component({
  //selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.scss']
})
export class MoredetailsComponent implements OnInit {
  @Input() image2u:string;
  constructor() { }

  ngOnInit() {
  }

}
