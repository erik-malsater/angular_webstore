import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interfaces/IProduct';
import { Component } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { MockCartService } from '../services/mock-cart.service';
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
      { set: { providers: [{ provide: CartService,
      useClass: MockCartService
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
