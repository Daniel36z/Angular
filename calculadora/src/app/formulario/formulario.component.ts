import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() elnumero1?:string;
  @Input() elnumero2?:string;

  numero_uno(event:Event){
    this.elnumero1 = (<HTMLInputElement>event.target).value;
  }

  numero_dos(event:Event){
    this.elnumero2= (<HTMLInputElement>event.target).value;
  }

  @Output() v1 = new EventEmitter<string>();
  enviaruno(){
    this.v1.emit(this.elnumero1);
  }

  @Output() v2 = new EventEmitter<string>();
  enviardos(){
    this.v2.emit(this.elnumero2);
  }

}
