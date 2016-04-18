import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {explorar} from './explorar.model';



@Component({
  selector: 'explorar',
  templateUrl: 'app/Explorar.component.html',
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([

])
export class ExplorarComponent {



}
