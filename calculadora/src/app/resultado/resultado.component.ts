import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  @Input() elnumero1?:string;
  @Input() elnumero2?:string;
  resultado:number = 0;

  f_sumar(){
    this.resultado = Number(this.elnumero1) + Number(this.elnumero2);
  }


}
