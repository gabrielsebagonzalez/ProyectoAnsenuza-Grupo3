import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent implements OnInit {

  isLogged: boolean;


  constructor(
    public authService: AuthService,
  ) {

    this.isLogged = authService.isLoggedIn()

  }

  ngOnInit(): void {
  }

}


