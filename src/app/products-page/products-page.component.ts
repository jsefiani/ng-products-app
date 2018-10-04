import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  listFilter: string = "";

  constructor() { }

  ngOnInit() {
  }

}
