
import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-artist1s-available-tattoos',
  templateUrl: './artist1s-available-tattoos.component.html',
  styleUrl: './artist1s-available-tattoos.component.scss'
})
export class Artist1sAvailableTattoosComponent {
  imageUrls: any[] | undefined;
  folder = 'Wolne Wzory';
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
  ]
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getAllImageUrls(this.folder).subscribe((urls) => {
      this.imageUrls = urls;
      console.log(this.imageUrls)
    });
    
  }
}
