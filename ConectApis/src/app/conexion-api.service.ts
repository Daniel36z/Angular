import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; //primer paso
import { MainComponent } from './main/main.component';


@Injectable({
  providedIn: 'root'
})

export class ConexionApiService  {



  private apiUrl = 'https://rickandmortyapi.com/api/character/' + 200; //paso 2
  constructor(private http: HttpClient){ } //paso

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
