import { Component } from '@angular/core';
import { Artist1TattoosGalleryComponent } from '../artist1-tattoos-gallery/artist1-tattoos-gallery.component';
import { Artist1sAvailableTattoosComponent } from '../artist1s-available-tattoos/artist1s-available-tattoos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-artists-section',
  templateUrl: './artists-section.component.html',
  styleUrl: './artists-section.component.scss'
})
export class ArtistsSectionComponent {
  constructor(public dialog: MatDialog) {}

  openArtist1TattoosGallery(){
    const dialogRef = this.dialog.open(Artist1TattoosGalleryComponent, {
      panelClass: 'customModalbox',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openArtist1AvaibleTattoos(){
    const dialogRef = this.dialog.open(Artist1sAvailableTattoosComponent, {
      panelClass: 'customModalbox',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
