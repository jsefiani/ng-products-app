import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, OnDestroy, OnChanges {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;
  products$: Subscription;
  @Input() listFilter: string;

  constructor(private productService: ProductService) {
    
  }

  // this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

  filteredProducts: IProduct[];

  products: IProduct[] = []


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy))
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.products$ = this.productService.getProducts().subscribe(
        products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
    );
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }

  ngOnChanges(): void {
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    console.log('OnChanges',this.listFilter);
  }

}
