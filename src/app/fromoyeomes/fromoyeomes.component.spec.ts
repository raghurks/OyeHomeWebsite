import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromoyeomesComponent } from './fromoyeomes.component';

describe('FromoyeomesComponent', () => {
  let component: FromoyeomesComponent;
  let fixture: ComponentFixture<FromoyeomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromoyeomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromoyeomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
