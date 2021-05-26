import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioAGramosComponent } from './precio-a-gramos.component';

describe('PrecioAGramosComponent', () => {
  let component: PrecioAGramosComponent;
  let fixture: ComponentFixture<PrecioAGramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecioAGramosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioAGramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
