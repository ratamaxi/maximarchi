import { Injectable } from '@angular/core';

@Injectable()



export class TrabajosService{

  private socios:Socios[] = [
    {
      nombre: 'Carrefour',
      img:'assets/img/socios/carrefour.jpg',
    },
    {
      nombre: 'Cordial',
      img:'assets/img/socios/cordial.jpg',
    },
    {
      nombre: 'DirectTv',
      img:'assets/img/socios/directTv.jpg',
    },
    {
      nombre: 'Musimundo',
      img:'assets/img/socios/musimundo.jpg',
    },
    {
      nombre: 'Naldo',
      img:'assets/img/socios/naldo.jpg',
    },
    {
      nombre: 'BNP Paribas Cardif',
      img:'assets/img/socios/bnp.jpg',
    },
    {
      nombre: 'Peugeot',
      img:'assets/img/socios/peugeot.jpg',
    },
    {
      nombre: 'Citroen',
      img:'assets/img/socios/citroen.jpg',
    },

    {
      nombre: 'DS',
      img:'assets/img/socios/ds.jpg',
    },
    {
      nombre: 'Nikitos',
      img:'assets/img/socios/nikitos.jpg',
    },
    {
      nombre: 'Efectivo Si',
      img:'assets/img/socios/efectivoSi.jpg',
    },
    {
      nombre: 'La Anonima',
      img:'assets/img/socios/anonima.jpg',
    },
    {
      nombre: 'Assist Card',
      img:'assets/img/socios/assistCard.jpg',
    },
  ];

