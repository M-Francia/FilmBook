
import {fichapelicula} from '../Fichapelicula/fichapelicula.model';

export class explorar{
  peliculas:fichapelicula[];
  fecha:string;
  likes:number;

constructor(peliculas:fichapelicula[], fecha:string, likes:number){
  this.peliculas=peliculas;
  this.fecha=fecha;
  this.likes=likes;
}
}
