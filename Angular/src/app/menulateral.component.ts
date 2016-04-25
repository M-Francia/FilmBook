import {Component,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES,} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';


@Component({
    selector: 'menulateral',
    templateUrl: 'app/menulateral.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class MenuLateralComponent {
    //status:{isopen:boolean} = {isopen: false};
    //disabled:boolean =false;

    constructor(private _router:Router){}

    goToInicio(){
    this._router.navigate(['Timeline']);
  }
    goToNovedades(){
    this._router.navigate(['Novedades']);
  }
    goToPerfil(){
    this._router.navigate(['Perfil']);
    }
    goToFichapelicula(){
    this._router.navigate(['Fichapelicula']);
    }
    goToExplorar(){
    this._router.navigate(['Explorar']);
  }
    goToAdmin(){
    this._router.navigate(['Administracion']);
  }
}
