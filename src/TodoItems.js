import React, {Component} from "react";
import "./style/TodoList.css";

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return (
            <p>
                <i className="fa fa-times" onClick={() => this.delete(item.key)}key={item.key}></i> 
                <li>
                {item.text}
                </li>
            </p>
        )
    }

    

    delete(key){
        this.props.delete(key);
    }

    render(){
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="TheList">
                {listItems}
            </ul>
        )
    }
}

export default TodoItems;