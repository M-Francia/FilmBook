import {fichapelicula} from '../Fichapelicula/fichapelicula.model';


export class novedad{
  fecha:string;
  peliculas:fichapelicula;
  valoracion: string;

  constructor(fecha:string, peliculas:fichapelicula, valoracion:string){
      this.fecha=fecha;
      this.peliculas=peliculas;
      this.valoracion=valoracion;

  }

}
