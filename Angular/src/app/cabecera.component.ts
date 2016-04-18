import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
       selector: 'cabecera', // mirar que es selector
       templateUrl: 'app/cabecera.component.html',
       directives:[ROUTER_DIRECTIVES]
})
export class CabeceraComponent  {
  usuario = "";
  contraseña = "";

  log (){ //linea 41
  }
}
