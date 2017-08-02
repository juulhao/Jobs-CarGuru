import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusCheckupsComponent } from './meus-checkups.component';

describe('MeusCheckupsComponent', () => {
  let component: MeusCheckupsComponent;
  let fixture: ComponentFixture<MeusCheckupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusCheckupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusCheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
