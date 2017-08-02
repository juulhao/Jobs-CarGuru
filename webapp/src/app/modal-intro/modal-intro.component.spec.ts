import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIntroComponent } from './modal-intro.component';

describe('ModalIntroComponent', () => {
  let component: ModalIntroComponent;
  let fixture: ComponentFixture<ModalIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
