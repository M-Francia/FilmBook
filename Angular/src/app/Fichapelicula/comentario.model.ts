import {usuario} from './usuario.model';
export class comentario{
    texto: string;
    usuario:string;
    fecha:string;


constructor(texto:string, usuario:string, fecha:string){
  this.texto=texto;
  this.usuario=usuario;
  this.fecha=fecha;
}


}
