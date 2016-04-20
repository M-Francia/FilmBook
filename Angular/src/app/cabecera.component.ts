import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RegistroComponent} from './registro.component.ts';
import {usuario} from './Fichapelicula/usuario.model';
@Component({
       selector: 'cabecera', // mirar que es selector
       templateUrl: 'app/cabecera.component.html',
})
export class CabeceraComponent  {

  usuario='';
  password='';

/*    log(usuario:string, contraseña:string){
    for(var usuario of this.usuarios){
      if(usuario.nombre==usuario){
        if(usuario.contraseña==contraseña){
          alert('Se ha logueado');
          return undefined;
        }
      }
    }
     alert('El usuario y/o la contraseña introducidas no son correctas');
  }
*/
}
