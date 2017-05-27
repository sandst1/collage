import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ImageService } from '../image.service';
import { ImageItem } from '../image-item';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  id: string;
  data: ImageItem;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadDetails();
    });
  }

  loadDetails() {
    this.imageService.image(this.id).subscribe(imageData => {
      this.data = imageData;
    });
  }

  back() {
    this.router.navigateByUrl('/images');
  }

}
