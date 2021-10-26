import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {
  selectedImageUrl: string;

  @Input() images: string[];
  @Input() main_image : any;

  ngOnInit(): void {

  

    this.selectedImageUrl = this.main_image;

    if (!this.selectedImageUrl&&this.hasImages) {
      this.selectedImageUrl = this.images[0];
    }
  }

  changeSelectedImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  get hasImages() {
    return this.images?.length > 0;
  }
}
