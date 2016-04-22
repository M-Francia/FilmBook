import {Injectable} from 'angular2/core';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';

@Injectable()
export class FichapeliculaService{

private peliculas = [

]

getPeliculas(){
    return this.peliculas;
}
}
