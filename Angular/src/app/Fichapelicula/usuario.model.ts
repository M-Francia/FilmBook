export class usuario{
  foto:string;
  nombre:string;
  email:string;
  contraseña:string;
  frase:string;
  seguidores:string;
  valoracion:string;


  constructor(fotoc:string, nombrec: string, emailc:string, contraseñac: string, frasec:string, seguidoresc:string, valoracionc:string){
      this.foto=fotoc;
      this.nombre=nombrec;
      this.email=emailc;
      this.contraseña=contraseñac;
      this.frase=frasec;
      this.seguidores=seguidoresc;
      this.valoracion=valoracionc;
    }

}
