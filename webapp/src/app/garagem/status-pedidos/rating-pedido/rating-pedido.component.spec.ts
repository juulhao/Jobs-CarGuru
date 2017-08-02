import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPedidoComponent } from './rating-pedido.component';

describe('RatingPedidoComponent', () => {
  let component: RatingPedidoComponent;
  let fixture: ComponentFixture<RatingPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
