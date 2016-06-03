import {Injectable} from 'angular2/core';
import {usuario} from '../Fichapelicula/usuario.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';


@Injectable()
export class UsuariosService{
private usuario:usuario;

public usuarios =[
  new usuario(0,"app/images/peliculas/gato.jpg","Andrea","andrea@hotmail.com","1234", "La vida es maravillosa","345","4"),
  new usuario(1,"app/images/peliculas/gato.jpg","Cristina","cristina@hotmail.com","1234", "Hola amigos","100","6"),
  new usuario(2,"app/images/peliculas/gato.jpg","Maria","maria@hotmail.com","1234", "Soy youtuber","10000","10"),
  new usuario(3,"app/images/avatar/48.jpg","Jesus","jesus@hotmail.com","1234", "Im a princess","30","1"),
  new usuario(4,"app/images/avatar/48.jpg","Alejandro","alejandro@hotmail.com","1234", "El otro dia","67","7"),
  new usuario(5,"app/images/avatar/48.jpg","Pepe","pepe@hotmail.com","1234", "Criaturitas del señor","35","4"),
  new usuario(6,"app/images/avatar/48.jpg","admin","admin@hotmail.com","1234", "Vengo a administrar","0","0"),
];

getUsuarios(){
    return this.usuarios;
}

addUsuarios(usuario : usuario){
  this.usuarios.push(usuario);
  }

  getUsuario(id : number){
      return withObserver(this.usuarios[id]);
    }

  getCurrentUser(){
      return this.usuario;
  }
  setUsuario(cUser: usuario){
       this.usuario=cUser;
  }

/*  registrar(){
  var newUser = new usuario('../../img/logo.png',this.usuario,this.email,this.pass1,this.fecha,'sin definir','sin definir',this.desc,this.descMentor);
  this.currentUserService.setUser(newUser);
  this.usersService.addUser(newUser);
  this.currentUser = newUser;
  this._router.navigate(['Main']);
}*/
  //remove para salirse como logeado
//getusuarios //lo recibe en el login/
//set usuario // comprobar en login y registro
}
