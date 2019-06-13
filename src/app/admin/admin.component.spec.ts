import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ AdminComponent ]
    })

    .overrideComponent(AdminComponent,
      { set: { providers: [{ provide: DataService,
      useClass: MockDataService
      }]}}
      )

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('orderList should contain one order', () => {
    expect(component.orderList.length).toBe(1);
    expect(component.orderList[0].created).toBe("2019-06-06T13:12:19");
  });
});
