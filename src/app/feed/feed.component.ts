import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  productList = [];

  constructor(private dataService: FetchDataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => this.productList = data);
  }

}
