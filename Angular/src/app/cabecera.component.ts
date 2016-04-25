import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {RegistroComponent} from './Registro/registro.component.ts';
import {usuario} from './Fichapelicula/usuario.model';
import {UsuariosService} from './service/usuarios.service';
import {PerfilService} from './service/perfil.service';

@Component({
       selector: 'cabecera',
       templateUrl: 'app/cabecera.component.html',
       directives:[ROUTER_DIRECTIVES]
})
export class CabeceraComponent  {

  nombre = "";
  contraseña = "";
  usuario:usuario;
  mostrarAcierto=false;

  private usuarios:usuario [];

  constructor(private _router:Router, private perfilService:PerfilService, private usuariosService:UsuariosService){}

    ngOnInit(){
        this.usuarios = this.usuariosService.getUsuarios();
    }
    log(){

        for(var usuario of this.usuarios){
            if (usuario.nombre==this.nombre && usuario.contraseña== this.contraseña){
                this.usuario=usuario;
                this.perfilService.setUsuario(this.usuario);
                break;
            }
        }
      }

      perfilActual(){
       this.usuario = this.perfilService.getUsuario();
       return this.perfilService.getUsuario()!=undefined;
   }
   isAdmin(){
       this.usuario = this.perfilService.getUsuario();

       return this.perfilActual() && this.usuario.nombre == 'admin';
   }
   cerrarSesion(){
       this.usuario=undefined;
       this.perfilService.setUsuario(undefined);
       this.mostrarAcierto=false;
   }
}
