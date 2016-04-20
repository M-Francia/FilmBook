import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from './fichapelicula.model';
import {comentario} from './comentario.model';
import {usuario} from './usuario.model';

@Component({
  selector: 'fichapelicula',
  templateUrl: 'app/Fichapelicula/fichapelicula.component.html',
})

export class FichaPeliculaComponent {

private usuarioAndrea = new usuario("./images/peliculas/gato.jpg","userAndrea","andrea@hotmail.com","contraseña111", "La vida es maravillosa","345","4");
private comentarioUno = new comentario("texto con escritos acerca de la peli", this.usuarioAndrea, "22/2/2222");
private fichapelicula= new fichapelicula("#hashtag","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],
"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa",
"valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora");

  like(){
    this.fichapelicula.like=this.fichapelicula.like+1;
  }
  enviar(){

  }
  añadirwl(){

  }
  añadirlista(){

  }
  recomendar(){

  }

  }
