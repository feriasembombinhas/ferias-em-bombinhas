import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meet-bombinhas',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './meet-bombinhas.component.html',
  styleUrl: './meet-bombinhas.component.scss'
})
export class MeetBombinhasComponent implements OnInit {
  images: Array<string> = [
    'assets/beach_imgs/img1.webp',
    'assets/beach_imgs/img2.webp',
    'assets/beach_imgs/img3.webp',
    'assets/beach_imgs/img4.webp'
  ]

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Férias em Bombinhas SC: Praias, Turismo e o que Fazer em Bombinhas | Guia Completo');

    this.meta.updateTag({
      name: 'description',
      content: 'Bombinhas SC: guia completo com praias paradisíacas, mergulho, trilhas e atrações turísticas. Veja o que fazer em Bombinhas, melhores praias, dicas de viagem e descubra por que é um dos destinos mais procurados de Santa Catarina.'
    });
  }
}
