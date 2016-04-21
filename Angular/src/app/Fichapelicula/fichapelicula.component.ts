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

private comentarioUno = new comentario("Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.", this.usuarioAndrea, "22/2/2222");
private comentarioDos = new comentario("Fui a verla porque mi novio me obligó, pero aun así me gustó.", this.usuarioAndrea, "44/4/4444");
private comentarioTres = new comentario("No esta mal, prefiero las de la primera saga.", this.usuarioAndrea, "55/5/5555");

private fichapelicula= new fichapelicula("#HatefulEight","8,4",480,"./images/novedades/antamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
"La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
"Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia",[this.comentarioUno, this.comentarioDos, this.comentarioTres],"https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza");

  like(){
    this.fichapelicula.like=this.fichapelicula.like+1;
  }
  enviar(){

  }
  // (click)="showEtiquetas"
  //showEtiquetas(){
    //console.log(this.fichapelicula.etiqueta);
//  }
  añadirwl(){

  }
  añadirlista(){

  }
  recomendar(){

  }

  }
