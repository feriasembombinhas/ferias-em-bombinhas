import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { RealEstateContentComponent } from './components/real-estate-content/real-estate-content.component';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [CarouselComponent, RealEstateContentComponent],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {
  images: Array<string> = [
    'assets/beach_imgs/img1.png',
    'assets/beach_imgs/img2.png',
    'assets/beach_imgs/img3.png',
    'assets/beach_imgs/img4.png',
    'assets/beach_imgs/img5.png'
  ]
}
