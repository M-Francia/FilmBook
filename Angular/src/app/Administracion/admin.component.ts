import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import {fichapelicula} from '../Fichapelicula/fichapelicula.model';


@Component({
  selector: 'administracion',
  templateUrl:'app/administracion/admin.component.html',
})

export class AdministracionComponent{

  private peliculasLista = [new fichapelicula("Dos tontos muy tontos","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora"),
  new fichapelicula("La vida es bella","6",230,"./images/peliculas/ant-man.jpg","https://youtu.be/F7BqFYbLJeM",["etiquetauno","etiquetados","etiquetatres"],"The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.","valoracion negativa","nombre del autor de la valoracion negativa","valoracion positiva","nombre del autor de la valoracion positiva",[],"banda sonora","nombre de la banda sonora")];


}
