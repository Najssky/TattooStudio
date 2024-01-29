
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, combineLatest, forkJoin, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private storage: AngularFireStorage) {}

  getAllImageUrls(folder: string): Observable<any> {
    const ref = this.storage.ref(folder);

    return ref.listAll().pipe(
        switchMap(result =>
            combineLatest(result.items.map((item: { getDownloadURL: () => any; }) => item.getDownloadURL()))
          )
    );
  }
  getImages(): Observable<any[]> {
    return this.storage.ref('images').listAll().pipe(
      switchMap(result =>
        combineLatest(result.items.map((item: { getDownloadURL: () => any; }) => item.getDownloadURL()))
      )
    );
  }
}
