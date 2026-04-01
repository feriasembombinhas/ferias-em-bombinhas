import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Reservas em Bombinhas SC: Informações, Contato e Regras de Hospedagem');

    this.meta.updateTag({
      name: 'description',
      content: 'Reservas de imóveis em Bombinhas SC: veja como reservar com segurança, contato via WhatsApp, horários de check-in e check-out, regras da hospedagem e informações importantes para sua estadia. Garanta sua reserva com tranquilidade.'
    });
  }
}
