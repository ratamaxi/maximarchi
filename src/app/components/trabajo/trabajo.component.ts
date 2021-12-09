import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TrabajosService} from '../../servicio/trabajos.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
})
export class TrabajoComponent implements OnInit {

  trabajo:any ={};

  constructor( private activatedRouter:ActivatedRoute,
              private _trabajosService:TrabajosService,

  ) 
  {
    this.activatedRouter.params.subscribe(params=> {
      console.log(params['id']);
      this.trabajo = this._trabajosService.getTrabajo(params['id']);

    })
   }

  ngOnInit(): void {
  }

}
