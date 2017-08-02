import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragemComponent } from './garagem.component';

describe('GaragemComponent', () => {
  let component: GaragemComponent;
  let fixture: ComponentFixture<GaragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
