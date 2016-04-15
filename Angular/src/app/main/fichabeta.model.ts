import {comentario} from './comentario.model';
export interface fichabeta{
    hashtag: string;
    puntuacion: string;
    like: number;
    imagen: URL;
    trailer: URL;
    etiqueta:string[];
    vnegativa: string;
    vnegautor:string;
    vpositiva: string;
    vpostautor:string;
    comentario: comentario[];
    bso: URL;
    nombrebso:string;

}
