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

    constructor(private router:Router){}

    goToInicio(){
      let link =['Timeline'];
     this.router.navigate(link);
  }
    goToNovedades(){
      let link =['Novedades'];
     this.router.navigate(link);
  }
    goToPerfil(){
      let link =['Perfil'];
     this.router.navigate(link);
   }

    goToFichapelicula(){
      let link =['Fichapelicula'];
     this.router.navigate(link);
    }
    goToExplorar(){
      let link =['Explorar'];
     this.router.navigate(link);
  }
    goToAdmin(){
      let link =['Administracion'];
     this.router.navigate(link);
  }

}
