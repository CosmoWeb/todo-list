import "./style.css";
import {todoItem, project} from "./logic.js";
import {display} from "./display.js";

const newTodo = todoItem("Study javascript", "18/08/26", "High", "At least one hour");

console.log(newTodo);

newTodo.toggleCheck();

console.log(newTodo);

const defaultProject = project("Default");
defaultProject.addItem(newTodo.property);
console.log(defaultProject); 

const show = display();

show.displayTodo(defaultProject.storage);

