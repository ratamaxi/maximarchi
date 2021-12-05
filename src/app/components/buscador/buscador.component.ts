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

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRouter:ActivatedRoute,
              private _heroeServicio:TrabajosService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe (params => {
    this.termino = (params['termino'])
      this.heroes = this._heroeServicio.buscarHeroes(params ['termino']);
      console.log(this.heroes)
    })
  }

}
