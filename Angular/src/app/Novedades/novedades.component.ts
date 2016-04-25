import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {novedad} from '../Novedades/novedad.model';
import {NovedadesService} from '../service/novedades.service';
import {RouteParams, Router} from 'angular2/router';


@Component({
  selector: 'novedades',
  templateUrl: 'app/Novedades/Novedades.component.html',
  providers: [NovedadesService]
})

export class NovedadesComponent {

    private novedades: novedad[];
    private mes:string;
    private año: novedad[][];
constructor(private novedadesService : NovedadesService,private _router:Router, routeParams:RouteParams){}

ngOnInit(){
  this.novedades = this.novedadesService.getNovedades(this.mes);//añadir parametro bien
}



}
