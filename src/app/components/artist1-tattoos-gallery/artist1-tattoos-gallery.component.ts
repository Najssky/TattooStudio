import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-artist1-tattoos-gallery',
  templateUrl: './artist1-tattoos-gallery.component.html',
  styleUrl: './artist1-tattoos-gallery.component.scss'
})
export class Artist1TattoosGalleryComponent {
  imageUrls: any[] | undefined;
  folder = 'Ostatnie Realizacje';
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getAllImageUrls(this.folder).subscribe((urls) => {
      this.imageUrls = urls;
      console.log(this.imageUrls)
    });
  }
}