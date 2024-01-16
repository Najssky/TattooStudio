import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artist1sAvailableTattoosComponent } from './artist1s-available-tattoos.component';

describe('Artist1sAvailableTattoosComponent', () => {
  let component: Artist1sAvailableTattoosComponent;
  let fixture: ComponentFixture<Artist1sAvailableTattoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artist1sAvailableTattoosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artist1sAvailableTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
