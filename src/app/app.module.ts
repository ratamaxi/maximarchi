import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { TrabajosService } from './servicio/trabajos.service';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TrabajoTarjetaComponent } from './components/trabajo-tarjeta/trabajo-tarjeta.component';
import { BotonesComponent } from './components/botones/botones.component';
import { TarjetaDesplazadasComponent } from './components/tarjeta-desplazadas/tarjeta-desplazadas.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarcasCarouselComponent } from './components/marcas-carousel/marcas-carousel.component';
import { ContactoHomeComponent } from './components/contacto-home/contacto-home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TrabajosComponent,
    TrabajoComponent,
    BuscadorComponent,
    TrabajoTarjetaComponent,
    BotonesComponent,
    TarjetaDesplazadasComponent,
    FooterComponent,
    MarcasCarouselComponent,
    ContactoHomeComponent,
    ContactoComponent,
    CarrouselComponent,
    CvComponent,
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
