
import {fichapelicula} from './fichapelicula.model';
import {FichaPeliculaComponent} from './fichapelicula.component';
import {FichapeliculaService} from '../service/fichapelicula.service';

//para registrarse
export class usuario{
  id:number;
  foto:string;
  nombre:string;
  email:string;
  contrasenia:string;
  frase:string;
  seguidores:string;
  valoracion:string;

//private arraywathlist = fichapelicula[]=[];
//private arraylista =fichapelicula[]=[];

  constructor(idc:number, fotoc:string, nombrec: string, emailc:string, contraseñac: string, frasec:string, seguidoresc:string, valoracionc:string){
      this.id=idc;
      this.foto=fotoc;
      this.nombre=nombrec;
      this.email=emailc;
      this.contrasenia=contraseñac;
      this.frase=frasec;
      this.seguidores=seguidoresc;
      this.valoracion=valoracionc;
    }



}
