import React, {Component} from "react";
import TodoForm from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

export default class TodoListApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    pushToItems = (todo) =>{
        const {items} = this.state;
        this.setState({
            items: [...items, todo]
        });
    }
    
    render(){
        const {items} = this.state;
        return(
            <div id="app">
                <TodoForm pushToItems={this.pushToItems}/>
                <hr/>
                <TodoList items={items}/>
            </div>
        );
    }
}