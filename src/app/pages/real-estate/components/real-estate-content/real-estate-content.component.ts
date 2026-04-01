import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RealEstate } from '../../../../models/real-estate/RealEstate.model';
import { RealEstateService } from '../../../../services/real-estate.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-real-estate-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './real-estate-content.component.html',
  styleUrl: './real-estate-content.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('{{delay}}ms ease-out')
      ])
    ])
  ]
})
export class RealEstateContentComponent implements OnInit, AfterViewInit {
  public realEstates: RealEstate[] | undefined

  constructor(private realEstateServive: RealEstateService, private meta: Meta, private title: Title, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.realEstates = this.realEstateServive.getRealEstates()

    this.title.setTitle('Férias em Bombinhas: Imóveis para alugar em Bombinhas SC');

    this.meta.updateTag({
      name: 'description',
      content: 'Imóveis para alugar em Bombinhas SC: apartamentos e casas para temporada com ótima localização, perto da praia, completos e confortáveis. Confira opções para famílias e grupos, com reserva rápida e atendimento via WhatsApp. Garanta suas férias em Bombinhas agora.'
    });
  }

  getWhatsAppLink(name: string): string {
    const message = `Olá, tudo certo? Vim pelo site e quero fazer a reserva do ${name}`;
    return `https://wa.me/5547997903305?text=${encodeURIComponent(message)}`;
  }


  @ViewChildren('fadeItem') items!: QueryList<ElementRef>;

  states = new Map<Element, string>();

  ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.states.set(entry.target, 'visible');
        }
      });
    }, { threshold: 0.2 });

    this.items.forEach(el => {
      this.states.set(el.nativeElement, 'hidden');
      observer.observe(el.nativeElement);
    });
  }

  getState(el: Element) {
    return this.states.get(el) || 'hidden';
  }
}
