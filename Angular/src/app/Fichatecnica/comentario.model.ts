import {usuario} from './usuario.model';
export interface comentario{
    texto: string;
    usuario:usuario;
    fecha:string; //mirar si existe date
}
