import {Injectable} from 'angular2/core';
import {usuario} from '../Fichapelicula/usuario.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';


@Injectable()
//servicio de perfil, coge el usuario y lo envía
export class PerfilService{

private usuario: usuario;

  getUsuario(){
      return withObserver(this.usuario);
  }

  getNombreUsuario(){
    return this.usuario.nombre;
  }
//asigna el usuario
  setUsuario(usuario: usuario){
       this.usuario=usuario;
  }
}

//LOGEARSE
