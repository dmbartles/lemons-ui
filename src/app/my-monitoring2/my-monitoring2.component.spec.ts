import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMonitoring2Component } from './my-monitoring2.component';

describe('MyMonitoring2Component', () => {
  let component: MyMonitoring2Component;
  let fixture: ComponentFixture<MyMonitoring2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonitoring2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonitoring2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
