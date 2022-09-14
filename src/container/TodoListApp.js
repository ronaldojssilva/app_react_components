import React, {Component} from "react";
import TodoForm from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import { ContainerApp } from "../components/ContainerApp";
import { Message, WelcomeMessage } from "../components/Message";

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

    removeFromItems = (index) => {
        const {items} = this.state;
        items.splice(index, 1);
        this.setState({items});
    }
    
    render(){
        const {items} = this.state;
        return(
            <ContainerApp>
                <div className="col-xs-12 col-md-12">
                    <WelcomeMessage/>
                </div>
                <div className="col-xs-12 col-md-12">
                    <TodoForm pushToItems={this.pushToItems}/>
                </div>
                <hr/>
                <div className="col-xs-12 col-md-12">
                    <TodoList items={items} removeFromItems={this.removeFromItems}/>
                </div>
            </ContainerApp>
        );
    }
}