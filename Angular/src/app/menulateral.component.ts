import {Component,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES,} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {CabeceraComponent} from './cabecera.component.ts';
import {UsuariosService} from './service/usuarios.service';
import {PerfilService} from './service/perfil.service';
import {usuario} from './Fichapelicula/usuario.model';


@Component({
    selector: 'menulateral',
    templateUrl: 'app/menulateral.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class MenuLateralComponent {
    //status:{isopen:boolean} = {isopen: false};
    //disabled:boolean =false;
    currentUser:usuario;


    constructor(private router:Router, private usuariosService:UsuariosService, private perfilService:PerfilService){}

    goToInicio(){
      let link =['Timeline'];
     this.router.navigate(link);
  }
    goToNovedades(){
      let link =['Novedades'];
     this.router.navigate(link);
  }
    goToPerfil(){
      let link =['Perfil',{nombre:this.perfilService.getCurrentUser().nombre}];
      //[routerLink]="['Perfil',{nombre:this.PerfilService.getUsuario().nombre}]"
     this.router.navigate(link);
   }

    goToFichapelicula(){
      let link =['Fichapelicula'];
     this.router.navigate(link);
    }
    goToExplorar(){
      let link =['Explorar'];
     this.router.navigate(link);
  }
    goToAdmin(){
      let link =['Administracion'];
     this.router.navigate(link);
  }

  currentActive(){
    this.currentUser = this.usuariosService.getCurrentUser();
    return this.usuariosService.getCurrentUser()!=undefined;
}
adminActive(){
  this.currentUser = this.usuariosService.getCurrentUser();
  return this.currentActive() && this.currentUser.nombre == 'admin';
}

}
