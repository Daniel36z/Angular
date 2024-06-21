import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from '../conexion-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  title= 'titulo';
  data:any = {};

  constructor(private conexionApiService: ConexionApiService){}


  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.conexionApiService.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('Error al obtener datos', error);
      }
    );
  }

  



}
