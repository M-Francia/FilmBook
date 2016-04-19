import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {usuario} from '../Fichapelicula/usuario.model';



@Component({
  selector: 'perfil',
  templateUrl: 'app/Perfil/Perfil.component.html',
})

export class PerfilComponent {
@Input()
  private perfil:usuario;
  follow(){
    this.perfil.seguidores=this.perfil.seguidores+1;
  }

//array peliculasfavortos
//add.Pelicula

}
