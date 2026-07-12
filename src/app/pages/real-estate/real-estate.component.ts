import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { RealEstateContentComponent } from './components/real-estate-content/real-estate-content.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [CarouselComponent, RealEstateContentComponent],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {
  images: Array<string> = [
    'assets/beach_imgs/img1.webp',
    'assets/beach_imgs/img2.webp',
    'assets/beach_imgs/img3.webp',
    'assets/beach_imgs/img4.webp'
  ]

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    this.title.setTitle(
      'Imóveis para Aluguel em Bombinhas | Férias em Bombinhas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Confira nossa seleção de apartamentos e casas para aluguel de temporada em Bombinhas - SC. Hospedagens próximas à praia, com conforto, excelente localização e atendimento personalizado.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'aluguel temporada Bombinhas, apartamentos Bombinhas, casas Bombinhas, hospedagem Bombinhas, imóveis Bombinhas'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Imóveis para Aluguel em Bombinhas | Férias em Bombinhas'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Encontre apartamentos e casas para aluguel de temporada em Bombinhas com excelente localização e conforto.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://ferias-em-bombinhas.vercel.app/imoveis'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }
}
