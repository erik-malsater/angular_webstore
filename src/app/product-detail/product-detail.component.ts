import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';
import { IProduct } from '../interfaces/IProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  singleProduct: IProduct;
  quantityList = [1,2,3,4,5,6,7,8,9];
  selectedQuantityString: string = '1';
  selectedQuantity: number;

  constructor(
    private route: ActivatedRoute, 
    private dataService: FetchDataService, 
    private addToCartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = parseInt(params.get('id'));
    });
    this.dataService.fetchSingleData(this.productId).subscribe(data => this.singleProduct = data);
  }

  addToCart(){
    this.selectedQuantity = parseInt(this.selectedQuantityString);
    this.addToCartService.addQuantityOfProducts(this.singleProduct, this.selectedQuantity);
  }
}
