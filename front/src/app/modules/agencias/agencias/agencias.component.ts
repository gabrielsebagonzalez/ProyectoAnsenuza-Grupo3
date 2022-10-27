import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.scss']
})
export class AgenciasComponent implements OnInit {
  isLogged: boolean;

  constructor(
    public authService: AuthService,
  ) {

    this.isLogged = authService.isLoggedIn()

  }
  ngOnInit(): void {
  }

}
