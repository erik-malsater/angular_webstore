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
