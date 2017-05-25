import { Component, OnInit, Input } from '@angular/core';
import { ImageItem } from '../image-item';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  data: ImageItem = null;

  constructor() { }

  ngOnInit() {
  }
}
