import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {usuario} from '../Fichapelicula/usuario.model';


@Component({
  selector: 'registro',
  templateUrl: 'app/Registro/Registro.component.html'
})

export class RegistroComponent {
  usuarios=[new usuario(9,'./images/avatar/48.jpg','Mario','mariofrancia@gmail.com','1234','La vida es dura','3000','8'),new usuario(10,'../images/avatar/48.jpg','Andrea','andreaortiz@gmail.com','1234','La vida es gatuna','12000','10')];
//atributos que uso para registrarme
  usuario='';
  email='';
  contr1='';
  contr2='';

  contraseñasIguales(){
   return this.contr1==this.contr2;
 }

 noUtilizado(){
   var cogido= true;
   for(var usuario of this.usuarios){
     if(usuario.nombre==this.usuario){
       cogido=false;
       break;
     }
   }
   return cogido;
 }

 posibleRegistro(){
      var posible=false;
      if(this.noUtilizado() && this.usuario!='' && this.contr2!='' && this.contraseñasIguales && this.contr1!='' && this.email!=''){
        posible=true;
      }
      return posible;
  }

/*  registrar(){
    this.usuarios.push(new usuario('../../images/avatar/48.jpg',this.usuario,this.email,this.contr1);
    console.log(this.usuarios);
  }
*/
}
