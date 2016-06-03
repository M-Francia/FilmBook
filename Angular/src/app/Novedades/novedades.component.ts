import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {novedad} from '../Novedades/novedad.model';
import {NovedadesService} from '../service/novedades.service';
import {RouteParams, Router} from 'angular2/router';
import {FichapeliculaService} from '../service/fichapelicula.service';


@Component({
  selector: 'novedades',
  templateUrl: 'app/Novedades/Novedades.component.html',
})

export class NovedadesComponent {

    private primermesnovedades: novedad[];
    private segundomesnovedades: novedad[];
    private tercermesnovedades: novedad[];

constructor(private router:Router,private novedadesService : NovedadesService,private _routeParams:RouteParams){}

ngOnInit(){
  this.novedadesService.getPrimermesPeliculas().subscribe(
    peliculas => this.primermesnovedades = peliculas,
    error => console.log(error))

  this.novedadesService.getSegundomesPeliculas().subscribe(
    peliculas => this.segundomesnovedades = peliculas,
    error => console.log(error))

  this.novedadesService.getTercermesPeliculas().subscribe(
    peliculas => this.tercermesnovedades = peliculas,
    error => console.log(error))
  }

  goToInicio(){
    let link =['Timeline'];
   this.router.navigate(link);
}
}
