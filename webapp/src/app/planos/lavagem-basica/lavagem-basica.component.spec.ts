import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavagemBasicaComponent } from './lavagem-basica.component';

describe('LavagemBasicaComponent', () => {
  let component: LavagemBasicaComponent;
  let fixture: ComponentFixture<LavagemBasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavagemBasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavagemBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
