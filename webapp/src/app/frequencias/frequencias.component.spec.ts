import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciasComponent } from './frequencias.component';

describe('FrequenciasComponent', () => {
  let component: FrequenciasComponent;
  let fixture: ComponentFixture<FrequenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
