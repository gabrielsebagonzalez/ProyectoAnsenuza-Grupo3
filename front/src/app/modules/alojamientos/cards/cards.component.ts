import { Component, OnInit } from '@angular/core';
import { AlojamientoService } from 'src/app/core/services/alojamiento/alojamiento.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  dataCards:any;

constructor(
  public alojamientoService: AlojamientoService,
  public toastService : ToastService
  ) {
    this.alojamientoService.getAlojamiento().subscribe(
      (res: any) => {
        console.log(res);
        this.dataCards = res;
      },
      (err) => {
        this.toastService.presentToast("Ocurrio un error al cargar los alojamientos");
      }
    );

}
  cards = [
    {
      title: "Sarmiento",
      address: "Sarmiento 131",
      phone: "03562-405201",
      imageUrl: "assets/img/Sarmiento.png",
      description: "Nos encontramos, a dos cuadras del centro de la ciudad y a una cuadra del la lago. Amplia variedad de servicios y la mejor atención.",
      url:"https://www.facebook.com/HotelSarmiento"
    },


    {
      title: "Constantino",
      address:"Boulevard 9 de Julio 833",
      phone: "03562-567955",
      imageUrl: "assets/img/Constantino.png",
      description: "Hotel de tradición familiar, ubicado en el corazón de Morteros, que destaca el valor de sus huéspedes con una atención cálida y personalizada.",
      url:"https://hotelconstantino.negocio.site/"
    },

    {
      title: "España",
      address:"España 1466",
      phone:"03562-402714",
      imageUrl: "assets/img/Espana.png",
      description: "Tenemos más de 15 años de experiencia, brindando a nuestros huéspedes una excelente atención personalizada a la altura de sus necesidades.",
      url:"http://www.hotelespanamorteros.com/"
    },

    {
      title: "Hostal del Sol",
      address: "BV. Hipólito Irigoyen 1203",
      phone:"03562-422440",
      imageUrl: "assets/img/Hostal del Sol.png",
      description: "Ofrece a sus huéspedes una experiencia de verdadera calidad, combinando asi una atención personalizada. Un muy buen lugar para descansar.",
      url:"http://www.hostalmorteros.com.ar"
    },

  ];



  ngOnInit(): void {
  }
}
