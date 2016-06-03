import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuLateralComponent} from './menulateral.component.ts';
import {FooterComponent} from './footer.component.ts';
import {TimelineComponent} from './Timeline/timeline.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FichaPeliculaComponent} from './Fichapelicula/fichapelicula.component.ts';
import {NovedadesComponent} from './Novedades/novedades.component.ts';
import {ExplorarComponent} from './Explorar/explorar.component.ts';
import {PerfilComponent} from './Perfil/perfil.component.ts';
import {AdministracionComponent} from './Administracion/admin.component.ts';
import {EditarPerfilComponent} from './Editarperfil/editarperfil.component.ts';
import {RegistroComponent} from './Registro/registro.component.ts';
import {FichapeliculaService} from './service/fichapelicula.service';
import {NovedadesService} from './service/novedades.service';
import {PerfilService} from './service/perfil.service';
import {UsuariosService} from './service/usuarios.service';


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [CabeceraComponent,MenuLateralComponent,FooterComponent,FichaPeliculaComponent,ExplorarComponent,
        NovedadesComponent,PerfilComponent,TimelineComponent,ROUTER_DIRECTIVES],
        providers:[FichapeliculaService,NovedadesService,PerfilService,UsuariosService]
})
@RouteConfig([
    {path: '/fichapelicula/:id', name: 'Fichapelicula', component:FichaPeliculaComponent},
    {path: '/novedades', name: 'Novedades', component:NovedadesComponent},
    {path: '/timeline', name: 'Timeline', component:TimelineComponent,useAsDefault:true},
    {path: '/explorar', name: 'Explorar', component:ExplorarComponent},
    {path: '/perfil/:nombre', name: 'Perfil', component:PerfilComponent},
    {path: '/administracion', name: 'Administracion', component:AdministracionComponent},
    {path: '/editarperfil', name: 'EditarPerfil', component:EditarPerfilComponent},
    {path: '/registro', name: 'Registro', component:RegistroComponent},
])

export class AppComponent {



	}
