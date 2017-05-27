import { Component, OnInit } from '@angular/core';

import { ImageItem } from '../image-item';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent implements OnInit {

  data: ImageItem;

  constructor(
    private imageService: ImageService
  ) { 
    this.data = new ImageItem();
  }

  ngOnInit() {
  }

  dataMissing() {
    return !this.data.url || !this.data.name;
  }
  
  addNewImage() {
    this.imageService.addImage(this.data);
  }
}
