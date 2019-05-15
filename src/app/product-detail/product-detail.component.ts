import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  singleProduct: IProduct;

  constructor(private route: ActivatedRoute, private dataService: FetchDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = parseInt(params.get('id'));
    });
    this.dataService.fetchSingleData(this.productId).subscribe(data => this.singleProduct = data);
  }

}
