import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/of';

import { ImageItem } from './image-item';

@Injectable()
export class ImageService {
  private IMG_URL:string = 'http://localhost:3000/images/';

  private imageSubject: BehaviorSubject<ImageItem[]>;
  private imageData: Array<ImageItem> = null;

  constructor(
    private http: Http
  ) {
    this.imageSubject = new BehaviorSubject([]);
    this.imagesRequest().subscribe(res => {
        this.imageData = res.json();
        this.imageSubject.next(this.imageData);
      });
  }

  private imagesRequest() {
    return this.http.get(this.IMG_URL);
  }

  private findImage(imageList, imageId) {
    return imageList.find(img => img.id == imageId);
  }

  images(): Observable<Array<ImageItem>> {
    return this.imageSubject.asObservable();
  }

  image(imageId:string) {
    if (this.imageData) {
      return Observable.of(this.findImage(this.imageData, imageId));
    } else {
      return this.images().map(imageList => {
        return this.findImage(imageList, imageId);
      });
    }
  }

  addImage(imageData: ImageItem) {
    this
      .http.post(this.IMG_URL, imageData)
      .subscribe(res => {
        const newImage = res.json();
        this.imageData.push(newImage);
        this.imageSubject.next(this.imageData);
      });
  }

  removeImage(imageId) {
    this
      .http.delete(`${this.IMG_URL}/${imageId}`)
      .subscribe(res => {
        this.imageData = this.imageData.filter(img => img.id != imageId);
        this.imageSubject.next(this.imageData);
      });
  }
}
