import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavagemPremiumComponent } from './lavagem-premium.component';

describe('LavagemPremiumComponent', () => {
  let component: LavagemPremiumComponent;
  let fixture: ComponentFixture<LavagemPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavagemPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavagemPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
