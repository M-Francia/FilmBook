import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {explorar} from './explorar.model';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';

@Component({
  selector: 'explorar',
  templateUrl: 'app/Explorar/Explorar.component.html',
})

export class ExplorarComponent {

  private peliculas= [new fichapelicula("#BratPitt",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Hace una buena interpretación","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora"),
    new fichapelicula("#AntMan",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","Una pelicula muy graciosa","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[],"banda sonora 2","nombre de la banda sonora 2"),
    new fichapelicula("#BatmanVsSuperman",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Una mala pelicula sobre superhéroes","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora"),
    new fichapelicula("#Altamira",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"Un nuevo gran éxito","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora")];


  private pelicula= new fichapelicula("#AntMan",[],"6",230,"app/images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"descripcion numero  2","valoracion negativa 2","Una pelicula muy graciosa","valoracion positiva 2","nombre del autor de la valoracion positiva 2",[],"banda sonora 2","nombre de la banda sonora 2");

  private explorar=new explorar([this.pelicula,this.pelicula,this.pelicula,this.pelicula],"22/2/2222",222);


}
