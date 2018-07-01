import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import TodoList from "./TodoList";

const appRoot = document.getElementById("app")

ReactDOM.render(
    <div> 
        <TodoList/> 
    </div>,
    appRoot
);