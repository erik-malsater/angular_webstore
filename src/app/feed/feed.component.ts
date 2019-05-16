import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  productList = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchAllData().subscribe(data => this.productList = data);
  }

  

}
