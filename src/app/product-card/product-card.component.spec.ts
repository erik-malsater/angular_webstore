import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../interfaces/IProduct';
import { Component } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ProductCardComponent, TestHostComponent, FeedComponent ]
    })
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

