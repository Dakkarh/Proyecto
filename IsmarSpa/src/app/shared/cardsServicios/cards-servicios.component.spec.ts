import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsServiciosComponent } from './cards-servicios.component';

describe('CardsServiciosComponent', () => {
  let component: CardsServiciosComponent;
  let fixture: ComponentFixture<CardsServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsServiciosComponent]
    });
    fixture = TestBed.createComponent(CardsServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
