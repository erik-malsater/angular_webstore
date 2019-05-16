import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { DataService } from '../services/data.service';
import { MockFetchDataService } from '../services/mock-fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './testing/activateRouteStub';
import { FormsModule } from '@angular/forms';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id: 1 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule ],
      declarations: [ ProductDetailComponent ],


      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: DataService, useClass: MockFetchDataService}]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetchSingleData should fetch one product with name "The Shining"', () => {
    fixture.detectChanges();
    expect(component.singleProduct.name).toEqual('The Shining');
  });

});

