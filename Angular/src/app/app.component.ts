import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuLateralComponent} from './menulateral.component.ts';
import {TimelineComponent} from './timeline.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [CabeceraComponent,MenuLateralComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name:'Timeline',component:TimelineComponent,useAsDefault:true}
])

export class AppComponent {
	private usuario = "";

	usuarioActivo(myuser:string){
		this.usuario = myuser;
	}
}
