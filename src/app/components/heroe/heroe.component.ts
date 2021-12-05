import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TrabajosService} from '../../servicio/trabajos.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any ={};

  constructor( private activatedRouter:ActivatedRoute,
              private _trabajosService:TrabajosService,

  ) 
  {
    this.activatedRouter.params.subscribe(params=> {
      console.log(params['id']);
      this.heroe = this._trabajosService.getHeroe(params['id']);

    })
   }

  ngOnInit(): void {
  }

}
