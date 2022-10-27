import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards = [
    {
      title: "Aloha",
      address: "Av. El libertador 770",
      phone: "*****",
      url:""
    },
    {
      title: "Bar Belgrano",
      address:"BV 25 de Mayo 300",
      phone: "*****",
      url:""
    },
    {
      title: "Café Esperanza",
      address:"Terminal de ómnibus, Belgrano esq. Pellegrini",
      phone:"******",
      url:""
    },
    {
      title: "Novitá",
      address: "Marconi esq. Av. El Libertador",
      phone:"*****",
      url:""
    },
    {
      title: "Rock & Rouge",
      address: "Bv 25 de Mayo 185",
      phone:"*****",
      url:""
    },

    {
      title: "Cremolatti",
      address: "Bv. Illia 232",
      phone:"3562 425750",
      url:""
    },

    {
      title: "Grido",
      address: "Bv. Illia y 25 de Mayo",
      phone:"3562 403000",
      url:""
    },
    {
      title: "Grido",
      address: "Bv. Belgrano y Pte. Perón",
      phone:"3562 403001",
      url:""
    },
    {
      title: "Polo",
      address: "Bv. 25 de Mayo esq. España",
      phone:"3562 42-2535",
      url:""
    },
    {
      title: "Polo Centro",
      address: "Bv. 25 de Mayo 406",
      phone:"3562 403913 / 3562 423913",
      url:""
    },

    {
      title: "Complejo Las Tipas",
      address: "Bv. Illia 232",
      phone:"3562 425750",
      url:""
    },

    {
      title: "Confitería 9 de julio",
      address: "Bv 25 de Mayo 340",
      phone:"3562 573991",
      url:""
    },
    {
      title: "El Rancho",
      address: "Av. Arturo Frondizi s/n",
      phone:"3562 405067",
      url:""
    },
    {
      title: "Jockey Club",
      address: "Bv 9 de Julio esq. San Martín",
      phone:"3562 404885",

      url:""
    },
    {
      title: "La Aldea",
      address: "Ayacucho esq. Uruguay",
      phone:"3562 15409046",
      url:""
    },
    {
      title: "La Inmortal",
      address: "Bv illia 329",
      phone:"3562 403361",
      url:""
    },
    {
      title: "La Parrilla de Nayo",
      address: "Avellaneda 347",
      phone:"3562 15415053",
      url:""
    },
    {
      title: "La Rural",
      address: "Av Arturo Frondizi s/n",
      phone:"3562 405389",
      url:""
    },
    {
      title: "El Bosque",
      address: "Enrique Gallo 500",
      phone:"3562 15543704",
      url:""
    },
  ];



  ngOnInit(): void {
  }
}

