
import {FichapeliculaService} from './service/fichapelicula.service';
import {HashtagService} from './service/hashtag.service';
import {NovedadesService} from './service/novedades.service';
import {PerfilService} from './service/perfil.service';
import {UsuariosService} from './service/usuarios.service';
import {comentario} from '../app/Fichapelicula/comentario.model';

export var COMENTARIOS: comentario[] = [
{"texto":"Recomiendo la película totalmente, soy más de películas del oeste pero esta me ha encantado.",
"usuario":this.perfil[0].id, "fecha":"22/2/2222"},
{"texto":"Fui a verla porque mi novio me obligó, pero aun así me gustó.","usuario":this.perfil[1].id, "fecha":"44/4/4444"},
{"texto":"No esta mal, prefiero las de la primera saga.","usuario":this.perfil[2].id, "fecha":"55/5/5555"}
];
