import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: FetchDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const filmId = params['id'];
    });
    
  }

}
