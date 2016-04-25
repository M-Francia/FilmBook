import {Injectable} from 'angular2/core';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';
import {comentario} from '../Fichapelicula/comentario.model.ts';

@Injectable()
export class ComentariosService{

getComentarios(){
    return new comentario("Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.","Jesus","22/2/2222"),
    new comentario("Fui a verla porque mi novio me obligó, pero aun así me gustó.","andrea","44/4/4444"),
    new comentario("No esta mal, prefiero las de la primera saga.","Andrea","55/5/5555")

  }

}
