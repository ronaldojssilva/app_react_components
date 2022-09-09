import React, {Component} from "react";

export default class TodoForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            todo: ''
        };
    }

    onAdd = (event) => {
        event.preventDefault();
        if (todo) {
            this.props.pushToItems(this.state.todo);
        }
    }

    onChange = (event) => {
        this.setState({todo: event.target.value});
    }
    
    render(){
        return(
            <div>
                <input type="text" name='todo' placeholder='Enter todo here' onChange={this.onChange}/>
                <button type='button' onClick={this.onAdd}>Create</button>
            </div>
        );
    }
}