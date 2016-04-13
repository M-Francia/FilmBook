import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';



@Component({
  selector: 'main-app',
  providers: [],
  templateUrl: 'app/Novedades.html',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class NovedadesComponent {
  title = 'Abril';
  hero = 'Altamira';
}
export class Hero {
  id: number;
  name: string;
  
}
