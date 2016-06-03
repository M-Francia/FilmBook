import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {usuario} from '../Fichapelicula/usuario.model';
import {UsuariosService} from '../service/usuarios.service';


@Component({
  selector: 'perfil',
  templateUrl: 'app/Perfil/Perfil.component.html',
  directives:[ROUTER_DIRECTIVES],
})

export class PerfilComponent {

  private perfil:usuario;

  constructor(private _router:Router, private _routeParams:RouteParams,private usuariosservice: UsuariosService){

  }
  ngOnInit(){
    let nombre=+this._routeParams.get("nombre");
    this.usuariosservice.getUsuario(nombre).subscribe(
      usuario => this.perfil = usuario,
      error => console.log(error)
    )
  }

  goToFichapelicula() {
      this._router.navigate(['Fichapelicula:id']);
    }
  follow(){
  //  this.perfil.seguidores=this.perfil.seguidores+1;
  }
//array peliculasfavortos
//add.Pelicula

}
