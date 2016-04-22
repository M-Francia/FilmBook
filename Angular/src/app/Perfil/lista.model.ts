import {fichapelicula} from '../Fichapelicula/fichapelicula.model';
import {usuario} from '../Fichapelicula/usuario.model';

export class lista{
  usuario:usuario;
  peliculas:fichapelicula[];
  seguidores:number;
  nombre:string;
  votaciones:number;
  etiquetas:string[];

  constructor(usuario:usuario, peliculas:fichapelicula[], seguidores:number, nombre:string, votaciones:number, etiquetas: string[]){
      this.usuario=usuario;
      this.peliculas=peliculas;
      this.seguidores=seguidores;
      this.nombre=nombre;
      this.votaciones=votaciones;
      this.etiquetas=etiquetas;
  }

}
