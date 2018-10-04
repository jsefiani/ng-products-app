import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../products-page/product";
import { ProductService } from "../products-page/product.service";
import { Subscription, Observable } from "rxjs";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    products$: Observable<IProduct[]>;
    
    constructor(private productService: ProductService) {
        this.listFilter = ''; 
    }
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

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

    ngOnInit():void {
        console.log('OnInit');
        this.products$ = this.productService.getProducts()
        // .subscribe(
        //     products => {
        //         this.products = products;
        //         this.filteredProducts = this.products;
        //     },
        //     error => this.errorMessage = <any>error
        // );
    }
}
