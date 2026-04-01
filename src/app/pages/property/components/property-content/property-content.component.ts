import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { RealEstate } from '../../../../models/real-estate/RealEstate.model';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-property-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-content.component.html',
  styleUrl: './property-content.component.scss'
})
export class PropertyContentComponent {

  @Input() public realEstate: RealEstate | undefined
  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private meta: Meta, private title: Title, @Inject(PLATFORM_ID) private platformId: Object) { }

  iconColors: string[] = [
    "color-1",
    "color-2",
    "color-3"
  ];

  generatedColors: string[] = [];

  isBrowser: boolean = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      window.scrollTo(0, 0);
    }

    if (this.isBrowser) {
      const lat = this.realEstate?.cords?.lat;
      const lon = this.realEstate?.cords?.lon;

      if (lat && lon) {
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.google.com/maps?q=${lat},${lon}&output=embed`
        );
      }
    }
  }

  setSEO() {
    const name = this.realEstate?.name || '';
    const location = this.realEstate?.details?.local || '';
    const rooms = this.getRoomsText();
    const bathrooms = this.getBathroomsText();
    const peoples = this.getPeoplesText();

    const title = `Férias em Bombinhas: Apartamento ${name} em Bombinhas SC | ${rooms} para aluguel`;

    const description = `Aluguel de temporada em Bombinhas: ${name} localizado em ${location}. Acomoda ${peoples}, com ${rooms} e ${bathrooms}. Imóvel completo, confortável e próximo à praia. Reserve agora via WhatsApp.`;

    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }


  ngOnChanges() {

    if (this.realEstate?.cords) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.google.com/maps?q=${this.realEstate.cords.lat},${this.realEstate.cords.lon}&output=embed`
      );
    }

    if (this.realEstate?.finds) {
      this.generatedColors = this.generateColors(this.realEstate?.finds.length);
    }

    if (this.realEstate) {
      this.setSEO();
    }
  }

  getRoomsText(): string {
    const rooms = this.realEstate?.details?.rooms ?? 0;
    return rooms > 1 ? `${rooms} quartos` : `${rooms} quarto`;
  }

  getBathroomsText(): string {
    const bathrooms = this.realEstate?.details?.bathrooms ?? 0;
    return bathrooms > 1 ? `${bathrooms} banheiros` : `${bathrooms} banheiro`;
  }

  getPeoplesText(): string {
    const peoples = this.realEstate?.details?.peoples ?? 0;
    return peoples > 1 ? `${peoples} pessoas` : `${peoples} pessoa`;
  }

  private generateColors(quantity: number): string[] {
    return Array.from({ length: quantity }, () =>
      this.iconColors[Math.floor(Math.random() * this.iconColors.length)]
    );
  }

  getWhatsAppLink(name: string | undefined): string {
    const message = `Olá, tudo certo? Vim pelo site e quero fazer a reserva do ${name}`;
    return `https://wa.me/5547997903305?text=${encodeURIComponent(message)}`;
  }
}
