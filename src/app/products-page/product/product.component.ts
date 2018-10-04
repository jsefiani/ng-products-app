import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: '[pm-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct // One product
  @Input() showImage: boolean;

  constructor() { }

  ngOnInit() {
  }

}
