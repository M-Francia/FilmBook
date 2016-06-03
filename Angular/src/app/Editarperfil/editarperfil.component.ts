import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router,RouteParams} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {PerfilService} from '../service/perfil.service';
import {UsuariosService} from '../service/usuarios.service';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {usuario} from '../Fichapelicula/usuario.model.ts';


@Component({
  selector: 'editarperfil',
  templateUrl:'app/Editarperfil/editarperfil.component.html',
})

export class EditarPerfilComponent{

   private usuarios:usuario [];
   private nusuario:usuario;
   private nombre="";
   private viejaPass="";
   private nuevaPass="";
   private nuevaPassc="";
   private frase="";
   private foto="";
   private pass="";
   colapsado = true;
   mostrarFallo = false;
   mostrarAcierto = false;

  constructor(private perfilservice: PerfilService, private usuariosservice:UsuariosService ){}

  ngOnInit(){
  // this.nusuario = this.perfilservice.getUsuario(id);
   this.nombre=this.nusuario.nombre;
   this.frase=this.nusuario.frase;
   this.foto=this.nusuario.foto;
   this.pass=this.nusuario.contrasenia;
   //this.usuarios = this.usuariosservice.getUsuarios();
 }


 passCorrecto(){
   return this.viejaPass==this.pass;
 }

 passIguales(){
   return this.nuevaPass== this.nuevaPassc;
 }

 cambiarFoto(){
   this.colapsado=false;
 }

 noCogido(){
   var cogido= true;
   for(var usuario of this.usuarios){
     if(usuario.nombre==this.nombre){
       cogido=false;
       break;
     }
   }
   return cogido || this.nombre==this.nusuario.nombre;
 }
 cambiarDatos(nuevousuario:usuario){
   if(this.viejaPass==this.pass){
     if(this.nuevaPass==this.nuevaPassc){
       if(this.nuevaPass==''){
         this.nusuario.contrasenia=this.pass;
       }else{
         this.nusuario.contrasenia=this.nuevaPass;
       }
       this.nusuario.foto=this.foto;
       this.nusuario.nombre=this.nombre;
       this.nusuario.frase=this.frase;
       this.mostrarAlert(true);
     }else{
       this.mostrarAlert(false);
     }
   }else{
     this.mostrarAlert(false);

   }
 }
 noMostrarAlert(){
     this.mostrarFallo=false;
     this.mostrarAcierto=false;
 }
 mostrarAlert(mostrar:boolean){
     if(mostrar){
         this.mostrarAcierto=true;
     }else{
         this.mostrarFallo=true;
     }
 }
 getStyles(){
   return {
     'display':this.colapsado? 'none':'block'
   }
 }
 setFoto(img:string){
   this.foto=img;
 }
 }
