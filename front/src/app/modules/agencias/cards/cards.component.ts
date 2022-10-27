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
      title: "MUTUAL TFDM",
      address: "Bv. 25 de Mayo 256",
      phone: "(03562) 425200",
      imageUrl: "assets/img/turismo_tfdm.jpg",
      url:"http://mutualdeltiro.com.ar/turismo/",
    },


    {
      title: "Turismo 9 de Julio",
      address:"San Martin 295",
      phone: "03562 40-4455",
      imageUrl: "assets/img/t9Tours.png",
      url:"https://www.facebook.com/Turismo9/",
    },
  ];



  ngOnInit(): void {
  }
}
