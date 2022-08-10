import "./styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

const tarea = new Todo("Aprender a programar!");
todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);


localStorage.setItem('mi-key','')

setTimeout(() => {
    
}, 1500);