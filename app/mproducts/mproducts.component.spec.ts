import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MproductsComponent } from './mproducts.component';

describe('MproductsComponent', () => {
  let component: MproductsComponent;
  let fixture: ComponentFixture<MproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
