import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  productList = [];

  constructor(private dataService: FetchDataService) { }

  ngOnInit() {
    this.dataService.fetchAllData().subscribe(data => this.productList = data);
  }

  

}
