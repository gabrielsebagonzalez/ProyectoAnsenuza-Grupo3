import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss']
})
export class GastronomiaComponent implements OnInit {
  isLogged: boolean;

  constructor(
    public authService: AuthService,
  ) {

    this.isLogged = authService.isLoggedIn()

  }

  ngOnInit(): void {
  }

}
