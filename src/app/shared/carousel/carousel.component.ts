import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @Input() updateItemPerSlide: boolean = false;
  @Input() zoom: boolean = true;
  @Input() images: Array<string> | undefined = [''];

  itemsPerSlide = 1;

  singleSlideOffset = false;
  noWrap = false;
  slidesChangeMessage = '';
  groupedImages: string[][] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (this.updateItemPerSlide && isPlatformBrowser(this.platformId)) {
      this.updateItemsPerSlide();
    }

    this.groupImages();
  }

  groupImages() {
    if (!this.images) return;

    this.groupedImages = [];

    for (let i = 0; i < this.images.length; i += this.itemsPerSlide) {
      this.groupedImages.push(
        this.images.slice(i, i + this.itemsPerSlide)
      );
    }
  }

  updateItemsPerSlide() {

    if (!isPlatformBrowser(this.platformId)) return;

    const width = window.innerWidth;

    if (width <= 576) {
      this.itemsPerSlide = 1;
    } else if (width <= 768) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }
  }
}
