import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { TrabajosService } from './servicio/trabajos.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { BotonesComponent } from './components/botones/botones.component';
import { TarjetaDesplazadasComponent } from './components/tarjeta-desplazadas/tarjeta-desplazadas.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarcasCarouselComponent } from './components/marcas-carousel/marcas-carousel.component';
import { ContactoHomeComponent } from './components/contacto-home/contacto-home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    BotonesComponent,
    TarjetaDesplazadasComponent,
    FooterComponent,
    MarcasCarouselComponent,
    ContactoHomeComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    TrabajosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
