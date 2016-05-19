import {usuario} from './usuario.model';
export class comentario{
    texto: string;
    usuario:usuario;
    fecha:string;


constructor(texto:string, usuario:usuario, fecha:string){
  this.texto=texto;
  this.usuario=usuario;
  this.fecha=fecha;
}


}
