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
  templateUrl: 'app/Timeline/timeline.component.html',
  providers:[FichapeliculaService],
  directives:[ROUTER_DIRECTIVES]
})

export class TimelineComponent {

  private fichapelicula: fichapelicula[] ;
  private recomendadas: fichapelicula[];

  constructor(private fichapeliculaService : FichapeliculaService){}

  ngOnInit(){
    this.fichapeliculaService.getPeliculas().subscribe(
      peliculas => this.fichapelicula = peliculas,
      error => console.log(error))

    this.fichapeliculaService.getPeliculasRecomendadas().subscribe(
        recomendadas => this.recomendadas = recomendadas,
        error => console.log(error)
      )
    console.log(this.fichapelicula)
  }

}
