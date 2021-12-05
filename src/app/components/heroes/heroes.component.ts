import { Component, OnInit } from '@angular/core';
import { TrabajosService, Heroe } from '../../servicio/trabajos.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];


  constructor( private _trabajosService:TrabajosService) {


   }

  ngOnInit(): void {

    this.heroes = this._trabajosService.getHeroes();
    console.log(this.heroes);
  }

  

}
