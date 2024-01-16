import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artist1TattoosGalleryComponent } from './artist1-tattoos-gallery.component';

describe('Artist1TattoosGalleryComponent', () => {
  let component: Artist1TattoosGalleryComponent;
  let fixture: ComponentFixture<Artist1TattoosGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artist1TattoosGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Artist1TattoosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
