import {Component,Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {fichabeta} from './fichabeta.model';


@Component({
  selector: 'main',
  templateUrl: 'app/fichabeta.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

])

export class FichabetaComponent {
@Input()
private fichabeta:fichabeta;
  like(){
    this.fichabeta.like=this.fichabeta.like+1;
  }

  }
