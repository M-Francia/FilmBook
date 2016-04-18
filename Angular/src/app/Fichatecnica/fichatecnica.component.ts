import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichatecnica} from './fichatecnica.model';


@Component({
  selector: 'main',
  templateUrl: 'app/fichatecnica.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

])

export class FichaTecnicaComponent {
@Input()
private fichatecnica:fichatecnica;
  like(){
    this.fichatecnica.like=this.fichatecnica.like+1;
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
