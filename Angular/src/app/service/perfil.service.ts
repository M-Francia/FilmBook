import {Injectable} from 'angular2/core';
import {usuario} from '../Fichapelicula/usuario.model.ts';


@Injectable()
//servicio de perfil, coge el usuario y lo envía
export class PerfilService{

private usuario: usuario;

  getCurrentUser(){
      return this.usuario;
  }

  getNombreUsuario(){
    return this.usuario.nombre;
  }
//asigna el usuario
  setUsuario(cUser: usuario){
       this.usuario=cUser;
  }
}

//LOGEARSE
