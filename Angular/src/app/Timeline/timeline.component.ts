import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {comentario} from '../Fichapelicula/comentario.model';
import {usuario} from '../Fichapelicula/usuario.model';
import {hashtag} from '../Fichapelicula/hashtag.model';
import {lista} from '../Perfil/lista.model';
import {FichapeliculaService} from '../service/fichapelicula.service';



@Component({
  selector: 'timeline',
  templateUrl: 'app/Timeline/timeline.component.html'
})

export class TimelineComponent {

  private fichapelicula: fichapelicula[] ;

  constructor(private fichapeliculaService : FichapeliculaService){}

  ngOnInit(){
    this.fichapeliculaService.getPeliculas().subscribe(
      peliculas => this.fichapelicula = peliculas,
      error => console.log(error)
    );
  }

}
