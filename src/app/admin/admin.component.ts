import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  orderList = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchAllOrderData().subscribe(data => this.orderList = data);
  }

}
