import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonSectionComponent } from './neon-section.component';

describe('NeonSectionComponent', () => {
  let component: NeonSectionComponent;
  let fixture: ComponentFixture<NeonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
