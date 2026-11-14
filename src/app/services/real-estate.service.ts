import { Injectable } from '@angular/core';
import { RealEstate } from '../models/real-estate/RealEstate.model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  private realEstates: RealEstate[] = [
    {
      id: 1,
      name: "Varandas do Sol Bombinhas",
      slug: "varandas-sol-bombinhas",
      imgCapa: 'assets/real-estages_imgs/varandas_do_sol/img7.webp',
      details: {
        local: "Centro",
        rooms: 1,
        bathrooms: 1,
        peoples: 3
      },
      description1: `Nossos sobrados de 01 dormitório são perfeitos para casais ou pequenas famílias, acomodando até 03 pessoas, com o conforto necessário para dias de descanso. As acomodações contam com cozinha, banheiro, ar-condicionado e tv no dormitório.

      O residencial dispõe ainda de estacionamento fechado, lavanderia e churrasqueira de uso coletivo.

      A apenas 400 metros da praia, você pode aproveitar o melhor de Bombinhas, caminhar até o mar, apreciar a natureza, explorar as praias e relaxar no seu próprio ritmo.

      Estamos localizados no centro de Bombinhas, próximos de mercado, farmácias, restaurantes e do comércio em geral.`,
      finds: [
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Dormitório com TV e ar condicionado", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Banheiro privativo", icon: "fa-solid fa-bath", color: "color-1" },
        { text: "Wi-Fi disponível", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Lavanderia de uso comum", icon: "fa-solid fa-shirt", color: "color-1" },
        { text: "Área de churrasco coletiva", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Estacionamento fechado", icon: "fa-solid fa-square-parking", color: "color-1" }
      ],
      description2: ``,
      location: "Rua Pescada Amarela, 401 - Centro",
      cords: {
        lat: "-27.1526106377652",
        lon: "-48.48916203626953"
      },
      images: [
        'assets/real-estages_imgs/varandas_do_sol/img1.webp',
        'assets/real-estages_imgs/varandas_do_sol/img2.webp',
        'assets/real-estages_imgs/varandas_do_sol/img3.webp',
        'assets/real-estages_imgs/varandas_do_sol/img4.webp',
        'assets/real-estages_imgs/varandas_do_sol/img5.webp',
        'assets/real-estages_imgs/varandas_do_sol/img6.webp',
        'assets/real-estages_imgs/varandas_do_sol/img7.webp',
        'assets/real-estages_imgs/varandas_do_sol/img8.webp',
        'assets/real-estages_imgs/varandas_do_sol/img9.webp',
        'assets/real-estages_imgs/varandas_do_sol/img10.webp',
        'assets/real-estages_imgs/varandas_do_sol/img11.webp',
        'assets/real-estages_imgs/varandas_do_sol/img12.webp',
        'assets/real-estages_imgs/varandas_do_sol/img13.webp',
        'assets/real-estages_imgs/varandas_do_sol/img14.webp',
        'assets/real-estages_imgs/varandas_do_sol/img15.webp',
        'assets/real-estages_imgs/varandas_do_sol/img16.webp',
        'assets/real-estages_imgs/varandas_do_sol/img17.webp'
      ]
    },

    {
      id: 2,
      name: "Apartamento Doce Sol",
      slug: "apartamento-doce-sol",
      imgCapa: 'assets/real-estages_imgs/apartamento_doce_sol/img1.webp',
      details: {
        local: "Centro",
        rooms: 2,
        bathrooms: 1,
        peoples: 6
      },
      description1: `Para quem quer ficar pertinho do mar no coração de Bombinhas, o apartamento Doce Sol é uma excelente escolha.

      Localizado na avenida principal, a apenas 50 metros da Praia de Bombinhas e sobre a tradicional Sorveteria Seu João, o apartamento possui dois dormitórios climatizados e acomoda até 06 pessoas.

      Conta com cozinha, sala, banheiro, churrasqueira, lavanderia individual e Wi-Fi, oferece toda praticidade necessária para aproveitar as férias em família.

      Por estar no centro, fica próximo a mercado, restaurantes, lojas e todo comércio em geral.

      A acomodação também conta com garagem fechada e segura, localizada a aproximadamente 400 metros do apartamento, no residencial Varandas do Sol.
      `,
      finds: [
        { text: "2 dormitórios climatizados", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Sala aconchegante", icon: "fa-solid fa-couch", color: "color-3" },
        { text: "Banheiro privativo", icon: "fa-solid fa-bath", color: "color-1" },
        { text: "Lavanderia individual", icon: "fa-solid fa-shirt", color: "color-1" },
        { text: "Churrasqueira", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Garagem fechada", icon: "fa-solid fa-square-parking", color: "color-1" }
      ],
      description2: ``,
      location: "Av. Vereador Manoel José dos Santos, 1107 - Centro",
      cords: {
        lat: "-27.149445339353658",
        lon: "-48.487036065953575"
      },
      images: [
        'assets/real-estages_imgs/apartamento_doce_sol/img1.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img2.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img3.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img4.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img5.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img6.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img7.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img8.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img9.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img10.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img11.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img12.webp',
        'assets/real-estages_imgs/apartamento_doce_sol/img13.webp'
      ]
    },

    {
      id: 3,
      name: "Apartamento Doce Mar",
      slug: "apartamento-doce-mar",
      imgCapa: 'assets/real-estages_imgs/apartamento_doce_mar/img1.webp',
      details: {
        local: "Centro",
        rooms: 2,
        bathrooms: 1,
        peoples: 5
      },
      description1: `A poucos passos do mar, o apartamento Doce Mar reúne localização privilegiada, conforto e praticidade.

      Localizado na avenida principal, a apenas 50 metros da Praia de Bombinhas e sobre a tradicional Sorveteria Seu João, o apartamento possui dois dormitórios climatizados e acomoda até 05 pessoas.

      Conta com cozinha, sala, banheiro, churrasqueira, lavanderia individual e Wi-Fi, oferece toda praticidade necessária para aproveitar as férias em família.

      Por estar no centro, fica próximo a mercado, restaurantes, lojas e todo comércio em geral.

      A acomodação também conta com garagem fechada e segura, localizada a aproximadamente 400 metros do apartamento, no residencial Varandas do Sol.
        `,
      finds: [
        { text: "2 dormitórios climatizados", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Churrasqueira integrada", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Sala aconchegante", icon: "fa-solid fa-couch", color: "color-3" },
        { text: "Banheiro privativo", icon: "fa-solid fa-bath", color: "color-1" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Garagem fechada", icon: "fa-solid fa-square-parking", color: "color-1" },
        { text: "Lavanderia individual", icon: "fa-solid fa-shirt", color: "color-1" }
      ],
      description2: ``,
      location: "Av. Vereador Manoel José dos Santos, 1107 - Centro",
      cords: {
        lat: "-27.149445339353658",
        lon: "-48.487036065953575"
      },
      images: [
        'assets/real-estages_imgs/apartamento_doce_mar/img1.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img2.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img3.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img4.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img5.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img6.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img7.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img8.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img9.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img10.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img11.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img12.webp',
        'assets/real-estages_imgs/apartamento_doce_mar/img13.webp'
      ]
    },

    {
      id: 4,
      name: "Apartamento 01 - Residencial Férias em Bombinhas",
      slug: "apartamento-01-residencial-ferias-em-bombinhas",
      imgCapa: 'assets/real-estages_imgs/apartamento_01/img8.webp',
      details: {
        local: "Centro",
        rooms: 1,
        bathrooms: 1,
        peoples: 3
      },
      description1: `Uma opção compacta, confortável e bem localizada, ideal para casais ou pequenas famílias.

      O apartamento 01 está localizado no Residencial Férias em Bombinhas, no centro a aproximadamente 300 metros da Praia de Bombinhas e 450 metros da Praia de Quatro Ilhas.

      Com 01 dormitório e capacidade para até 03 pessoas, oferece um ambiente aconchegante, com cozinha equipada, sala com sofá cama, banheiro, Wi-Fi e estacionamento.
      `,
      finds: [
        { text: "Dormitório climatizado", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Sala com sofá-cama", icon: "fa-solid fa-couch", color: "color-3" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Churrasqueira", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Estacionamento fechado", icon: "fa-solid fa-square-parking", color: "color-1" }
      ],
      description2: ``,
      location: "Rua Salema n 242 – Centro",
      cords: {
        lat: "-27.151051035359348",
        lon: "-48.485467493798694"
      },
      images: [
        'assets/real-estages_imgs/apartamento_01/img1.webp',
        'assets/real-estages_imgs/apartamento_01/img2.webp',
        'assets/real-estages_imgs/apartamento_01/img3.webp',
        'assets/real-estages_imgs/apartamento_01/img4.webp',
        'assets/real-estages_imgs/apartamento_01/img5.webp',
        'assets/real-estages_imgs/apartamento_01/img6.webp',
        'assets/real-estages_imgs/apartamento_01/img7.webp',
        'assets/real-estages_imgs/apartamento_01/img8.webp',
        'assets/real-estages_imgs/apartamento_01/img9.webp'
      ]
    },

    {
      id: 5,
      name: "Apartamento Duplex 02 - Residencial Férias em Bombinhas",
      slug: "apartamento-duplex-02-residencial-ferias-em-bombinhas",
      imgCapa: 'assets/real-estages_imgs/apartamento_duplex_02/img20.webp',
      details: {
        local: "Centro",
        rooms: 2,
        bathrooms: 2,
        peoples: 7
      },
      description1: `Espaçoso e ideal para famílias maiores, o Duplex 02 acomoda até 07 pessoas e oferece conforto em dois pavimentos.

      Localizado no centro, no residencial Férias em Bombinhas, a 300 metros da praia de Bombinhas e a 450 metros da praia de Quatro Ilhas. O apartamento possui 02 dormitórios climatizados, sendo um deles uma suíte com hidromassagem. No térreo, os ambientes são amplos e bem distribuídos, com sala, cozinha e lavabo. O residencial oferece Wi-Fi, estacionamento, lavanderia de uso comum e churrasqueira de uso coletivo.

      Uma excelente opção para quem deseja espaço, conforto e uma ótima localização em Bombinhas.
      `,
      finds: [
        { text: "2 dormitórios", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Hidromassagem", icon: "fa-solid fa-hot-tub-person", color: "color-3" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Churrasqueira coletiva", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Estacionamento", icon: "fa-solid fa-square-parking", color: "color-1" },
        { text: "Lavanderia de uso comum", icon: "fa-solid fa-shirt", color: "color-1" }
      ],
      description2: ``,
      location: "Rua Salema n 242 - Centro",
      cords: {
        lat: "-27.151051035359348",
        lon: "-48.485467493798694"
      },
      images: [
        'assets/real-estages_imgs/apartamento_duplex_02/img1.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img2.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img3.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img4.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img5.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img6.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img7.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img8.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img9.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img10.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img11.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img12.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img13.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img14.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img15.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img16.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img17.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img18.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img19.webp',
        'assets/real-estages_imgs/apartamento_duplex_02/img20.webp'
      ]
    },

    {
      id: 6,
      name: "Apartamentos Duplex 03 ou 04 - Residencial Férias em Bombinhas",
      slug: "apartamento-duplex-03-ou-04-residencial-ferias-em-bombinhas",
      imgCapa: 'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img16.webp',
      details: {
        local: "Centro",
        rooms: 2,
        bathrooms: 1,
        peoples: 6
      },
      description1: `Os Duplex 03 e 04 estão localizados no centro de Bombinhas, a 300 metros da Praia de Bombinhas e 450 metros da Praia de Quatro Ilhas.

      Distribuídos em dois pavimentos, cada unidade conta com sala espaçosa, cozinha, lavabo, 02 dormitórios e banheiro. O residencial oferece Wi-Fi, estacionamento, lavanderia de uso comum e churrasqueira de uso coletivo.

      Uma excelente opção para quem deseja espaço, conforto e uma ótima localização em Bombinhas.
      `,
      finds: [
        { text: "2 dormitórios", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "1 banheiro e 1 lavabo", icon: "fa-solid fa-bath", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Churrasqueira coletiva", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Estacionamento", icon: "fa-solid fa-square-parking", color: "color-1" },
        { text: "Lavanderia de uso comum", icon: "fa-solid fa-shirt", color: "color-1" }
      ],
      description2: ``,
      location: "Rua Salema n 242 - Centro",
      cords: {
        lat: "-27.151051035359348",
        lon: "-48.485467493798694"
      },
      images: [
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img1.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img2.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img3.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img4.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img5.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img6.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img7.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img8.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img9.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img10.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img11.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img12.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img13.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img14.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img15.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img16.webp',
        'assets/real-estages_imgs/apartamentos_duplex_03_ou_04/img17.webp'
      ]
    },

    {
      id: 7,
      name: "Apartamento 101 ou 201 - Residencial Férias em Bombinhas",
      slug: "apartamento-101-102-residencial-ferias-em-bombinhas",
      imgCapa: 'assets/real-estages_imgs/apartamento_101_ou_201/img3.webp',
      details: {
        local: "Centro",
        rooms: 2,
        bathrooms: 2,
        peoples: 6
      },
      description1: `Os apartamentos 101e 201 estão localizados no centro de Bombinhas, a 300 metros da Praia de Bombinhas e 450 metros da Praia de Quatro Ilhas.

      Cada unidade possui 02 dormitórios, sendo uma suíte e um banheiro social, apartamentos com capacidade para até 06 pessoas.

      A sala integrada à cozinha proporciona um ambiente agradável para família, e a varanda com churrasqueira privativa é um dos grandes diferenciais do apartamento.

      As acomodações contam com Wi-Fi, estacionamento e lavanderia de uso comum.

      Uma excelente opção para quem deseja espaço, conforto e uma ótima localização em Bombinhas.
      `,
      finds: [
        { text: "1 suíte", icon: "fa-solid fa-bed", color: "color-3" },
        { text: "2 dormitórios", icon: "fa-solid fa-bed", color: "color-1" },
        { text: "Cozinha equipada", icon: "fa-solid fa-utensils", color: "color-2" },
        { text: "Wi-Fi", icon: "fa-solid fa-wifi", color: "color-3" },
        { text: "Varanda com churrasqueira", icon: "fa-solid fa-fire", color: "color-2" },
        { text: "Estacionamento", icon: "fa-solid fa-square-parking", color: "color-1" },
        { text: "Lavanderia de uso comum", icon: "fa-solid fa-shirt", color: "color-1" }
      ],
      description2: ``,
      location: "Rua Salema n 242 - Centro",
      cords: {
        lat: "-27.151051035359348",
        lon: "-48.485467493798694"
      },
      images: [
        'assets/real-estages_imgs/apartamento_101_ou_201/img1.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img2.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img3.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img4.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img5.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img6.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img7.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img8.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img9.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img10.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img11.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img12.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img13.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img14.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img15.webp',
        'assets/real-estages_imgs/apartamento_101_ou_201/img16.webp'
      ]
    }
  ];

  constructor() { }

  getRealEstates() {
    return this.realEstates
  }

  getBySlug(slug: string) {
    return this.realEstates.find(item => item.slug === slug);
  }
}
