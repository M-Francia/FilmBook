import {Injectable} from 'angular2/core';
import {hashtag} from '../Fichapelicula/hashtag.model';

@Injectable()
export class HashtagService{

    getHashtags(){
    return new hashtag("#HatefulEight","Gran pelicula"),
     new hashtag("#HatefulEight","Gran pelicula"),
     new hashtag("#HatefulEight","Gran pelicula"),
     new hashtag("#HatefulEight","Gran pelicula");
  }
}
