import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooyehomesComponent } from './tooyehomes.component';

describe('TooyehomesComponent', () => {
  let component: TooyehomesComponent;
  let fixture: ComponentFixture<TooyehomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooyehomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooyehomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
