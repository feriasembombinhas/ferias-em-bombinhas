import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../../models/real-estate/RealEstate.model';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from '../../services/real-estate.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { PropertyContentComponent } from './components/property-content/property-content.component';

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

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService) { }

  ngOnInit() {

    this.slug = this.route.snapshot.paramMap.get('slug')!;

    this.realEstate = this.realEstateService.getBySlug(this.slug)

  }
}
