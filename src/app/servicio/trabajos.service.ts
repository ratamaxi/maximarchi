import { Injectable } from '@angular/core';

@Injectable()

export class TrabajosService{

    private heroes:Heroe[] = [
     

        {
          nombre: "Lucha contra el cancer, Carrefour",
          bio: "Se realizó una multi campaña conmemorando el dia internacional de la lucha contra el cancer. Fué una serie de piezas entre ellas publicidad para el Facebook, Instagram y Emailing.",
          img: "assets/img/face-carrefour.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Cartel informativa Garantía Activa, Carrefour",
          bio: "En los puestos de ventas de electrodomésticos de Carrefour se empleó esta afiche informativo con intención de que contraten la Garantía Extendida.",
          img: "assets/img/carrefour-carteleria.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Banner Facebook Tecnología Pritegida, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/carrefour-banner1.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Banner Google Hogar Pritegido, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/carrefour-banner2.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Gif animado, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/gif-carrefour.gif",
          casa: "Carrefour"
        },

        {
          nombre: "Cartel informativa Robo portable, Carrefour",
          bio: "En los puestos de ventas de electrodomésticos de Carrefour se empleó esta afiche informativo con intención de que contraten el seguro de Robo portable.",
          img: "assets/img/carrefour-carteleria2.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Cartas legales, Carrefour",
          bio: "Cuando se ajusta unas de las póliza del seguro modificando su valor o cambiando algunos de los puntos de la cobertura, se manda de forma masiva las cartas para informar a sus usuarios de las nuevas modificaciones.",
          img: "assets/img/carrefour-cartas.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Tríptico, Carrefour",
          bio: "En los puntos de ventas se entregaba de forma informativa a los clientes las distintas coberturas que ofrece Carrefour Servicios.",
          img: "assets/img/carrefour-triptico.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Pieza Digital, Carrefour",
          bio: "Como estrategia comercial, el equipo de Marketing de Carrefour se les ocurrió hacer una pieza gráfica para alentar la protección de los útiles escolares y las pertenencias de los alumnos en el primer día de clases.",
          img: "assets/img/carrefour-mailing.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Email, Carrefour",
          bio: "De forma masiva se envia a los contactos de Carrefour alguna pieza informativa, en este caso para contar sobre una de sus coberturas.",
          img: "assets/img/carrefour-email.jpg",
          casa: "Carrefour"
        },

        {
          nombre: "Pieza Gráfica, Cordial",
          bio: ".",
          img: "assets/img/cordial-grafica.jpg",
          casa: "Cordial"
        },

        {
          nombre: "Email, Direct Tv",
          bio: ".",
          img: "assets/img/directv-email.jpg",
          casa: "Cordial"
        },

        {
          nombre: "Email, Direct Tv",
          bio: ".",
          img: "assets/img/directv-email2.jpg",
          casa: "Direct Tv"
        },

        {
          nombre: "Grafica, Efectivo Si",
          bio: ".",
          img: "assets/img/efectivoSi-grafica.jpg",
          casa: "Efectivo Si"
        },

        {
          nombre: "Email, Falabella",
          bio: ".",
          img: "assets/img/falabella-email.jpg",
          casa: "Falabella"
        },

        {
          nombre: "Infografía, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-infografia.jpg",
          casa: "Musimundo"
        },

        {
          nombre: "Gif Pagina Web, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-gif.gif",
          casa: "Musimundo"
        },

        {
          nombre: "Whats App Publicidad, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-whats1.jpg",
          casa: "Musimundo"
        },

        {
          nombre: "Whats App Publicidad, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-whats2.jpg",
          casa: "Musimundo"
        },

        {
          nombre: "Tarjeta, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-tarjeta.jpg",
          casa: "Musimundo"
        },

        {
          nombre: "Web, Naldo",
          bio: ".",
          img: "assets/img/naldo-web.jpg",
          casa: "Naldo"
        },

        {
          nombre: "Gráfica, Naldo",
          bio: ".",
          img: "assets/img/naldo-grafica.jpg",
          casa: "Naldo"
        },

        {
          nombre: "Mailing, Psa",
          bio: ".",
          img: "assets/img/psa-email.png",
          casa: "Naldo"
        },

        {
          nombre: "Gráfica, Cardif",
          bio: ".",
          img: "assets/img/cardif-hogar.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Logotipo, Cardif",
          bio: ".",
          img: "assets/img/cardif-logo.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Grafica Evento interno, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Grafica Evento interno, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento2.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Infografía, Cardif",
          bio: ".",
          img: "assets/img/cardif-infografia.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Infografía, Cardif",
          bio: ".",
          img: "assets/img/cardif-infografia2.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Invitación interna, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento3.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Invitación, Cardif",
          bio: ".",
          img: "assets/img/cardif-invitacion.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo2.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo3.jpg",
          casa: "Cardif"
        },

        {
          nombre: "Tarjeta, Citroen",
          bio: ".",
          img: "assets/img/citroen-tarjeta.jpg",
          casa: "Citroen"
        },

        {
          nombre: "Tarjeta, Peugeot",
          bio: ".",
          img: "assets/img/peugeot-tarjeta.jpg",
          casa: "Peugeot"
        },

        {
          nombre: "Tarjeta, Ds",
          bio: ".",
          img: "assets/img/ds-tarjeta.jpg",
          casa: "Ds"
        },

        {
          nombre: "Logotipo, Facultad Uba",
          bio: ".",
          img: "assets/img/facultad-logo.jpg",
          casa: "Uba"
        },

        {
          nombre: "Identidad, Facultad Uba",
          bio: ".",
          img: "assets/img/facultad-identidad.jpg",
          casa: "Uba"
        },

        {
          nombre: "Infografía, Facultad Uba",
          bio: ".",
          img: "assets/img/facultad-infografia.jpg",
          casa: "Uba"
        },

        {
          nombre: "Diseño Industrial, Facultad Uba",
          bio: ".",
          img: "assets/img/facultad-diseñoIndustrial.jpg",
          casa: "Uba"
        },

        {
          nombre: "Logotipo, Angema",
          bio: ".",
          img: "assets/img/angema-logotipo.jpg",
          casa: "Angema"
        },

        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging.jpg",
          casa: "Nikitos"
        },

        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging2.jpg",
          casa: "Nikitos"
        },

        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging3.jpg",
          casa: "Nikitos"
        },


      






      ];
   
   
    constructor() {
        console.log("Servicio listo para usar")
    }

    public getHeroes(){
        return this.heroes;
    }

    getHeroe( i:string){
      return this.heroes[i]
    }

  
    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino = termino.toLowerCase();

      for(let i = 0; i< this.heroes.length; i++){
        let heroe = this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();
        if (nombre.indexOf(termino)>= 0){
          heroe.idx=i;
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
  
}

export interface Heroe{

    nombre:String; 
      bio: String;
      img: String;
      casa: String;
      idx?:number;
}

