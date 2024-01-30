import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherSectionComponent } from './voucher-section.component';

describe('VoucherSectionComponent', () => {
  let component: VoucherSectionComponent;
  let fixture: ComponentFixture<VoucherSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
