import { Component, OnInit } from '@angular/core';
import { TrabajosService, Trabajo, Socios } from '../../servicio/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styles: [
  ]
})
export class TrabajosComponent implements OnInit {

  trabajos:Trabajo[]=[];
  socios:Socios[]=[];

  trabajoSocio: any;


  constructor( private _trabajosService:TrabajosService) {


   }

  ngOnInit(): void {

    this.trabajos = this._trabajosService.getTrabajos();
    this.socios = this._trabajosService.getSocios();
  }

  obtenerTrabajosSocio(socio:string){
    this.trabajoSocio = this._trabajosService.getTrabajosSocio(socio);
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });

  }

  

}
