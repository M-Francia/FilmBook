import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {explorar} from './explorar.model';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {FichapeliculaService} from '../service/fichapelicula.service';


@Component({
  selector: 'explorar',
  templateUrl: 'app/Explorar/Explorar.component.html'
})

export class ExplorarComponent {

  private fichapelicula: fichapelicula[] ;
  private explorar: explorar[]=[];

  constructor(private fichapeliculaService : FichapeliculaService){}

  ngOnInit(){
    this.fichapeliculaService.getPeliculas().subscribe(
      peliculas => this.fichapelicula = peliculas,
      error => console.log(error)
    );
    for (var i=0; i<this.fichapelicula.length;i++){
      var e= new explorar(this.fichapelicula[i],"01/12/2013",23);
      this.explorar.push(e);
    }
    console.log(this.explorar);
  }


}
