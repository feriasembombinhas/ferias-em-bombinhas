import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

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
  @Input() blur: boolean = false;
  @Input() lightbox: boolean = false;
  @Input() imageAltPrefix = 'Paisagem de Bombinhas, Santa Catarina';

  selectedImage: string | null = null;
  selectedImageAlt: string | null = null;
  zoomLevel = 1;

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

  openImage(image: string, index: number): void {
    if (!this.lightbox) return;

    this.selectedImage = image;
    this.selectedImageAlt = this.getImageAlt(index);
    this.zoomLevel = 1;
  }

  closeImage(): void {
    this.selectedImage = null;
    this.selectedImageAlt = null;
    this.zoomLevel = 1;
  }

  getImageAlt(index: number): string {
    return `Foto ${index + 1} de ${this.imageAltPrefix}`;
  }

  zoomIn(): void {
    this.zoomLevel = Math.min(4, this.zoomLevel + 0.25);
  }

  zoomOut(): void {
    this.zoomLevel = Math.max(1, this.zoomLevel - 0.25);
  }

  resetZoom(): void {
    this.zoomLevel = 1;
  }

  onImageWheel(event: WheelEvent): void {
    event.preventDefault();
    event.deltaY < 0 ? this.zoomIn() : this.zoomOut();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.selectedImage) return;

    if (event.key === 'Escape') {
      this.closeImage();
    } else if (event.key === '+' || event.key === '=') {
      this.zoomIn();
    } else if (event.key === '-') {
      this.zoomOut();
    } else if (event.key === '0') {
      this.resetZoom();
    }
  }
}
