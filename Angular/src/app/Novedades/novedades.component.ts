import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {comentario} from '../Fichapelicula/comentario.model';
import {usuario} from '../Fichapelicula/usuario.model';
import {hashtag} from '../Fichapelicula/hashtag.model';
import {lista} from '../Perfil/lista.model';


@Component({
  selector: 'novedades',
  templateUrl: 'app/Novedades/Novedades.component.html'
})

export class NovedadesComponent {

  private etiquetaPrincipal = new hashtag("#Quentin", "Spotlight no merecia el oscar");

  private comentarioUno = new comentario("Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.", this.usuarioAndrea, "22/2/2222");
  private comentarioDos = new comentario("Fui a verla porque mi novio me obligó, pero aun así me gustó.", this.usuarioAndrea, "44/4/4444");
  private comentarioTres = new comentario("No esta mal, prefiero las de la primera saga.", this.usuarioAndrea, "55/5/5555");

  private usuarioAndrea = new usuario("app/images/peliculas/gato.jpg","userAndrea","andrea@hotmail.com","contraseña111", "La vida es maravillosa","345","4");

  private fichapelicula= new fichapelicula("#HatefulEight",[this.etiquetaPrincipal],"8,4",480,"app/images/novedades/altamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia",[this.comentarioUno, this.comentarioDos, this.comentarioTres],"https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza");

  private fichapeliculaDos = new fichapelicula("#hashtag2 ",[this.etiquetaPrincipal],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",
  ["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2",
  "valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2");

  private novedadesAbril = ["11/1/1111",[this.fichapelicula,this.fichapeliculaDos],"3"];



}
