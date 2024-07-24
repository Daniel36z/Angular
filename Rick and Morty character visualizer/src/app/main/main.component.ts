import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from '../conexion-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  rutaImagen: string = '/src/assets/portal1.png';
  //si fuera una lista --> data:any[] = [];
  data:any = {}; // recibir un objeto unico no una lista


  constructor(private conexionApiService: ConexionApiService){}


  ngOnInit(): void {
    this.getData();
  }



  index:string;


  getData(): void {
    this.conexionApiService.getData(this.index).subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error al obtener datos', error);
      }
    );
  }

}
