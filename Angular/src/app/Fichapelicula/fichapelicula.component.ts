import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from './fichapelicula.model';
import {comentario} from './comentario.model';
import {usuario} from './usuario.model';
import {hashtag} from './hashtag.model';
import {FichapeliculaService} from '../service/fichapelicula.service';
import {ComentariosService} from '../service/comentarios.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'fichapelicula',
  templateUrl: 'app/Fichapelicula/fichapelicula.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers:[FichapeliculaService]
})

export class FichaPeliculaComponent {

  private peliculas: fichapelicula;
  constructor(private fichapeliculaService : FichapeliculaService,private _routeParams:RouteParams){

  }

  ngOnInit(){
    let id=+this._routeParams.get("id");
    this.fichapeliculaService.getPelicula(id).subscribe(
      peliculas => this.peliculas = peliculas,
      error => console.log(error)
    )
  }

  like(){
    //this.fichapeliculaService.LikePelicula(this.peliculas.titulo);
  }
  enviar(){

  }
  // (click)="showEtiquetas"
  //showEtiquetas(){
    //console.log(this.fichapelicula.etiqueta);
//  }
  añadirwl(){

  }
  añadirlista(usuario:usuario,pelicula:fichapelicula){
  //  this.fichapeliculaService.getUsuario(usuario).addPelicula(pelicula.arraywathlist);
    //le paso el usuario y la pelicula que es get usuario.addPelicula(w);

  }
  recomendar(){

  }

  }
