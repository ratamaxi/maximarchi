import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CvComponent } from './components/cv/cv.component';





const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'trabajos', component: TrabajosComponent },
{ path: 'contacto', component: ContactoComponent },
{ path: 'trabajo/:id', component: TrabajoComponent},
{ path: 'buscar/:termino', component: BuscadorComponent},
{ path: 'cv', component: CvComponent},


{ path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class APP_ROUTING {}
