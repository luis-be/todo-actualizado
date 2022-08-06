export class Todo {
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime(); // Me va a dar milisegundo de todo el momento actual
    this.completado = false;
    this.creado = new Date();
  }
}
