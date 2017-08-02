import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusCarrosComponent } from './meus-carros.component';

describe('MeusCarrosComponent', () => {
  let component: MeusCarrosComponent;
  let fixture: ComponentFixture<MeusCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
