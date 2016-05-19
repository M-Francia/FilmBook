import {Injectable} from 'angular2/core';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';


@Injectable()
export class FichapeliculaService{


private peliculas = [
  new fichapelicula(0,"Star Wars: El despertar de la fuerza","8,4",480,"app/images/peliculas/star-wars.jpg","https://www.youtube.com/embed/FHbnQ5DUUF4",["Galaxia","Ficción","Saga","Leia"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/embed/lp3cA01rCCw","El despertar de la fuerza"),
  new fichapelicula(1,"Hate ful Eight","8,4",480,"app/images/novedades/altamira.jpg","https://www.youtube.com/embed/gnRbXn4-Yis",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/embed/lp3cA01rCCw","El despertar de la fuerza"),
  new fichapelicula(2,"Hate ful Eight","8,4",480,"app/images/novedades/altamira.jpg","https://www.youtube.com/embed/gnRbXn4-Yis",["Comedia","Intriga","Siglo XIX","Western"],
  "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
  "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
  "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/embed/lp3cA01rCCw","El despertar de la fuerza")

  ];

  private recomendadas = [
    new fichapelicula(0,"Hermanísimas","8,4",480,"app/images/novedades/altamira.jpg","https://www.youtube.com/embed/gnRbXn4-Yis",["Comedia","Intriga","Siglo XIX","Western"],
    "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
    "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
    "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/watch?v=gnRbXn4-Yis","El despertar de la fuerza"),
    new fichapelicula(1,"Kiki, el amor se hace","8,4",480,"app/images/novedades/altamira.jpg","https://www.youtube.com/embed/gnRbXn4-Yis",["Comedia","Intriga","Siglo XIX","Western"],
    "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
    "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
    "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/watch?v=gnRbXn4-Yis","El despertar de la fuerza"),
    new fichapelicula(2,"Angry birds","8,4",480,"app/images/novedades/altamira.jpg","https://www.youtube.com/embed/gnRbXn4-Yis",["Comedia","Intriga","Siglo XIX","Western"],
    "The Hateful Eight es una película estadounidense dirigida por Quentin Tarantino, estrenada en Estados Unidos en 2015.Se trata de un western que mezcla elementos de cine de misterio y comedia negra.",
    "La película límite, contradictoria y extremadamente virtuosa de un director condenado a ser siempre él mismo. (...) una exhibición tan florida como irrenunciable; tan cargante como hipnótica (...) Tarantino más 'tarantinizado' que nunca.","Luis Martínez: Diario El Mundo",
    "Sobredosis de Tarantino. Bendito banquete para unos, empacho casi letal para los otros. (...)","Diario La Vanguardia","https://www.youtube.com/watch?v=gnRbXn4-Yis","El despertar de la fuerza")

  ];

getPeliculas(){
    return withObserver(this.peliculas);
  }

  getPeliculasRecomendadas(){
      return withObserver(this.recomendadas);
    }

  addPelicula(pelicula : fichapelicula){
    this.peliculas.push(pelicula);
    }

    getPelicula(id: number | string){
      let pelicula = this.peliculas.filter(h => h.id === +id)[0]
    return withObserver(pelicula);
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
