import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

import { ImageItem } from './image-item';

@Injectable()
export class ImageService {
  private imageData: Array<ImageItem> = null;

  constructor(
    private http: Http
  ) {}

  images(): Observable<Array<ImageItem>> {
    return this
      .http.get('http://localhost:3000/images')
      .map(res => {
        this.imageData = res.json();
        return this.imageData;
      });
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

  private findImage(imageList, imageId) {
    return imageList.find(img => img.id == imageId);
  }
}
