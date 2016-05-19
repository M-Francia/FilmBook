import {comentario} from './comentario.model';
import {usuario} from './usuario.model';
import {hashtag} from './hashtag.model';

export class fichapelicula{
    id:number;
    titulo: string;
    hashtag:hashtag[]=[];
    puntuacion: string;
    like: number;
    imagen: string;
    trailer: string;
    etiqueta:string[];
    descripcion:string;
    vnegativa: string;
    vnegautor:string;
    vpositiva: string;
    vpostautor:string;
    comentario:comentario[]=[];
    bso: string;
    nombrebso:string;

  constructor(idc:number, titulo:string, p:string, l:number, i:string, t:string, e:string[], d:string, vn:string, vna:string, vp:string, vpa:string, bso:string, n:string){
      this.id=idc;
      this.titulo=titulo;
      this.puntuacion=p;
      this.like=l;
      this.imagen=i;
      this.trailer=t;
      this.etiqueta=e;
      this.descripcion=d;
      this.vnegativa=vn;
      this.vnegautor=vna;
      this.vpositiva=vp;
      this.vpostautor=vpa;
      this.bso=bso;
      this.nombrebso=n;
    }

    addComentario(texto:string, usuario:usuario, fecha:string){
        var comentario = new comentario(texto,usuario,fecha);
        this.comentario.push(comentario);

   }
   addHashtag(titulo:string, descripcion:string){
       var hashtagc = new hashtag(titulo,descripcion);
       this.hashtag.push(hashtagc);
     }
     addLike(like: fichapelicula){
      this.like++;
    }

}
