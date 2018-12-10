import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRisksComponent } from './my-risks.component';

describe('MyRisksComponent', () => {
  let component: MyRisksComponent;
  let fixture: ComponentFixture<MyRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
