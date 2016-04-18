import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {usuario} from '../Fichatecnica/usuario.model';



@Component({
  selector: 'main',
  templateUrl: 'app/Perfil.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

])
export class PerfilComponent {
@Input()
  private perfil:usuario;
  follow(){
    this.perfil.seguidores=this.perfil.seguidores+1;
  }

}
