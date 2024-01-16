import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, combineLatest, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private storage: AngularFireStorage) {}

  getImages(): Observable<any[]> {
    return this.storage.ref('images').listAll().pipe(
      switchMap(result =>
        combineLatest(result.items.map((item: { getDownloadURL: () => any; }) => item.getDownloadURL()))
      )
    );
  }
}