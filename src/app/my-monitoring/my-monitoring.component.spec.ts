import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMonitoringComponent } from './my-monitoring.component';

describe('MyMonitoringComponent', () => {
  let component: MyMonitoringComponent;
  let fixture: ComponentFixture<MyMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
