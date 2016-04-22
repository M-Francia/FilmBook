import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {usuario} from '../Fichapelicula/usuario.model';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {recomendacion} from './recomendacion.model';
import {lista} from './lista.model';
import {hashtag} from '../Fichapelicula/hashtag.model';


@Component({
  selector: 'perfil',
  templateUrl: 'app/Perfil/Perfil.component.html',
})

export class PerfilComponent {

private usuarioAndrea = new usuario("./images/peliculas/gato.jpg","userAndrea","andrea@hotmail.com","contraseña111", "La vida es maravillosa","345","4");

private etiquetas = new hashtag("#HatefulEight","Gran pelicula");

private pelicula= new fichapelicula("Hate ful Eight",[this.etiquetas],"8,4",480,"app/images/novedades/altamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
"La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
"Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia",[],"https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza");


private peliculaDos = new fichapelicula("#hashtag2 ",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",
["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2",
"valoracion positiva 2","nombre del autor de la valoracion positiva 2",[],"banda sonora 2","nombre de la banda sonora 2");

private recomendacion= new recomendacion(this.usuarioAndrea,this.pelicula,"Hacia mucho tiempo que no veia una pelicula así","La podrian haber acotado un poco");

private listaTopDiez = new lista(this.usuarioAndrea,[this.pelicula,this.peliculaDos,this.pelicula,this.peliculaDos],108,"Top 10",50,["etiqueta1","estiqueta2","etiqueta3"]);

private peliculasWlist =[new fichapelicula("Black Mirror",[this.etiquetas],"6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("El club de los poetas muertos ",[this.etiquetas],"6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[],"banda sonora 2","nombre de la banda sonora 2"),
  new fichapelicula("Leon the professional",[this.etiquetas],"6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora")
];


@Input()
  private perfil:usuario;
  follow(){
    this.perfil.seguidores=this.perfil.seguidores+1;
  }
//array peliculasfavortos
//add.Pelicula

}
