import {fichapelicula} from '../Fichapelicula/fichapelicula.model';


export class novedad{
  id:number;
  fecha:string;
  caratula:string;
  titulo:string;
  valoracion: number;

  constructor(id:number,fecha:string, caratula:string,titulo:string, valoracion:number){
      this.id=id;
      this.fecha=fecha;
      this.caratula=caratula;
      this.titulo=titulo;
      this.valoracion=valoracion;

  }

}