    private trabajos:Trabajo[] = [
     

        {
          nombre: "Lucha contra el cancer, Carrefour",
          bio: "Se realizó una multi campaña conmemorando el dia internacional de la lucha contra el cancer. Fué una serie de piezas entre ellas publicidad para el Facebook, Instagram y Emailing.",
          img: "assets/img/face-carrefour.jpg",
          casa: "Carrefour",
          idx: 0,
        },

        {
          nombre: "Cartel informativa Garantía Activa, Carrefour",
          bio: "En los puestos de ventas de electrodomésticos de Carrefour se empleó esta afiche informativo con intención de que contraten la Garantía Extendida.",
          img: "assets/img/carrefour-carteleria.jpg",
          casa: "Carrefour",
          idx: 1,

        },

        {
          nombre: "Banner Facebook Tecnología Pritegida, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/carrefour-banner1.jpg",
          casa: "Carrefour",
          idx: 2,

        },

        {
          nombre: "Banner Google Hogar Pritegido, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/carrefour-banner2.jpg",
          casa: "Carrefour",
          idx: 3,

        },

        {
          nombre: "Gif animado, Carrefour",
          bio: "Con los productos que ofrece Carrefour, se implementan campañas masivas por medio de Facebook, Google Ads, Instagram, Mailings, etc.",
          img: "assets/img/gif-carrefour.gif",
          casa: "Carrefour",
          idx: 4,

        },

        {
          nombre: "Cartel informativa Robo portable, Carrefour",
          bio: "En los puestos de ventas de electrodomésticos de Carrefour se empleó esta afiche informativo con intención de que contraten el seguro de Robo portable.",
          img: "assets/img/carrefour-carteleria2.jpg",
          casa: "Carrefour",
          idx: 5,

        },

        {
          nombre: "Cartas legales, Carrefour",
          bio: "Cuando se ajusta unas de las póliza del seguro modificando su valor o cambiando algunos de los puntos de la cobertura, se manda de forma masiva las cartas para informar a sus usuarios de las nuevas modificaciones.",
          img: "assets/img/carrefour-cartas.jpg",
          casa: "Carrefour",
          idx: 6,

        },

        {
          nombre: "Tríptico, Carrefour",
          bio: "En los puntos de ventas se entregaba de forma informativa a los clientes las distintas coberturas que ofrece Carrefour Servicios.",
          img: "assets/img/carrefour-triptico.jpg",
          casa: "Carrefour",
          idx: 7,

        },

        {
          nombre: "Pieza Digital, Carrefour",
          bio: "Como estrategia comercial, el equipo de Marketing de Carrefour se les ocurrió hacer una pieza gráfica para alentar la protección de los útiles escolares y las pertenencias de los alumnos en el primer día de clases.",
          img: "assets/img/carrefour-mailing.jpg",
          casa: "Carrefour",
          idx: 8,

        },

        {
          nombre: "Email, Carrefour",
          bio: "De forma masiva se envia a los contactos de Carrefour alguna pieza informativa, en este caso para contar sobre una de sus coberturas.",
          img: "assets/img/carrefour-email.jpg",
          casa: "Carrefour",
          idx: 9,

        },

        {
          nombre: "Pieza Gráfica, Cordial",
          bio: ".",
          img: "assets/img/cordial-grafica.jpg",
          casa: "Cordial",
          idx: 10,

        },

        {
          nombre: "Email, Direct Tv",
          bio: ".",
          img: "assets/img/directv-email.jpg",
          casa: "DirectTv",
          idx: 11,

        },

        {
          nombre: "Email, Direct Tv",
          bio: ".",
          img: "assets/img/directv-email2.jpg",
          casa: "DirectTv",
          idx: 12,
        },

        {
          nombre: "Grafica, Efectivo Si",
          bio: ".",
          img: "assets/img/efectivoSi-grafica.jpg",
          casa: "Efectivo Si",
          idx: 13,

        },

        {
          nombre: "Email, Falabella",
          bio: ".",
          img: "assets/img/falabella-email.jpg",
          casa: "Falabella",
          idx: 14,

        },

        {
          nombre: "Infografía, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-infografia.jpg",
          casa: "Musimundo",
          idx: 15,

        },

        {
          nombre: "Gif Pagina Web, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-gif.gif",
          casa: "Musimundo",
          idx: 16,

        },

        {
          nombre: "Whats App Publicidad, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-whats1.jpg",
          casa: "Musimundo",
          idx: 17,

        },

        {
          nombre: "Whats App Publicidad, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-whats2.jpg",
          casa: "Musimundo",
          idx: 18,

        },

        {
          nombre: "Tarjeta, Musimundo",
          bio: ".",
          img: "assets/img/musimundo-tarjeta.jpg",
          casa: "Musimundo",
          idx: 19,

        },

        {
          nombre: "Web, Naldo",
          bio: ".",
          img: "assets/img/naldo-web.jpg",
          casa: "Naldo",
          idx: 20,

        },

        {
          nombre: "Gráfica, Naldo",
          bio: ".",
          img: "assets/img/naldo-grafica.jpg",
          casa: "Naldo",
          idx: 21,

        },

        {
          nombre: "Mailing, Psa",
          bio: ".",
          img: "assets/img/psa-email.png",
          casa: "Psa",
          idx: 22,

        },

        {
          nombre: "Gráfica, Cardif",
          bio: ".",
          img: "assets/img/cardif-hogar.jpg",
          casa: "BNP Paribas Cardif",
          idx: 23,

        },

        {
          nombre: "Logotipo, Cardif",
          bio: ".",
          img: "assets/img/cardif-logo.jpg",
          casa: "BNP Paribas Cardif",
          idx: 24,

        },

        {
          nombre: "Grafica Evento interno, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento.jpg",
          casa: "BNP Paribas Cardif",
          idx: 25,

        },

        {
          nombre: "Grafica Evento interno, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento2.jpg",
          casa: "BNP Paribas Cardif",
          idx: 26,

        },

        {
          nombre: "Infografía, Cardif",
          bio: ".",
          img: "assets/img/cardif-infografia.jpg",
          casa: "BNP Paribas Cardif",
          idx: 27,

        },

        {
          nombre: "Infografía, Cardif",
          bio: ".",
          img: "assets/img/cardif-infografia2.jpg",
          casa: "BNP Paribas Cardif",
          idx: 28,

        },

        {
          nombre: "Invitación interna, Cardif",
          bio: ".",
          img: "assets/img/cardif-evento3.jpg",
          casa: "BNP Paribas Cardif",
          idx: 29,

        },

        {
          nombre: "Invitación, Cardif",
          bio: ".",
          img: "assets/img/cardif-invitacion.jpg",
          casa: "BNP Paribas Cardif",
          idx: 30,

        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo.jpg",
          casa: "BNP Paribas Cardif",
          idx: 31,

        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo2.jpg",
          casa: "BNP Paribas Cardif",
          idx: 32,

        },

        {
          nombre: "Tarjeta Saludos, Cardif",
          bio: ".",
          img: "assets/img/cardif-saludo3.jpg",
          casa: "BNP Paribas Cardif",
          idx: 33,

        },

        {
          nombre: "Tarjeta, Citroen",
          bio: ".",
          img: "assets/img/citroen-tarjeta.jpg",
          casa: "Citroen",
          idx: 34,

        },

        {
          nombre: "Tarjeta, Peugeot",
          bio: ".",
          img: "assets/img/peugeot-tarjeta.jpg",
          casa: "Peugeot",
          idx: 35,

        },

        {
          nombre: "Tarjeta, Ds",
          bio: ".",
          img: "assets/img/ds-tarjeta.jpg",
          casa: "DS",
          idx: 36,

        },
        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging.jpg",
          casa: "Nikitos",
          idx: 37,

        },

        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging2.jpg",
          casa: "Nikitos",
          idx: 38,

        },

        {
          nombre: "Packaging, Nikitos",
          bio: ".",
          img: "assets/img/nikitos-packaging3.jpg",
          casa: "Nikitos",
          idx: 39,
        },

        {
          nombre: "Banner para góndola Supermercado",
          bio: "",
          img: "assets/img/bannerAnonima.jpg",
          casa: "La Anonima",
          idx: 40,
        },
        {
          nombre: "Banner para góndola Supermercado",
          bio: "",
          img: "assets/img/bannerAnonima2.jpg",
          casa: "La Anonima",
          idx: 41,
        },

        {
          nombre: "Banner para góndola Supermercado",
          bio: "",
          img: "assets/img/bannerAnonima3.jpg",
          casa: "La Anonima",
          idx: 42,
        },

        {
          nombre: "Piezas WhatsApp fuerza de ventas",
          bio: "",
          img: "assets/img/cordialWhatsApp.jpg",
          casa: "Cordial",
          idx: 43,
        },
        {
          nombre: "Piezas WhatsApp fuerza de ventas",
          bio: "",
          img: "assets/img/cordialWhatsApp2.jpg",
          casa: "Cordial",
          idx: 44,
        },
        {
          nombre: "Piezas WhatsApp fuerza de ventas",
          bio: "",
          img: "assets/img/cordialWhatsApp3.jpg",
          casa: "Cordial",
          idx: 45,
        },

        {
          nombre: "Campaña digital banner",
          bio: "",
          img: "assets/img/assistCard.jpg",
          casa: "Assist Card",
          idx: 46,
        },

        {
          nombre: "Campaña digital banner",
          bio: "",
          img: "assets/img/assistCard2.jpg",
          casa: "Assist Card",
          idx: 47,
        },

        {
          nombre: "Campaña digital banner",
          bio: "",
          img: "assets/img/assistCard3.jpg",
          casa: "Assist Card",
          idx: 48,
        },
        {
          nombre: "Campaña digital banner",
          bio: "",
          img: "assets/img/assistCard4.jpg",
          casa: "Assist Card",
          idx: 49,
        },
        {
          nombre: "Campaña empleabilidad Musimundo",
          bio: "",
          img: "assets/img/musimundoEmpleabilidad.jpg",
          casa: "Musimundo",
          idx: 50,
        },

        {
          nombre: "Campaña empleabilidad Musimundo",
          bio: "",
          img: "assets/img/musimundoEmpleabilidad2.jpg",
          casa: "Musimundo",
          idx: 51,
        },


      






      ];
   
   
    constructor() {
        console.log("Servicio listo para usar")
    }

    public getTrabajos(){
        return this.trabajos;
    }

    public getSocios(){
      return this.socios;
    }

    getTrabajo( i:string){
      return this.trabajos[i]
    }

    getTrabajosSocio(socio:string){
      let trabajosSocio= [];
      for(let i = 0 ; i < this.trabajos.length ; i++){
        if(socio == this.trabajos[i].casa){
              trabajosSocio.push(this.trabajos[i])
              console.log(trabajosSocio)
        }
    }
    return trabajosSocio;
    }

  
    buscarTrabajos(termino:string){
      let trabajosArr:Trabajo[]=[];
      termino = termino.toLowerCase();

      for(let i = 0; i< this.trabajos.length; i++){
        let trabajo = this.trabajos[i];
        let nombre = trabajo.nombre.toLowerCase();
        if (nombre.indexOf(termino)>= 0){
          trabajo.idx=i;
          trabajosArr.push(trabajo)
        }
      }
      return trabajosArr;
    }
  
}

export interface Trabajo{

    nombre:String; 
      bio: String;
      img: String;
      casa: String;
      idx?:number;
}

export interface Socios {
  nombre:String;
  img: String;
}


