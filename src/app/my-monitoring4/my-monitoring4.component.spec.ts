import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMonitoring4Component } from './my-monitoring4.component';

describe('MyMonitoring4Component', () => {
  let component: MyMonitoring4Component;
  let fixture: ComponentFixture<MyMonitoring4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonitoring4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonitoring4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
