import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {comentario} from '../Fichapelicula/comentario.model';
import {usuario} from '../Fichapelicula/usuario.model';


@Component({
  selector: 'timeline',
  templateUrl: 'app/Timeline/timeline.component.html'
})

export class TimelineComponent {

private usuarioAndrea = new usuario("./images/peliculas/gato.jpg","userAndrea","andrea@hotmail.com","contraseña111", "La vida es maravillosa","345","4");

private fichapeliculaUno = new fichapelicula("#hashtag","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora");
private fichapeliculaDos = new fichapelicula("#hashtag2 ","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2");
private fichapeliculaTres = new fichapelicula("#hashtag","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora");
private fichapeliculaCuatro = new fichapelicula("#hashtag2 ","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2");

private fichapeliculaCinco= new fichapelicula("#HatefulEight","8,4",480,"./images/novedades/antamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
"La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
"Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia",[this.comentarioUno, this.comentarioDos, this.comentarioTres],"https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza");

private peliculasEncabezado = [new fichapelicula("#BratPitt","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Hace una buena interpretación","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("#AntMan","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","Una pelicula muy graciosa","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2"),
  new fichapelicula("#BatmanVsSuperman","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Una mala pelicula sobre superhéroes","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("#Altamira","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Un nuevo gran éxito","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora")
];

private peliculasRecomendadas = [new fichapelicula("Black Mirror","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("El club de los poetas muertos ","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","nombre del autor de la valoracion negativa 2","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2"),
  new fichapelicula("Leon the professional","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora")
];

private comentarioUno = new comentario("Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.", this.usuarioAndrea, "22/2/2222");
private comentarioDos = new comentario("Fui a verla porque mi novio me obligó, pero aun así me gustó.", this.usuarioAndrea, "44/4/4444");
private comentarioTres = new comentario("No esta mal, prefiero las de la primera saga.", this.usuarioAndrea, "55/5/5555");

private todosComentariosIn = [new comentario("Me encanta como actua este tío espero que en la nueva película con Angelina salga igual", this.usuarioAndrea, "44/4/4444"),
  new comentario("Mala actuacion",this.usuarioAndrea, "77/7/7777")
];

private todosComentariosOut = [new comentario("50.000$ se ha llevado por día de trabajo",this.usuarioAndrea, "66/6/6666"),
  new comentario("Ha sido una pelicula entretenida, que no volveré a repetir",this.usuarioAndrea, "88/8/8888")
];

private peliculasWlist= [new fichapelicula("Requiem por un sueño","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Hace una buena interpretación","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("La cenicienta","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","Una pelicula muy graciosa","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[this.comentarioUno],"banda sonora 2","nombre de la banda sonora 2"),
  new fichapelicula("El mago de Oz","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Una mala pelicula sobre superhéroes","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("Star Wars","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Un nuevo gran éxito","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[this.comentarioUno],"banda sonora","nombre de la banda sonora")
];

}
