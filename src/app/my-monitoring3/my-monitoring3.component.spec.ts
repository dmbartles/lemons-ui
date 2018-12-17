import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMonitoring3Component } from './my-monitoring3.component';

describe('MyMonitoring3Component', () => {
  let component: MyMonitoring3Component;
  let fixture: ComponentFixture<MyMonitoring3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonitoring3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonitoring3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
