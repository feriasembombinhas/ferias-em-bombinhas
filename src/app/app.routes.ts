import { Routes } from '@angular/router';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { PropertyComponent } from './pages/property/property.component';
import { MeetBombinhasComponent } from './pages/meet-bombinhas/meet-bombinhas.component';
import { InformationsComponent } from './pages/informations/informations.component';

export const routes: Routes = [
  { path: 'imoveis', component: RealEstateComponent },
  { path: 'conheca-bombinhas', component: MeetBombinhasComponent },
  { path: 'informacoes', component: InformationsComponent },
  { path: 'imovel/:slug', component: PropertyComponent },
  { path: '', redirectTo: 'imoveis', pathMatch: 'full' }
];
