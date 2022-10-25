import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/api.service';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  url = 'alojamientos'

  constructor(
    private http: ApiService
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
  typeAlojamientoId: number;
  imageURL: string;
  description: string
}


