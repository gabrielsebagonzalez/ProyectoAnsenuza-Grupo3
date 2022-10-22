import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  url = 'https://localhost:4001/api/alojamientos'

  constructor(
    private http: HttpClient
  ) { }

  public getAlojamiento(): Observable<Alojamiento[]> {
    return this.http.get<Alojamiento[]>(this.url);
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
