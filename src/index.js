import "./styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

const todoList = new TodoList();

const tarea = new Todo("Aprender a programar!");
todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);

console.log(todoList);
