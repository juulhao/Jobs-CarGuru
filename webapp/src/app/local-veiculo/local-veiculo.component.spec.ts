import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVeiculoComponent } from './local-veiculo.component';

describe('LocalVeiculoComponent', () => {
  let component: LocalVeiculoComponent;
  let fixture: ComponentFixture<LocalVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
