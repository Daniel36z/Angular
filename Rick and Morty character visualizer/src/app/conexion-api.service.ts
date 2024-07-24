import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; //primer paso



@Injectable({
  providedIn: 'root'
})

export class ConexionApiService {

  constructor(private http: HttpClient) { }//second


  public getData(datoEntrante: string): Observable<any> { //third
    return this.http.get<any>('https://rickandmortyapi.com/api/character/' + datoEntrante);
  }

}
