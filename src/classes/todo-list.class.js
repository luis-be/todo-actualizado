export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  borrarTodo(id) {}

  marcarCompletado(id) {}

  eliminarCompletados() {}
}
