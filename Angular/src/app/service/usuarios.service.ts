import {Injectable} from 'angular2/core';
import {usuario} from '../Fichapelicula/usuario.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

@Injectable()
export class UsuariosService{

private usuarios =[
  new usuario(0,"app/images/peliculas/gato.jpg","Andrea","andrea@hotmail.com","contraseña111", "La vida es maravillosa","345","4"),
  new usuario(1,"app/images/peliculas/gato.jpg","Cristina","cristina@hotmail.com","contraseña111", "Hola amigos","100","6"),
  new usuario(2,"app/images/peliculas/gato.jpg","Maria","maria@hotmail.com","contraseña111", "Soy youtuber","10000","10"),
  new usuario(3,"app/images/avatar/48.jpg","Jesus","jesus@hotmail.com","contraseña111", "Im a princess","30","1"),
  new usuario(4,"app/images/avatar/48.jpg","Alejandro","alejandro@hotmail.com","contraseña111", "El otro dia","67","7"),
  new usuario(5,"app/images/avatar/48.jpg","Pepe","pepe@hotmail.com","contraseña111", "Criaturitas del señor","35","4"),
];

getUsuarios(){
    return withObserver(this.usuarios);
}

addUsuarios(usuario : usuario){
  this.usuarios.push(usuario);
  }

  getUsuario(id : number){
      return withObserver(this.usuarios[id]);
    }
  }
  //remove para salirse como logeado
//getusuarios //lo recibe en el login/
//set usuario // comprobar en login y registro
