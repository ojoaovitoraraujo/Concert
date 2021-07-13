import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReactiveFormsComponent } from './data-reactive-forms.component';

describe('DataReactiveFormsComponent', () => {
  let component: DataReactiveFormsComponent;
  let fixture: ComponentFixture<DataReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
