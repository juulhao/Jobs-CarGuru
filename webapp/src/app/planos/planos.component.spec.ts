import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosComponent } from './planos.component';

import

describe('PlanosComponent', () => {
  let component: PlanosComponent;
  let fixture: ComponentFixture<PlanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
