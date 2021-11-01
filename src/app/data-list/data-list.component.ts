import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  @Input() data: any;
  @Input() dob = true;
  @Input() email = true;

  constructor() { }

  ngOnInit(): void {
  }

}
