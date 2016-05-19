import {Injectable} from 'angular2/core';
import {fichapelicula} from '../Fichapelicula/fichapelicula.model.ts';
import {FichaPeliculaComponent} from '../Fichapelicula/fichapelicula.component.ts';
import {comentario} from '../Fichapelicula/comentario.model.ts';
import {usuario} from '../Fichapelicula/usuario.model.ts';
import {PerfilService} from '../service/perfil.service';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

@Injectable()
export class ComentariosService{

  constructor (private perfilservice: PerfilService){}

/*  ngOnInit(){
    this.perfilservice.getNombreUsuario().subscribe(
      usuario => this.usuario = usuario,
      error => console.log(error)
    );
  }*/

  private comentarios = [
    new comentario("Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.",undefined,"22/2/2222"),
    new comentario("Fui a verla porque mi novio me obligó, pero aun así me gustó.",undefined,"44/4/4444"),
    new comentario("No esta mal, prefiero las de la primera saga.",undefined,"55/5/5555")
  ];

  getComentarios() {
    return withObserver(this.comentarios);
  }

}
