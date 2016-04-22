
import {usuario} from '../Fichapelicula/usuario.model';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';


export class recomendacion{
  usuario:usuario;
  pelicula:fichapelicula;
  comentariopositivo:string;
  comentarionegativo:string;

constructor(usuario:usuario, p:fichapelicula, comentario1:string, comentario2:string){
  this.usuario=usuario;
  this.pelicula=p;
  this.comentariopositivo= comentario1;
  this.comentarionegativo=comentario2;
}



}
