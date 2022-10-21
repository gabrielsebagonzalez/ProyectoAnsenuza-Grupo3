import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  url = 'https://5fbd3e443f8f90001638ce90.mockapi.io/User'

  constructor(
    private http: HttpClient
  ) { }

  public getAlojamiento(): Observable<Alojamiento[]> {
    return this.http.get<Alojamiento[]>('https://5fbd3e443f8f90001638ce90.mockapi.io/User');
  }

  public saveAlojamiento(aloj: Alojamiento): Observable<Alojamiento> {
    return this.http.post<Alojamiento>(this.url, aloj)
  }
}


export interface Alojamiento {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  web: string;
  typeAlojamientoId: string;
  imageURL: string;
  description: string
}
