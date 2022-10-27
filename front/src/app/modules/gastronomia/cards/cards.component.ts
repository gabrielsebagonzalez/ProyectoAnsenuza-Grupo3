import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  dataCards = [
    {
      title: "Aloha",
      address: "Av. El libertador 770",
      phone: "*****",
      imageUrl: "",
      description: "Nos encontramos, a dos cuadras del centro de la ciudad y a una cuadra del la lago. Amplia variedad de servicios y la mejor atención.",
      url:""
    },
    {
      title: "Bar Belgrano",
      address:"BV 25 de Mayo 300",
      phone: "*****",
      imageUrl: "",
      description: "Hotel de tradición familiar, ubicado en el corazón de Morteros, que destaca el valor de sus huéspedes con una atención cálida y personalizada.",
      url:""
    },
    {
      title: "Café Esperanza",
      address:"Terminal de ómnibus, Belgrano esq. Pellegrini",
      phone:"******",
      imageUrl: "",
      description: "Tenemos más de 15 años de experiencia, brindando a nuestros huéspedes una excelente atención personalizada a la altura de sus necesidades.",
      url:""
    },
    {
      title: "Novitá",
      address: "Marconi esq. Av. El Libertador",
      phone:"*****",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "Rock & Rouge",
      address: "Bv 25 de Mayo 185",
      phone:"*****",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },

    {
      title: "Cremolatti",
      address: "Bv. Illia 232",
      phone:"3562 425750",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },

    {
      title: "Grido",
      address: "Bv. Illia y 25 de Mayo",
      phone:"3562 403000",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "Grido",
      address: "Bv. Belgrano y Pte. Perón",
      phone:"3562 403001",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "Polo",
      address: "Bv. 25 de Mayo esq. España",
      phone:"3562 42-2535",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "Polo Centro",
      address: "Bv. 25 de Mayo 406",
      phone:"3562 403913 / 3562 423913",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },

    {
      title: "Complejo Las Tipas",
      address: "Bv. Illia 232",
      phone:"3562 425750",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },

    {
      title: "Confitería 9 de julio",
      address: "Bv 25 de Mayo 340",
      phone:"3562 573991",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "El Rancho",
      address: "Av. Arturo Frondizi s/n",
      phone:"3562 405067",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "Jockey Club",
      address: "Bv 9 de Julio esq. San Martín",
      phone:"3562 404885",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "La Aldea",
      address: "Ayacucho esq. Uruguay",
      phone:"3562 15409046",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "La Inmortal",
      address: "Bv illia 329",
      phone:"3562 403361",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "La Parrilla de Nayo",
      address: "Avellaneda 347",
      phone:"3562 15415053",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "La Rural",
      address: "Av Arturo Frondizi s/n",
      phone:"3562 405389",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
    {
      title: "El Bosque",
      address: "Enrique Gallo 500",
      phone:"3562 15543704",
      imageUrl: "",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:""
    },
  ];



  ngOnInit(): void {
  }
}

