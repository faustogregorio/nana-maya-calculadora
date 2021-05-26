import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoMasaComponent } from './peso-masa.component';

describe('PesoMasaComponent', () => {
  let component: PesoMasaComponent;
  let fixture: ComponentFixture<PesoMasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoMasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoMasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
