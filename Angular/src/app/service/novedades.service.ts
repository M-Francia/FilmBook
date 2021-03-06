import {Injectable} from 'angular2/core';
import {novedad} from '../Novedades/novedad.model.ts';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';


@Injectable()
export class NovedadesService{
  /*private año: novedad[][]=[this.peliculas,this.peliculas,this.peliculas,this.peliculas,this.peliculas,this.peliculas,this.peliculas,
                            this.peliculas,this.peliculas,this.peliculas,this.peliculas,this.peliculas];*/

  private primermes = [
    new novedad(7,"Viernes, 01 Abril 2016","app/images/novedades/altamira.jpg","Altamira (Hugh Hudson)",8.4),
    new novedad(8,"Viernes, 01 Abril 2016","app/images/novedades/hermanisimas.jpg","Hermanísimas (Jason Moore)",7),
    new novedad(9,"Viernes, 01 Abril 2016","app/images/novedades/kiki.jpg","Kiki, el amor se hace (Paco León)",3),
    ];
  private segundomes = [
      new novedad(7,"Viernes, 01 Abril 2016","app/images/novedades/altamira.jpg","Altamira (Hugh Hudson)",8.4),
      new novedad(8,"Viernes, 01 Abril 2016","app/images/novedades/hermanisimas.jpg","Hermanísimas (Jason Moore)",7),
      new novedad(9,"Viernes, 01 Abril 2016","app/images/novedades/kiki.jpg","Kiki, el amor se hace (Paco León)",3),
      ];
  private tercermes = [
        new novedad(7,"Viernes, 01 Abril 2016","app/images/novedades/altamira.jpg","Altamira (Hugh Hudson)",8.4),
        new novedad(8,"Viernes, 01 Abril 2016","app/images/novedades/hermanisimas.jpg","Hermanísimas (Jason Moore)",7),
        new novedad(9,"Viernes, 01 Abril 2016","app/images/novedades/kiki.jpg","Kiki, el amor se hace (Paco León)",3),
        ];

        getPrimermesPeliculas(){
            return withObserver(this.primermes);
          }
        getSegundomesPeliculas(){
            return withObserver(this.segundomes);
          }
        getTercermesPeliculas(){
            return withObserver(this.tercermes);
          }

        getPrimermesPelicula(id: number | string){
          let pprimermes = this.primermes.filter(h => h.id === +id)[0]
          return withObserver(pprimermes);
          }
        getSegundomesPelicula(id: number | string){
          let psegundomes = this.segundomes.filter(h => h.id === +id)[0]
        return withObserver(psegundomes);
        }
      getTercermesPelicula(id: number | string){
        let ptercermes = this.tercermes.filter(h => h.id === +id)[0]
      return withObserver(ptercermes);
    }
    /*getNovedades(mes: string){
      if(mes=='enero')
        return this.año[0];
    else if(mes=='febrero')
        return this.año[1];
    else if(mes=='marzo')
        return this.año[2];
    else if(mes=='abril')
        return this.año[3];
    else if(mes=='mayo')
        return this.año[4];
    else if(mes=='junio')
        return this.año[5];
    else if(mes=='julio')
        return this.año[6];
    else if(mes=='agosto')
        return this.año[7];
    else if(mes=='septiembre')
        return this.año[8];
    else if(mes=='octubre')
        return this.año[9];
    else if(mes=='noviembre')
        return this.año[10];
    else if(mes=='diciembre')
        return this.año[11];
    }
    getNovedad(pelicula : string){
    for (let i = 0; i < this.peliculas.length; i++) {
        if(this.peliculas[i].titulo==pelicula){return this.peliculas[i]};
    }
  }*/
}
