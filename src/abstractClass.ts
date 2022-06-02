// This application has the use of abstract classes through the instantiation of my favorite series

abstract class Pelicula{
  abstract rol():string
  abstract introduce():string
}

class Protagonista extends Pelicula{
  public nombre: string;
  public valor: string;
  public vision:string;


  constructor(nombre:string, valor:string, vision:string){
    super()
    this.nombre = nombre;
    this.valor = valor;
    this.vision = vision;
  }
  introduce(): string {
      const myName:string = "Shingeky No Kyojin"
      return myName
  }
  rol(): string {
      return "Protagonista"
  }
  public poder(arg:string):string{
    return arg
  }
}

const protagonista = new Protagonista("Eren Yaeger","Libertad","Destruir toda amenaza");
console.log(protagonista);
console.log(protagonista.introduce());
console.log(protagonista.rol());
console.log(protagonista.poder("Los 9 poderes y la convicción de liberar la humanidad"));


console.log("-----------------------------------------------------------------");


class Antagonista extends Pelicula {
  public nombre: string;
  public valor: string;
  public vision: string;

  constructor(nombre: string, valor: string, vision: string) {
    super();
    this.nombre = nombre;
    this.valor = valor;
    this.vision = vision;
  }
  introduce(): string {
    const myName: string = "Shingeky No Kyojin";
    return myName;
  }
  rol(): string {
    return "Antagonistas";
  }
  public poder(arg: string): string {
    return arg;
  }
}

const antagonista = new Antagonista("Legión de exploración","Amistad","Guardar la humanidad")
console.log(antagonista);
console.log(antagonista.introduce());
console.log(antagonista.rol());
console.log(antagonista.poder("El guión"));

