import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from './fichapelicula.model';


@Component({
  selector: 'fichapelicula',
  templateUrl: 'app/fichapelicula.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

])

export class FichaPeliculaComponent {
@Input()
private fichapelicula:fichapelicula;
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
