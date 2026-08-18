import "./style.css";
import {todoItem, project} from "./logic.js";

const newTodo = todoItem.addTodo("Study javascript", "18/08/26", "High", "At least one hour");

console.log(newTodo);