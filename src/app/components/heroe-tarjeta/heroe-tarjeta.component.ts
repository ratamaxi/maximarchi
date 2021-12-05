import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

@Input() heroe:any;
@Input() i:number;
termino:string;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public verHeroe( ){

    
    console.log(this.i);
    this.router.navigate(['heroe',this.i])

  }

  

}
