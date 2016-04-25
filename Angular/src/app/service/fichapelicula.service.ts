import {Injectable} from 'angular2/core';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';


@Injectable()
export class FichapeliculaService{


private peliculas = [
  new fichapelicula(0,"Hate ful Eight","8,4",480,"app/images/novedades/altamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza"),
  new fichapelicula(1,"Hate ful Eight","8,4",480,"app/images/novedades/altamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza"),
  new fichapelicula(2,"Hate ful Eight","8,4",480,"app/images/novedades/altamira.jpg","https://i.ytimg.com/vi_webp/gnRbXn4-Yis/sddefault.webp",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://i.ytimg.com/vi_webp/qm82JgUkAt4/hqdefault.webp","El despertar de la fuerza")

  ];

getPeliculas(){
    return withObserver(this.peliculas);
  }

  addPelicula(pelicula : fichapelicula){
    this.peliculas.push(pelicula);
    }

    getPelicula(pelicula : number){
      return withObserver(this.peliculas[pelicula]);
  }

  savePelicula(pelicula: fichapelicula){
      if(pelicula.id){
        let oldPelicula = this.peliculas.filter(h => h.id === pelicula.id)[0];
        oldPelicula.titulo = pelicula.titulo;
        oldPelicula.hashtag = pelicula.hashtag;
        oldPelicula.puntuacion = pelicula.puntuacion;
        oldPelicula.like = pelicula.like;
        oldPelicula.imagen = pelicula.imagen;
        oldPelicula.trailer = pelicula.trailer;
        oldPelicula.etiqueta = pelicula.etiqueta;
        oldPelicula.descripcion = pelicula.descripcion;
        oldPelicula.vnegativa = pelicula.vnegativa;
        oldPelicula.vnegautor = pelicula.vnegautor;
        oldPelicula.vpositiva = pelicula.vpositiva;
        oldPelicula.vpostautor = pelicula.vpostautor;
        oldPelicula.comentario = pelicula.comentario;
        oldPelicula.bso = pelicula.bso;
        oldPelicula.nombrebso = pelicula.nombrebso;
      } else {
        pelicula.id = this.peliculas.length+1;
        this.peliculas.push(pelicula);
      }
      return withObserver(pelicula);
    }

    /*  LikePelicula(titulo : string){
      var pelicula;
      pelicula=this.getPelicula(id;
      pelicula.like=pelicula.like+1;
  }
  */
}
