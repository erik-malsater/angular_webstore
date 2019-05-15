import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interfaces/IProduct';
import { Component } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductToCartService } from '../services/add-product-to-cart.service';
import { MockAddProductToCartService } from '../services/mock-add-product-to-cart.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductCardComponent } from './product-card.component';


describe('ProductCardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ ProductCardComponent, TestHostComponent, FeedComponent ]
    })

    .overrideComponent(FeedComponent,
      { set: { providers: [{ provide: AddProductToCartService,
      useClass: MockAddProductToCartService
      }]}}
      )

    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

});



@Component({
  selector: 'host-component',
  template: '<app-feed productFromInput = "input"></app-feed>'
})
class TestHostComponent {
  input: IProduct[];

  setInput(newInput: IProduct[]) {
    this.input = newInput;
  }
}

/*

describe('AddToCartFunction', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let mockData: MockAddProductToCartService;
  //let mockData: MockData;
  //let mockDataFixture: ComponentFixture<MockData>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    //mockDataFixture = TestBed.createComponent(MockData);
    //mockData = mockDataFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add product object to session storage', () => {
    fixture.detectChanges();
    sessionStorage.clear();
    component.addToCart(mockData.getMockData());
    let cart = sessionStorage.getItem("productCart");
    expect((cart.).toEqual(1));
  });

})

*/
/*

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ 
        FeedComponent,
        ProductCardComponent
      ]
    })

    .overrideComponent(FeedComponent,
      { set: { providers: [{ provide: FetchDataService,
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
*/