import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavagemGuruComponent } from './lavagem-guru.component';

describe('LavagemGuruComponent', () => {
  let component: LavagemGuruComponent;
  let fixture: ComponentFixture<LavagemGuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavagemGuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavagemGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
