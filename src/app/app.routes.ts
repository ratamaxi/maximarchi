import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ContactoComponent } from './components/contacto/contacto.component';





const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'trabajos', component: HeroesComponent },
{ path: 'contacto', component: ContactoComponent },
{ path: 'heroe/:id', component: HeroeComponent},
{ path: 'buscar/:termino', component: BuscadorComponent},

{ path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class APP_ROUTING {}
