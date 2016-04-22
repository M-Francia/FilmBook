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


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [CabeceraComponent,MenuLateralComponent,FooterComponent,FichaPeliculaComponent,ExplorarComponent,
        NovedadesComponent,PerfilComponent,TimelineComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/fichapelicula', name: 'Fichapelicula', component:FichaPeliculaComponent},
    {path: '/novedades', name: 'Novedades', component:NovedadesComponent},
    {path: '/timeline', name: 'Timeline', component:TimelineComponent},
    {path: '/explorar', name: 'Explorar', component:ExplorarComponent},
    {path: '/perfil', name: 'Perfil', component:PerfilComponent},
    {path: '/admnistracion', name: 'Administracion', component:AdministracionComponent,useAsDefault:true},
    {path: '/editarperfil', name: 'EditarPerfil', component:EditarPerfilComponent},
])

export class AppComponent {

  private pelicula ;
  private usuario = "";
  private esUsuario = false;

	usuarioActivo(myuser:string){
		this.usuario = myuser;
    this.esUsuario = !this.esUsuario;
  }

	}
