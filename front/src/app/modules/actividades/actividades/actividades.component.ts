import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  isLogged: boolean;

  constructor(
    public authService: AuthService,
  ) {

    this.isLogged = authService.isLoggedIn()

  }
  ngOnInit(): void {
  }

}
