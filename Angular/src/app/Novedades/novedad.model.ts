import {fichapelicula} from '../Fichapelicula/fichapelicula.model';


export class novedad{
  fecha:string;
  caratula:string;
  titulo:string;
  valoracion: string;

  constructor(fecha:string, caratula:string,titulo:string, valoracion:string){
      this.fecha=fecha;
      this.caratula=caratula;
      this.titulo=titulo;
      this.valoracion=valoracion;

  }

}
