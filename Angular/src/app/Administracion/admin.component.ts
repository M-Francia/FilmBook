import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {FichapeliculaService} from '../service/fichapelicula.service';
import {FichaPeliculaComponent} from '../Fichapelicula/fichapelicula.component.ts';


@Component({
  selector: 'administracion',
  templateUrl:'app/administracion/admin.component.html',
  directives:[FichaPeliculaComponent,ROUTER_DIRECTIVES],
  providers : [FichapeliculaService],
})

export class AdministracionComponent{

  private peliculas :fichapelicula;
  private nuevapelicula: boolean;

  constructor(private peliculasService : FichapeliculaService, private _router:Router, private _routeParams:RouteParams){}

 ngOnInit(){
    let id=+this._routeParams.get("id");
    if(id){
      this.peliculasService.getPelicula(id).subscribe(
        fichapelicula => this.peliculas = fichapelicula,
        error => console.error(error)
      );
      this.nuevapelicula = false;
    } else {
      this.peliculas = new fichapelicula(undefined,'','',undefined,'','',undefined,'','','','','','','');
      this.nuevapelicula = true;
    }
    console.log(this.peliculas);

  }

  save() {
    this.peliculasService.savePelicula(this.peliculas);
    window.history.back();
  }

  /*/ngOnInit(){

    //  this.peliculas = this.peliculasService.getPeliculas(); [routerLink]="['Fichapelicula',{nombre:pelicula.titulo}]"
  }*/

}
