import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';
import {FichapeliculaService} from '../service/fichapelicula.service.ts';

Component ({
  selector: 'Nuevapelicula',
  templateUrl: 'app/Administracion/admin.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers : [FichapeliculaService]
})

export class NuevaPeliculaComponent {
  titulo: string;
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
  bso: string;
  nombrebso:string;

  private anadir=false;

  constructor(private peliculasService : FichapeliculaService){}

  anadirFoto(){
      this.imagen='../../img/logo.png';
  }


  noesVacioImg(){
    return this.imagen != "";
  }

  //introducir en array de service
  guardar(){
    //  this.peliculasService.addPelicula(new Pelicula(this.titulo,this.puntuacion,this.like,this.imagen,this.trailer,this.etiqueta,this.descripcion,this.vnegativa,this.vnegautor,this.vpositiva,this.vpostautor,this.bso,this.nombrebso));
  }

}
