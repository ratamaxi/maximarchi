import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trabajo-tarjeta',
  templateUrl: './trabajo-tarjeta.component.html',
  styles: [
  ]
})
export class TrabajoTarjetaComponent implements OnInit {

@Input() trabajo:any;
@Input() i:number;
termino:string;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public verTrabajo( ){

    console.log(this.i);
    this.router.navigate(['trabajo',this.i])

  }

  

}
