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

  /* dataCards = [
    {
      title: "Sarmiento",
      address: "Sarmiento 131",
      phone: "03562-405201",
      imageUrl: "assets/img/Sarmiento.png",
      description: "Texto de ejemplo para card",
      url:"https://www.facebook.com/HotelSarmiento"
    },


    {
      title: "Constantino",
      address:"Boulevard 9 de Julio 833",
      phone: "03562-567955",
      imageUrl: "assets/img/Constantino.png",
      description: "Texto de ejemplo para card",
      url:"https://hotelconstantino.negocio.site/"
    },

    {
      title: "España",
      address:"España 1466",
      phone:"03562-402714",
      imageUrl: "assets/img/Espana.png",
      description: "Texto de ejemplo para card",
      url:"http://www.hotelespanamorteros.com/"
    },

    {
      title: "Hostal del Sol",
      address: "BV. Hipólito Irigoyen 1203",
      phone:"03562-422440",
      imageUrl: "assets/img/Hostal del Sol.png",
      description: "Texto de ejemplo para card",
      url:"http://www.hostalmorteros.com.ar"
    },

  ]; */



  ngOnInit(): void {
  }
}
