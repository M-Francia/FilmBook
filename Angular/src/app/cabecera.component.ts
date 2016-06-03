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

  private user : usuario[];
  currentUser:usuario;
  nombrelogin: string;
  contrasenialogin:string;
  encontrado: boolean;
  hideModal : boolean = false;
  isActive : boolean = false;

  constructor(private router:Router, private perfilService:PerfilService, private usuariosService:UsuariosService){}


  gotoinicio(){
    let link = ['Inic'];
    this.router.navigate(link);
  }
  gotoregister(){
    let link =['Registro'];
    this.router.navigate(link);
  }

  gotoTimeline(){
    let link =['Timeline'];
    this.router.navigate(link);
  }
  gotoUser(){
        this.hideModal  = true;
        this.router.navigate(['Perfil', { nombre: this.currentUser.id }]);
  }

  ngOnInit(){
    console.log(this.user);
    this.user = this.usuariosService.getUsuarios();
    console.log(this.user);
  }

   currentActive(){
     this.currentUser = this.usuariosService.getCurrentUser();
     return this.usuariosService.getCurrentUser()!=undefined;
 }
  compareTo(){
    var encontrado = false;
      console.log(this.user);
      this.user = this. usuariosService.getUsuarios();
      console.log(this.user);
    for (var usuario of this.user){
          console.log(this.user);
        if(usuario.nombre == this.nombrelogin){
            console.log(this.user);
            if(usuario.contrasenia == this.contrasenialogin){
                console.log(this.user);
                encontrado = true;
                //console.log(usuario.nombre);
                //console.log(this.nombrelogin);
                this.currentUser = usuario;
                this.usuariosService.setUsuario(usuario);
                console.log(this.currentUser);
                this.gotoUser();
                this.nombrelogin = this.usuariosService.getCurrentUser().nombre;
            }
        }
      }
}

cerrarSesion(){
        this.currentUser=undefined;
        this.perfilService.setUsuario(undefined);
        this.nombrelogin="";
        this.contrasenialogin="";
        this.gotoTimeline();
    }
      /*perfilActual(){
      // this.usuario = this.perfilService.getUsuario();
       return this.perfilService.getUsuario()!=undefined;
   }
  /* isAdmin(){
//       this.usuario = this.perfilService.getUsuario();

       return this.perfilActual() && this.usuario.nombre == 'admin';
   }
   cerrarSesion(){
       this.usuario=undefined;
       this.perfilService.setUsuario(undefined);
       this.mostrarAcierto=false;
   }*/
/*
   currentActive(){
      this.usuario = this.perfilService.getUsuario();
      return this.perfilService.getUsuario()!=undefined;
  }
  isAdmin(){
      this.currentUser = this.currentUserService.getCurrentUser();

      return this.currentActive() && this.currentUser.nombre == 'admin';
  }
  cerrarSesion(){
      this.currentUser=undefined;
      this.currentUserService.setUser(undefined);
      this.mostrarAcierto=false;
      this.usuario="";
      this.pass="";
      this._router.navigate(['Main']);
  }*/

   goToRegistrar(){
     let link =['Registro'];
    this.router.navigate(link);
 }
 goToEditarPerfil(){
   let link =['Editarperfil'];
  this.router.navigate(link);
}
}
