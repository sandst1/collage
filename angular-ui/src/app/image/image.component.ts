import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ImageItem } from '../image-item';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  data: ImageItem = null;

  @Output()
  clicked = new EventEmitter();

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  remove(event) {
    this.imageService.removeImage(this.data.id);
    event.stopPropagation();
  }

  itemClicked() {
    this.clicked.emit();
  }
}
