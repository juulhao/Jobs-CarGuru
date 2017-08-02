import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaDataComponent } from './proxima-data.component';

describe('ProximaDataComponent', () => {
  let component: ProximaDataComponent;
  let fixture: ComponentFixture<ProximaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
