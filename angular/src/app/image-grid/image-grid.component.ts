import { Component, OnInit } from '@angular/core';
import { ImageItem } from '../image-item';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {

  images: Array<ImageItem> = null;

  constructor(
    private imageService: ImageService,
    private router: Router
  ) { 
    this
      .imageService.images()
      .subscribe(images => {
        this.images = images;
      });
  }

  ngOnInit() {
  }

  showDetails(imageId: string) {
    this.router.navigateByUrl(`images/${imageId}`);
  }
}
