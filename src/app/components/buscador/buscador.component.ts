import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajosService } from '../../servicio/trabajos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  trabajos:any[] = [];
  termino:string;

  constructor( private activatedRouter:ActivatedRoute,
              private _trabajoServicio:TrabajosService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe (params => {
    this.termino = (params['termino'])
      this.trabajos = this._trabajoServicio.buscarTrabajos(params ['termino']);
      console.log(this.trabajos)
    })
  }

}
