import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../../models/real-estate/RealEstate.model';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../services/real-estate.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { PropertyContentComponent } from './components/property-content/property-content.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule, CarouselComponent, PropertyContentComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent implements OnInit {
  slug: string = ''

  realEstate: RealEstate | undefined

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService, private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug')!;

    this.realEstate = this.realEstateService.getBySlug(this.slug);

    if (!this.realEstate) return;

    this.title.setTitle(
      `${this.realEstate.name} | Férias em Bombinhas`
    );

    this.meta.updateTag({
      name: 'description',
      content: `${this.realEstate.name} para até ${this.realEstate.details.peoples} pessoas, localizado em ${this.realEstate.details.local}, Bombinhas - SC. Confira fotos, comodidades e reserve sua hospedagem.`
    });

    this.meta.updateTag({
      name: 'keywords',
      content: `Bombinhas, aluguel temporada, ${this.realEstate.name}, apartamento em Bombinhas`
    });

    this.meta.updateTag({
      property: 'og:title',
      content: `${this.realEstate.name} | Férias em Bombinhas`
    });

    this.meta.updateTag({
      property: 'og:description',
      content: `${this.realEstate.name} localizado em Bombinhas - SC. Veja fotos, localização e comodidades.`
    });

    this.meta.updateTag({
      property: 'og:image',
      content: `https://ferias-em-bombinhas.vercel.app/${this.realEstate.imgCapa}`
    });

    this.meta.updateTag({
      property: 'og:url',
      content: `https://ferias-em-bombinhas.vercel.app/imovel/${this.realEstate.slug}`
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }
}
