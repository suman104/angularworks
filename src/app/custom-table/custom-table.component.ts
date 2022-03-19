import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  email:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name:'Ada Lovelace',
    email:'ada@example.com'
  },{
    name:'Grace Hopper',
    email:'grace@example.com'
  },{
    name:'Margarate Hamilton',
    email:'marget@example.com'
  },

];

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','email'];
  dataSource = ELEMENT_DATA;
}
