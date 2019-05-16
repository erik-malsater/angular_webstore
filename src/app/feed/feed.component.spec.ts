import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed.component';
import { MockFetchDataService } from '../services/mock-fetch-data.service';
import { DataService } from '../services/data.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ 
        FeedComponent,
        ProductCardComponent
      ]
    })

    .overrideComponent(FeedComponent,
      { set: { providers: [{ provide: DataService,
      useClass: MockFetchDataService
      }]}}
      )
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('productList should contain 3 objects', () => {
    fixture.detectChanges();
    expect(component.productList.length).toEqual(3);
  });

});
