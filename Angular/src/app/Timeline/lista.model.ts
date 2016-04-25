export class lista{
  nombre:string;
  votaciones:number;
  etiquetas:string[];

  constructor(nombre:string, votaciones:number, etiquetas: string[]){
      this.nombre=nombre;
      this.votaciones=votaciones;
      this.etiquetas=etiquetas;
  }

}
